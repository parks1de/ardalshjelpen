'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Scrolls to the element matching window.location.hash after every
 * client-side navigation. Runs after paint so the layout is stable.
 */
export default function HashScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return

    const id = hash.slice(1)
    const el = document.getElementById(id)
    if (!el) return

    // rAF ensures the browser has painted before we scroll
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [pathname])

  return null
}
