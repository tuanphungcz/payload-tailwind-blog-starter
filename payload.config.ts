import path from 'path'
import { en } from 'payload/i18n/en'
import { BlocksFeature, lexicalEditor, LinkFeature } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

import { Media, Posts, Tags, Users } from '@/cms/collections'
import { GlobalSettings } from '@/cms/globals'

import { CodeBlockSchema } from '@/cms/blocks/CodeBlock'
import { onInit } from '@/init/onInit'

const isDevelopment = process.env.NODE_ENV === 'development'
const isProduction = process.env.NODE_ENV === 'production'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'set-a-secret-in-your-env',
  collections: [Users, Media, Tags, Posts],
  globals: [GlobalSettings],
  admin: {
    autoLogin: {
      email: isDevelopment && !isProduction ? 'admin@withpayload.com' : 'user@withpayload.com',
      password: isDevelopment && !isProduction ? process.env.ADMIN_PASSWORD : 'test',
      prefillOnly: true,
    },
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL,
    },
    idType: 'uuid',
    push: isDevelopment,
  }),
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      BlocksFeature({
        blocks: [CodeBlockSchema],
      }),
    ],
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  i18n: {
    supportedLanguages: { en },
  },
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        ['media']: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
  graphQL: {
    disable: true,
  },
  sharp,
  onInit,
})
