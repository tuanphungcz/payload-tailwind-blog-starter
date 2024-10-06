import { getPayload } from '@/utils'
import { cache } from 'react'

interface GetBlogPostBySlugProps {
  slug: string
}

export const getPostBySlug = cache(async ({ slug }: GetBlogPostBySlugProps) => {
  const payload = await getPayload()

  return await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slug,
      },
    },
    sort: '-createdAt',
    limit: 1,
  })
})
