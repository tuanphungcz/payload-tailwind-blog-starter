import type { MetadataRoute } from 'next'

import { getPosts } from '@/actions/getPosts'
import { APP_URL } from '@/constants'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch api
  const posts = await getPosts()

  // Static routes
  const routes = [
    {
      url: APP_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
  ]

  // Generate posts routes
  const postsRoutes = posts.docs.map((post) => ({
    url: `${APP_URL}/${post.slug}`,
    lastModified: new Date(),
    // lastModified: new Date(user.updatedAt ?? new Date()),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  // Combine static and dynamic routes
  return [...routes, ...postsRoutes]
}
