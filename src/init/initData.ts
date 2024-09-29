import { Tag, Post } from 'payload-types'

export const initPosts: Post[] = [
  {
    id: '1',
    title: 'The Future of Web Development',
    author: '9cd0f2be-f86b-4f3c-8297-43a960493a5d',
    slug: 'the-future-of-web-development',
    description:
      "Explore the cutting-edge trends shaping the future of web development and how they'll impact developers and businesses alike.",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    content: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        children: [
          {
            tag: 'h2',
            type: 'heading',
            format: 'start',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'What are freelance rates?',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
          },
          {
            type: 'paragraph',
            format: 'start',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: "Freelance rates are the prices you charge for your services as an independent contractor. These rates can be hourly, project-based, or even retainer-based, depending on the nature of your work and your agreement with the client. Setting the right rate is crucial for ensuring you're fairly compensated for your time and effort.",
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
        ],
        direction: 'ltr',
      },
    },
  },
  {
    id: '2', // Add unique ID
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    title: 'Mastering React Hooks',
    slug: 'mastering-react-hooks',
    author: '9cd0f2be-f86b-4f3c-8297-43a960493a5d',
    description:
      "Explore the cutting-edge trends shaping the future of web development and how they'll impact developers and businesses alike.",
    content: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        children: [
          {
            tag: 'h2',
            type: 'heading',
            format: 'start',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'What are freelance rates?',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
          },
          {
            type: 'paragraph',
            format: 'start',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: "Freelance rates are the prices you charge for your services as an independent contractor. These rates can be hourly, project-based, or even retainer-based, depending on the nature of your work and your agreement with the client. Setting the right rate is crucial for ensuring you're fairly compensated for your time and effort.",
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
        ],
        direction: 'ltr',
      },
    },
  },
  {
    id: '3', // Add unique ID
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    title: 'Optimizing Website Performance',
    slug: 'optimizing-website-performance',
    author: '9cd0f2be-f86b-4f3c-8297-43a960493a5d',
    description:
      "Explore the cutting-edge trends shaping the future of web development and how they'll impact developers and businesses alike.",
    content: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        children: [
          {
            tag: 'h2',
            type: 'heading',
            format: 'start',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'What are freelance rates?',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
          },
          {
            type: 'paragraph',
            format: 'start',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: "Freelance rates are the prices you charge for your services as an independent contractor. These rates can be hourly, project-based, or even retainer-based, depending on the nature of your work and your agreement with the client. Setting the right rate is crucial for ensuring you're fairly compensated for your time and effort.",
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
        ],
        direction: 'ltr',
      },
    },
  },
]

export const initTags: Tag[] = [
  {
    id: '1',
    name: 'web-development',
    label: 'Web Development',
    slug: 'web-development',
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'javascript',
    label: 'JavaScript',
    slug: 'javascript',
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'react',
    label: 'React',
    slug: 'react',
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    name: 'nodejs',
    label: 'Node.js',
    slug: 'nodejs',
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: '5',
    name: 'css',
    label: 'CSS',
    slug: 'css',
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
]
