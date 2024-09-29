import { getPayload } from '@/utils'
import { cache } from 'react'

export const getGlobalSettings = cache(async () => {
  const payload = await getPayload()

  return await payload.findGlobal({
    slug: 'settings',
  })
})
