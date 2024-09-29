import React, { Fragment, JSX } from 'react'
import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'

import {
  IS_BOLD,
  IS_CODE,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
  IS_UNDERLINE,
} from './nodeFormat'
import { slugify } from '@/utils'
import { CodeBlock } from '@/cms/blocks/CodeBlock'

export type NodeTypes = DefaultNodeTypes | SerializedBlockNode<any>

type Props = {
  nodes: NodeTypes[]
}

export function serializeLexical({ nodes }: Props): JSX.Element {
  return (
    <Fragment>
      {nodes?.map((node, index): any => {
        if (node == null) {
          return null
        }

        if (node.type === 'text') {
          let text = <React.Fragment key={index}>{node.text}</React.Fragment>
          if (node.format & IS_BOLD) {
            text = <strong key={index}>{text}</strong>
          }
          if (node.format & IS_ITALIC) {
            text = <em key={index}>{text}</em>
          }
          if (node.format & IS_STRIKETHROUGH) {
            text = (
              <span key={index} style={{ textDecoration: 'line-through' }}>
                {text}
              </span>
            )
          }
          if (node.format & IS_UNDERLINE) {
            text = (
              <span key={index} style={{ textDecoration: 'underline' }}>
                {text}
              </span>
            )
          }
          if (node.format & IS_CODE) {
            text = <code key={index}>{node.text}</code>
          }
          if (node.format & IS_SUBSCRIPT) {
            text = <sub key={index}>{text}</sub>
          }
          if (node.format & IS_SUPERSCRIPT) {
            text = <sup key={index}>{text}</sup>
          }

          return text
        }

        // NOTE: Hacky fix for
        // https://github.com/facebook/lexical/blob/d10c4e6e55261b2fdd7d1845aed46151d0f06a8c/packages/lexical-list/src/LexicalListItemNode.ts#L133
        // which does not return checked: false (only true - i.e. there is no prop for false)
        const serializedChildrenFn = (node: NodeTypes): JSX.Element | null => {
          if (node.children == null) {
            return null
          } else {
            if (node?.type === 'list' && node?.listType === 'check') {
              for (const item of node.children) {
                if ('checked' in item) {
                  if (!item?.checked) {
                    item.checked = false
                  }
                }
              }
            }
            return serializeLexical({ nodes: node.children as NodeTypes[] })
          }
        }

        const serializedChildren = 'children' in node ? serializedChildrenFn(node) : ''

        const getTextFromSerializedChildren = () => {}

        if (node.type === 'block') {
          const block = node.fields

          const blockType = block?.blockType

          if (!block || !blockType) {
            return null
          }

          switch (blockType) {
            case 'codeBlock': {
              return <CodeBlock code={block.customCode} />
            }
          }

          // switch (blockType) {
          //   case 'cta':
          //     return <CallToActionBlock key={index} {...block} />
          //   case 'mediaBlock':
          //     return (
          //       <MediaBlock
          //         className="col-start-1 col-span-3"
          //         imgClassName="m-0"
          //         key={index}
          //         {...block}
          //         captionClassName="mx-auto max-w-[48rem]"
          //         enableGutter={false}
          //         disableInnerContainer={true}
          //       />
          //     )
          //   case 'banner':
          //     return <BannerBlock className="col-start-2 mb-4" key={index} {...block} />
          //   case 'code':
          //     return <CodeBlock className="col-start-2" key={index} {...block} />
          //   default:
          //     return null
          // }
        } else {
          switch (node.type) {
            case 'upload': {
              if (
                node.value &&
                typeof node.value === 'object' &&
                'mimeType' in node.value &&
                'url' in node.value
              ) {
                const { mimeType, url, title } = node.value
                if (
                  typeof mimeType === 'string' &&
                  mimeType.includes('image') &&
                  typeof url === 'string'
                ) {
                  return (
                    <img
                      key={index}
                      src={url}
                      alt={typeof title === 'string' ? title : ''}
                      className="col-start-2 w-full"
                    />
                  )
                }
              }
              return null
            }
            case 'linebreak': {
              return <br className="col-start-2" key={index} />
            }
            case 'paragraph': {
              return (
                <p className="col-start-2" key={index}>
                  {serializedChildren}
                </p>
              )
            }
            case 'heading': {
              const Tag = node?.tag
              const firstChildren = node.children?.[0] as any

              return (
                <Tag
                  id={`heading-${slugify(firstChildren?.text ?? '')}`}
                  className="col-start-2"
                  key={index}
                >
                  {serializedChildren}
                </Tag>
              )
            }
            case 'list': {
              const Tag = node?.tag
              return (
                <Tag className="list col-start-2" key={index}>
                  {serializedChildren}
                </Tag>
              )
            }
            case 'listitem': {
              if (node?.checked != null) {
                return (
                  <li
                    aria-checked={node.checked ? 'true' : 'false'}
                    className={` ${node.checked ? '' : ''}`}
                    key={index}
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                    role="checkbox"
                    tabIndex={-1}
                    value={node?.value}
                  >
                    {serializedChildren}
                  </li>
                )
              } else {
                return (
                  <li key={index} value={node?.value}>
                    {serializedChildren}
                  </li>
                )
              }
            }
            case 'quote': {
              return (
                <blockquote className="col-start-2" key={index}>
                  {serializedChildren}
                </blockquote>
              )
            }
            // case 'link': {
            //   const fields = node.fields

            //   return (
            //     <CMSLink
            //       key={index}
            //       newTab={Boolean(fields?.newTab)}
            //       reference={fields.doc as any}
            //       type={fields.linkType === 'internal' ? 'reference' : 'custom'}
            //       url={fields.url}
            //     >
            //       {serializedChildren}
            //     </CMSLink>
            //   )
            // }

            default:
              return null
          }
        }
      })}
    </Fragment>
  )
}
