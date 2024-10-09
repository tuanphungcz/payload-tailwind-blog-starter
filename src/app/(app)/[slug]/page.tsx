import { Metadata } from 'next/types'
import Image from 'next/image'

import { getAdjacentPosts, getPostBySlug } from '@/actions'
import { notFound } from 'next/navigation'
import { Title, Breadcrumb, Badge, Container } from '@/components/common'

import { formatDate, getMetadata, slugify } from '@/utils'
import { getGlobalSettings } from '@/actions'
import { APP_URL } from '@/constants'
import { RichTextRenderer } from '@/cms/blocks/utils/RichTextRenderer'
import Link from 'next/link'
import { TableOfContents } from '@/components/common/TableOfContents'

interface BlogPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { seo } = await getGlobalSettings()
  const { slug } = params
  const {
    docs: [post],
  } = await getPostBySlug({ slug })

  if (!post) {
    return {}
  }

  const title = `${post.title} - ${seo?.metaTitle}`
  const description = post.description || ''
  const imageUrl =
    (post.featuredImage &&
      typeof post.featuredImage === 'object' &&
      'url' in post.featuredImage &&
      `${APP_URL}${post.featuredImage.url}`) ||
    undefined

  const url = `${APP_URL}/${slug}`

  return getMetadata({
    title,
    description,
    imageUrl,
    url,
  })
}

const BlogPage = async ({ params }: BlogPageProps) => {
  const { slug } = params
  const {
    docs: [post],
  } = await getPostBySlug({ slug })

  if (!post) {
    return notFound()
  }

  const { previousPost, nextPost } = await getAdjacentPosts({ currentPostId: post.id.toString() })

  const headings = post.content?.root?.children
    .filter((node: any) => node.type === 'heading')
    .map((heading: any, index: number) => heading.children[0].text)

  const featuredImageUrl =
    post.featuredImage &&
    typeof post.featuredImage === 'object' &&
    'url' in post.featuredImage &&
    `${APP_URL}${post.featuredImage.url}`

  return (
    <article className="space-y-10">
      <header className="space-y-10 py-16 bg-gray-100">
        <Container>
          <div className="space-y-6">
            <Breadcrumb items={[{ href: '/', label: 'Home' }, { label: post.title }]} />

            <div className="space-y-2">
              <Title>{post.title}</Title>

              <div className="prose max-w-none text-gray-500 dark:text-gray-600 text-lg">
                {post.description}
              </div>
            </div>

            <div className="flex flex-col xs:flex-row xs:items-center text-gray-400">
              <span>{typeof post.author === 'string' ? post.author : post.author.name}</span>
              <span aria-hidden="true" className="mx-2 hidden xs:block">
                &middot;
              </span>
              <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
            </div>
          </div>
        </Container>
      </header>
      <Container className="md:flex md:gap-14 md:space-x-0 py-12 md:justify-between">
        <aside className="space-y-12 py-6 md:sticky md:top-16 md:h-screen md:overflow-y-auto md:w-1/4 hidden md:block">
          <div className="flex items-center space-x-4">
            {typeof post.author !== 'string' &&
              (post.author.avatar ? (
                <Image
                  src={
                    typeof post.author.avatar === 'string'
                      ? post.author.avatar
                      : post.author.avatar.url || ''
                  }
                  alt={post.author.name || 'Author'}
                  width={48}
                  height={48}
                  className="size-12 rounded-full object-cover block aspect-square"
                />
              ) : (
                <div className="size-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
                  {post.author.name
                    .split(' ')
                    .slice(0, 2)
                    .map((word: any) => word[0])
                    .join('')
                    .toUpperCase()}
                </div>
              ))}

            <h3 className="text-base font-semibold">
              {typeof post.author === 'string' ? post.author : post.author.name}
            </h3>
          </div>

          <div className="space-y-4">
            {previousPost && (
              <div>
                <div className="text-sm text-gray-500">Previous article</div>
                <Link href={`/${previousPost.slug}`} className="block hover:underline font-medium">
                  {previousPost.title}
                </Link>
              </div>
            )}
            {nextPost && (
              <div>
                <div className="text-sm text-gray-500">Next article</div>
                <Link href={`/${nextPost.slug}`} className="block hover:underline font-medium">
                  {nextPost.title}
                </Link>
              </div>
            )}
          </div>

          <TableOfContents headings={headings ?? []} />
        </aside>
        <div className="md:w-3/4 space-y-10 py-6">
          {featuredImageUrl && (
            <div className="relative w-full aspect-video">
              <Image
                src={featuredImageUrl}
                alt={post.title}
                fill
                className="object-cover rounded-lg shadow-md"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none article-content">
            <RichTextRenderer content={post.content} />
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag) => {
              if (typeof tag === 'string') {
                return <Badge key={tag}>{tag}</Badge>
              }
              return <Badge key={tag.id}>{tag.label || tag.name}</Badge>
            })}
          </div>
        </div>
      </Container>
    </article>
  )
}

export default BlogPage
