import { CollectionConfig } from 'payload'
import { formatSlug } from '@/utils'
import { isAdmin, isAnyone } from '@/utils/access'

export const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: isAnyone,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Name',
    },
    {
      name: 'label',
      type: 'text',
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug('name')],
      },
    },
  ],
}
