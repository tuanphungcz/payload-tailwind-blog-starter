import { isAdmin, isAnyone } from '@/utils/access'
import { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: isAnyone,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  auth: true,
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'role', type: 'select', options: ['admin', 'user'], saveToJWT: true },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      label: 'Avatar',
      admin: {
        position: 'sidebar',
        description: 'This image will be used as the avatar.',
      },
    },
  ],
}
