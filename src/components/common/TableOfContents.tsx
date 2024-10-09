'use client'

import { useEffect, useRef } from 'react'
import tocbot, { IStaticOptions } from 'tocbot'

interface TableOfContentsProps extends IStaticOptions {
  contentSelector: string
  headingSelector: string
  hasInnerContainers?: boolean
  enableUrlHashUpdateOnScroll?: boolean
  collapseDepth?: number
  orderedList?: boolean
  scrollSmooth?: boolean
  scrollSmoothDuration?: number
  scrollSmoothOffset?: number
  headingsOffset?: number
  extraLinkClasses?: string
  activeLinkClass?: string
}

export const TableOfContents = ({
  contentSelector,
  headingSelector,
  hasInnerContainers = true,
  enableUrlHashUpdateOnScroll = true,
  collapseDepth = 6,
  orderedList = false,
  scrollSmooth = true,
  scrollSmoothDuration = 400,
  scrollSmoothOffset = -150,
  headingsOffset = 150,
  extraLinkClasses = 'block text-base hover:underline text-gray-700 hover:text-gray-900 transition-colors',
  activeLinkClass = 'text-gray-900 font-semibold',
  ...rest
}: TableOfContentsProps) => {
  const tocRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    tocbot.init({
      tocSelector: '.js-toc',
      contentSelector,
      headingSelector,
      hasInnerContainers,
      enableUrlHashUpdateOnScroll,
      collapseDepth,
      orderedList,
      scrollSmooth,
      scrollSmoothDuration,
      extraLinkClasses,
      activeLinkClass,
      scrollSmoothOffset,
      headingsOffset,
      ...rest,
    })

    return () => {
      tocbot.destroy()
    }
  }, [
    contentSelector,
    headingSelector,
    hasInnerContainers,
    collapseDepth,
    orderedList,
    scrollSmooth,
    scrollSmoothDuration,
    activeLinkClass,
    scrollSmoothOffset,
    headingsOffset,
    extraLinkClasses,
    enableUrlHashUpdateOnScroll,
    rest,
  ])

  return (
    <div className="toc-container space-y-2">
      <h2 className="text-xl font-bold">Table of Contents</h2>
      <div ref={tocRef} className="js-toc"></div>
    </div>
  )
}
