import { FieldHook } from 'payload'
import { APP_URL } from '@/constants'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const format = (val: string): string =>
  val
    .replace(/ /g, '-')
    .replace(/[^\w-/]+/g, '')
    .toLowerCase()

export const formatSlug =
  (fallback: string): FieldHook =>
  ({ value, originalDoc, data }) => {
    if (typeof value === 'string') {
      return format(value)
    }
    const fallbackData = data?.[fallback] || originalDoc?.[fallback]

    if (fallbackData && typeof fallbackData === 'string') {
      return format(fallbackData)
    }

    return value
  }

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(str: string) {
  str = str.replace(/^\s+|\s+$/g, '') // trim leading/trailing white space
  str = str.toLowerCase() // convert string to lowercase
  str = str
    // .replace(/[^a-z0-9 -]/g, "") // remove any non-alphanumeric characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-') // remove consecutive hyphens
    .replace(/\./g, '-') // replace periods with hyphens
  return str
}

export const slugifyHeading = (str: string) => `heading-${slugify(str)}`

export const stripUrl = (url: string | null) => {
  if (!url) {
    return ''
  }
  return url
    .replace(/^https?:\/\//, '')
    .replace(/\/$/, '')
    .replace('www.', '')
}

export const isValidUrl = (url: string) => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export const getOgImageUrl = ({ title, description }: { title: string; description: string }) => {
  const ogImageUrl = new URL(`${APP_URL}/api/og`)
  ogImageUrl.searchParams.append('title', title)
  ogImageUrl.searchParams.append('description', description)

  return ogImageUrl.toString()
}

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
