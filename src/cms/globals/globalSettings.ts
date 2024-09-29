import { isAdmin, isAnyone } from '@/utils/access'
import { GlobalConfig } from 'payload'

export const GlobalSettings: GlobalConfig = {
  slug: 'settings',
  access: {
    read: isAnyone,
    update: isAdmin,
  },
  fields: [
    {
      name: 'homepage',
      type: 'group',
      label: 'Homepage',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Home Page Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Home Page Description',
        },
      ],
    },

    {
      name: 'navbar',
      type: 'group',
      label: 'Navbar',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Navbar Title',
          required: true,
        },
      ],
    },
    {
      name: 'footer',
      type: 'group',
      label: 'Footer',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Text',
        },
      ],
    },
    {
      name: 'socials',
      type: 'group',
      label: 'Socials',
      fields: [
        {
          name: 'twitter',
          type: 'text',
          label: 'Twitter',
        },
        {
          name: 'linkedin',
          type: 'text',
          label: 'Linkedin',
        },
        {
          name: 'github',
          type: 'text',
          label: 'Github',
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
        },
      ],
    },

    {
      name: 'analytics',
      type: 'group',
      label: 'Analytics',
      fields: [
        {
          name: 'googleAnalyticsId',
          type: 'text',
          label: 'Google Analytics ID',
        },
        {
          name: 'umami',
          type: 'group',
          label: 'Umami',
          fields: [
            {
              name: 'umamiWebsiteId',
              type: 'text',
              label: 'Umami Website ID',
            },
            {
              name: 'umamiSrc',
              type: 'text',
              label: 'Umami Src',
            },
          ],
        },
      ],
    },
  ],
}
