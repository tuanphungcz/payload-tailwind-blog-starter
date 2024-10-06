import { Tag, Post, Media } from 'payload-types'

export const getInitPosts = (mediaImages: Media[]): Post[] => [
  {
    id: '127ac7fa-a36c-4e1c-a3b1-824dbacd39ab',
    slug: 'introducing-payload-tailwind-blog-starter',
    title: 'Introducing Payload Tailwind Blog Starter',
    description: 'Deploy a blog using payloadcms with a couple of clicks',
    content: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        children: [
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: null,
            textStyle: '',
            textFormat: 0,
          },
          {
            tag: 'h2',
            type: 'heading',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Getting started',
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
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Have you been wanting to start a blog but feel overwhelmed by the hassle of setting up a CMS and everything that comes with it?',
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
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: "In this tutorial, I'll show you how to launch your first blog in just a few clicks using Vercel and PayloadCMS, so you can start blogging right away!",
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
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: null,
            textStyle: '',
            textFormat: 0,
          },
          {
            tag: 'h2',
            type: 'heading',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Vercel setup',
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
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: "First, you'll need a ",
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1,
              },
              {
                id: '67030b29dbefe56aeae10ba2',
                type: 'link',
                fields: {
                  url: 'https://vercel.com/signup',
                  newTab: true,
                  linkType: 'custom',
                },
                format: '',
                indent: 0,
                version: 3,
                children: [
                  {
                    mode: 'normal',
                    text: 'Vercel account ',
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
                mode: 'normal',
                text: 'and a ',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1,
              },
              {
                id: '67030b35dbefe56aeae10ba3',
                type: 'link',
                fields: {
                  url: 'https://github.com/signup',
                  newTab: true,
                  linkType: 'custom',
                },
                format: '',
                indent: 0,
                version: 3,
                children: [
                  {
                    mode: 'normal',
                    text: 'GitHub account',
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
                mode: 'normal',
                text: '. You can create them using the provided links.',
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
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: null,
            textStyle: '',
            textFormat: 0,
          },
          {
            tag: 'h2',
            type: 'heading',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Deploying the blog',
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
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: "To make the deployment even easier, I've created a deploy button that allows you to set it up in just a few clicks or you can clone the repo and set it up yourself.",
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
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                id: '67030ac4dbefe56aeae10b9f',
                type: 'link',
                fields: {
                  url: 'https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftuanphungcz%2Fpayload-tailwind-blog-starter&env=PAYLOAD_SECRET,ADMIN_PASSWORD&project-name=payload-tailwind-blog-starter&repository-name=payload-tailwind-blog-starter&demo-url=https%3A%2F%2Fpayload-tailwind-blog-starter.vercel.app%2F&demo-image=https%3A%2F%2Fpayload-tailwind-blog-starter.vercel.app%2Fog-image.jpg&stores=[{%22type%22:%22blob%22},{%22type%22:%22postgres%22}]',
                  newTab: true,
                  linkType: 'custom',
                },
                format: '',
                indent: 0,
                version: 3,
                children: [
                  {
                    mode: 'normal',
                    text: 'Deploy with vercel',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
              },
            ],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: null,
            textStyle: '',
            textFormat: 0,
          },
          {
            id: '670308f9bface6022c682406',
            type: 'upload',
            value: mediaImages[0],
            fields: null,
            format: '',
            version: 3,
            relationTo: 'media',
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: "Once you've clicked the button, you'll be redirected to Vercel and can click on create a new project.",
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
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: null,
            textStyle: '',
            textFormat: 0,
          },
          {
            id: '67030906bface6022c682407',
            type: 'upload',
            value: mediaImages[1],
            fields: null,
            format: '',
            version: 3,
            relationTo: 'media',
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'You will be asked to add storages for both Postgres and Vercel Blob.',
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
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            id: '67030916bface6022c682408',
            type: 'upload',
            value: mediaImages[2],
            fields: null,
            format: '',
            version: 3,
            relationTo: 'media',
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'For required variables, you can use the following:',
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
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: null,
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'block',
            fields: {
              id: '67030b0adbefe56aeae10ba1',
              blockName: '',
              blockType: 'codeBlock',
              customCode:
                '- PAYLOAD_SECRET: `add your own secret`\n- ADMIN_PASSWORD: `add your own password, this is the password for the admin user`',
            },
            format: '',
            version: 2,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'and then click on deploy and wait a couple of minutes for the project to be deployed.',
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
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            id: '6703091dbface6022c682409',
            type: 'upload',
            value: mediaImages[3],
            fields: null,
            format: '',
            version: 3,
            relationTo: 'media',
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Once the project is deployed, you can click on "Go to dashboard" to see the project dashboard with the blog vercel url (e.g. `',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1,
              },
              {
                id: '67030ca6dbefe56aeae10ba5',
                type: 'link',
                fields: {
                  url: 'https://payload-tailwind-blog-starter.vercel.app/',
                  newTab: true,
                  linkType: 'custom',
                },
                format: '',
                indent: 0,
                version: 3,
                children: [
                  {
                    mode: 'normal',
                    text: 'https://payload-tailwind-blog-starter.vercel.app/',
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
                mode: 'normal',
                text: '`).',
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
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            id: '67030929bface6022c68240a',
            type: 'upload',
            value: mediaImages[4],
            fields: null,
            format: '',
            version: 3,
            relationTo: 'media',
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            id: '67030943bface6022c68240c',
            type: 'upload',
            value: mediaImages[5],
            fields: null,
            format: '',
            version: 3,
            relationTo: 'media',
          },
          {
            tag: 'h2',
            type: 'heading',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Admin dashboard',
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
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'The most exciting part about PayloadCMS is the admin dashboard. It allows you to manage your blog content, users, and settings.',
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
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'To access the admin dashboard, you can click on the "Admin" button in the top right corner of the blog.',
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
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            id: '67030950bface6022c68240d',
            type: 'upload',
            value: mediaImages[6],
            fields: null,
            format: '',
            version: 3,
            relationTo: 'media',
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            id: '67030958bface6022c68240e',
            type: 'upload',
            value: mediaImages[7],
            fields: null,
            format: '',
            version: 3,
            relationTo: 'media',
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            id: '6703096fbface6022c682410',
            type: 'upload',
            value: mediaImages[8],
            fields: null,
            format: '',
            version: 3,
            relationTo: 'media',
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            id: '67030975bface6022c682411',
            type: 'upload',
            value: mediaImages[9],
            fields: null,
            format: '',
            version: 3,
            relationTo: 'media',
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'You will be redirected to the admin dashboard login page. Where you can login with the admin user and password you set in the vercel environment variables.',
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
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'If we did everything right, we should be able to see the working blog 🎉',
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
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0,
          },
        ],
        direction: 'ltr',
      },
    },
    author: {
      id: '2bada19c-a68c-4ccb-b294-58a9b9bbff74',
      name: 'Admin',
      role: 'admin',
      avatar: null,
      updatedAt: '2024-10-03T14:16:45.153Z',
      createdAt: '2024-10-03T14:16:45.153Z',
      email: 'admin@withpayload.com',
      loginAttempts: 0,
    },
    tags: [
      {
        id: '3e5cd3d6-244e-45a0-b03d-925ee2870fb4',
        name: 'nodejs',
        label: 'Node.js',
        slug: 'nodejs',
        updatedAt: '2024-10-03T14:16:46.269Z',
        createdAt: '2024-10-03T14:16:40.318Z',
      },
    ],
    featuredImage: null,
    updatedAt: '2024-10-06T22:21:51.965Z',
    createdAt: '2024-10-03T14:16:40.318Z',
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
