import { getPayload } from '@/utils'
import { Tag } from 'payload-types'
import { cache } from 'react'

export const getTags = cache(async (): Promise<{ docs: Tag[] }> => {
  const payload = await getPayload()

  const tags = await payload.find({
    collection: 'tags',
  })

  return tags
})
