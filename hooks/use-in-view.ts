"use client"

import { useEffect, useRef, useState } from "react"

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If IntersectionObserver is unavailable, default to visible
    if (typeof IntersectionObserver === "undefined") {
      setInView(true)
      return
    }

    // Create a fallback timer so content never stays hidden if the observer fails
    const fallbackTimer = setTimeout(() => setInView(true), 1500)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
          clearTimeout(fallbackTimer)
        }
      },
      { threshold }
    )
    observer.observe(el)

    return () => {
      observer.disconnect()
      clearTimeout(fallbackTimer)
    }
  }, [threshold])

  return { ref, inView }
}
