import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

export const getPayload = async () => {
  const payload = await getPayloadHMR({ config: await configPromise })

  return payload
}
