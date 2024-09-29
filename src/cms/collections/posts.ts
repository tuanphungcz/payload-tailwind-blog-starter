import { CollectionConfig } from 'payload'
import { formatSlug } from '@/utils'
import { isAdmin, isAnyone } from '@/utils/access'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: isAnyone,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      required: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      label: 'Author',
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      label: 'Tags',
      hasMany: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Featured Image',
      admin: {
        position: 'sidebar',
        description: 'This image will be used as the featured image for the post',
      },
    },
  ],
}
