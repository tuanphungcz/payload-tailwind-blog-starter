export const getMetadata = ({
  title,
  description,
  imageUrl,
  url,
}: {
  title: string
  description: string
  imageUrl?: string | undefined
  url: string
}) => {
  return {
    title,
    description,
    robots: 'follow, index',
    openGraph: {
      title,
      description,
      url,
      siteName: title,
      images: imageUrl ? [imageUrl] : undefined,
      type: 'article',
    },
    twitter: {
      siteName: title,
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  }
}
