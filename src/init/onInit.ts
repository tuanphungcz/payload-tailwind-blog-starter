import { initPosts, initTags } from '@/init/initData'
import path from 'path'
import { Payload } from 'payload'
import fs from 'fs'

export async function onInit(payload: Payload) {
  try {
    const hasUsers = await payload.find({
      collection: 'users',
      limit: 1,
      where: {
        email: {
          equals: 'admin@withpayload.com',
        },
      },
    })

    if (hasUsers.docs.length === 0) {
      console.log('Starting initialization process...')

      const userImagePaths = [
        path.join(process.cwd(), 'src', 'init', 'avatar-1.jpg'),
        path.join(process.cwd(), 'src', 'init', 'image-1.jpg'),
        path.join(process.cwd(), 'src', 'init', 'image-2.jpg'),
        path.join(process.cwd(), 'src', 'init', 'image-3.jpg'),
      ]

      const userImages = await Promise.all(
        userImagePaths.map(async (imagePath, index) => {
          const fileBuffer = fs.readFileSync(imagePath)
          return await payload.create({
            collection: 'media',
            data: {
              title: `image ${index + 1}`,
            },
            file: {
              data: fileBuffer,
              name: `image-${index + 1}.jpg`,
              mimetype: 'image/jpeg',
              size: fileBuffer.byteLength,
            },
          })
        }),
      )

      console.log('User images uploaded:', userImages)

      console.log('Creating admin user...')
      const admin = await payload.create({
        collection: 'users',
        data: {
          name: 'Admin',
          email: 'admin@withpayload.com',
          password: process.env.ADMIN_PASSWORD,
          avatar: userImages[0].id,
          role: 'admin',
        },
      })
      console.log('Admin user created:', admin)

      const user = await payload.create({
        collection: 'users',
        data: {
          name: 'User 1',
          email: 'user@withpayload.com',
          password: 'test',
          avatar: userImages[0].id,
          role: 'user',
        },
      })

      console.log('Use user created:', user)

      console.log('Creating site settings...')
      await payload.updateGlobal({
        slug: 'settings',
        data: {
          homepage: {
            title: 'Payload Tailwind Blog Starter',
            description: 'This is a blog starter built with PayloadCMS',
          },
          navbar: {
            title: 'Payload Tailwind Blog Starter',
          },
          footer: {
            text: '© 2024 Payload Tailwind Blog Starter',
          },
          socials: {
            github: 'https://github.com/tuanphungcz/payloadcms-blog',
            twitter: 'https://github.com/tuanphungcz/payloadcms-blog',
            linkedin: 'https://github.com/tuanphungcz/payloadcms-blog',
          },
          seo: {
            metaTitle: 'Payload Tailwind Blog Starter',
            metaDescription: 'This is a starter blog built with PayloadCMS',
          },
        },
      })

      console.log('Creating tags...')
      await Promise.all(
        initTags.map(async (tag) => {
          await payload.create({
            collection: 'tags',
            data: tag,
          })
        }),
      )

      console.log('Getting all tags...')
      const tags = await payload.find({
        collection: 'tags',
      })

      console.log('Creating posts...')
      await Promise.all(
        initPosts.map(async (post, index) => {
          await payload.create({
            collection: 'posts',
            data: {
              ...post,
              author: admin.id,
              featuredImage: userImages[index + 1].id,
              tags: [tags.docs[index].id],
            },
          })
        }),
      )

      console.log('Setup complete')
    } else {
      console.log('Initialization already completed. Skipping setup.')
    }
  } catch (error) {
    console.error('Error during initialization:')
    console.error(JSON.stringify(error, null, 2))
  }
}
