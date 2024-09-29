import { getPayload } from '@/utils'
import { cache } from 'react'

interface GetBlogPostsProps {
  selectedTags?: string[]
  sortBy?: string
}

export const getPosts = cache(async ({ selectedTags, sortBy }: GetBlogPostsProps = {}) => {
  const payload = await getPayload()

  return await payload.find({
    collection: 'posts',
    where: {
      ...(selectedTags &&
        selectedTags.length > 0 && {
          'tags.name': {
            in: selectedTags,
          },
        }),
    },
    sort: sortBy,
  })
})

interface GetAdjacentPostsProps {
  currentPostId: string
}

export const getAdjacentPosts = cache(async ({ currentPostId }: GetAdjacentPostsProps) => {
  const payload = await getPayload()

  const allPosts = await payload.find({
    collection: 'posts',
    sort: '-createdAt',
    limit: 3,
  })

  const currentPostIndex = allPosts.docs.findIndex((post) => post.id === currentPostId)

  return {
    previousPost: currentPostIndex > 0 ? allPosts.docs[currentPostIndex - 1] : null,
    nextPost:
      currentPostIndex < allPosts.docs.length - 1 ? allPosts.docs[currentPostIndex + 1] : null,
  }
})
