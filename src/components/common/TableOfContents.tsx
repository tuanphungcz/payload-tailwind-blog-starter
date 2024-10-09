'use client'

import React, { useState, useEffect } from 'react'
import { slugifyHeading } from '@/utils/helpers'

export const TableOfContents = ({ headings }: { headings: string[] }) => {
  const { activeId, setActiveId } = useTableOfContents(headings)

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -100
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
      setActiveId(id)
    }
  }

  return (
    <nav>
      <h2 className="mb-4 text-lg font-semibold">Table of Contents</h2>
      <ul className="space-y-2">
        {headings.map((heading, index) => {
          const id = slugifyHeading(heading)
          return (
            <div
              key={index}
              onClick={() => handleClick(id)}
              className={`text-slate-700 hover:underline cursor-pointer ${
                activeId === id ? 'font-bold text-blue-600' : ''
              }`}
            >
              {heading}
            </div>
          )
        })}
      </ul>
    </nav>
  )
}

const useTableOfContents = (headings: string[]) => {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
          replaceHashInUrl(entry.target.id)
        }
      })
    }, observerOptions)

    const headingElements = headings
      .map((heading) => document.getElementById(slugifyHeading(heading)))
      .filter((element): element is HTMLElement => element !== null)

    headingElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [headings])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        replaceHashInUrl('')
        setActiveId(null)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { activeId, setActiveId }
}

const observerOptions = {
  root: null,
  rootMargin: '-10% 0px -80% 0px',
  threshold: 0.1,
}

const replaceHashInUrl = (hash: string) => {
  const url = new URL(window.location.href)
  url.hash = hash
  window.history.replaceState({}, '', url.toString())
}
