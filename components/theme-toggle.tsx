"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = stored === "dark" || (stored === null && prefersDark)

    setIsDark(shouldBeDark)
    document.documentElement.classList.toggle("dark", shouldBeDark)
  }, [])

  const toggleTheme = () => {
    setIsTransitioning(true)

    const ripple = document.createElement("div")
    ripple.className = "theme-transition-ripple"
    ripple.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: ${isDark ? "#ffffff" : "#000000"};
      transform: translate(-50%, -50%) scale(0);
      z-index: 9999;
      pointer-events: none;
      transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      mix-blend-mode: difference;
      will-change: transform;
    `
    document.body.appendChild(ripple)

    requestAnimationFrame(() => {
      ripple.style.transform = "translate(-50%, -50%) scale(100)"
    })

    setTimeout(() => {
      const newTheme = !isDark
      setIsDark(newTheme)
      localStorage.setItem("theme", newTheme ? "dark" : "light")
      document.documentElement.classList.toggle("dark", newTheme)
    }, 200)

    setTimeout(() => {
      if (document.body.contains(ripple)) {
        document.body.removeChild(ripple)
      }
      setIsTransitioning(false)
    }, 400)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      disabled={isTransitioning}
      className="relative overflow-hidden transition-all duration-300 hover:scale-110 active:scale-95"
    >
      <Sun
        className={`h-5 w-5 transition-all duration-500 ease-out ${isDark ? "rotate-180 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-all duration-500 ease-out ${isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0"}`}
      />
      {isTransitioning && <div className="absolute inset-0 rounded-full bg-current opacity-20 animate-ping" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
