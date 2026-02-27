'use client'

import { useEffect } from 'react'

export function useLenis() {
  useEffect(() => {
    // Enable smooth scrolling behavior via CSS
    document.documentElement.style.scrollBehavior = 'smooth'
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])
}
