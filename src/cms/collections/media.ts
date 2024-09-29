import { CollectionConfig } from 'payload'
import { isAdmin, isAnyone } from '@/utils/access'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
        height: 300,
        position: 'centre',
      },
    ],
    adminThumbnail: ({ doc: media }) => (media?.sizes as any)?.thumbnail?.url || media.url,
  },
  access: {
    read: isAnyone,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'rawContent',
      type: 'textarea',
    },
  ],
}
