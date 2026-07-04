"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

function getInitialTheme(): boolean {
  if (typeof window === "undefined") return true
  const stored = localStorage.getItem("theme")
  if (stored === "light") return false
  if (stored === "dark") return true
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(getInitialTheme)

  const toggleTheme = () => {
    const newTheme = !isDark
    const html = document.documentElement

    // Disable all transitions during theme switch to prevent lag
    html.classList.add("no-transitions")
    html.classList.toggle("dark", newTheme)
    // Force reflow
    html.offsetHeight
    html.classList.remove("no-transitions")

    setIsDark(newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden transition-all duration-300 hover:scale-110 active:scale-95"
    >
      <Sun
        className={`h-5 w-5 transition-all duration-500 ease-out ${isDark ? "rotate-180 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-all duration-500 ease-out ${isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0"}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
