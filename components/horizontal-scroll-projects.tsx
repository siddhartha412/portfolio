'use client'

import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import MagneticButton from '@/components/magnetic-button'
import ScrollReveal from '@/components/scroll-reveal'
import { Github, ExternalLink, Zap, Code, Palette, Box } from 'lucide-react'

interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  demo: string
  icon: React.ReactNode
}

const projects: Project[] = [
  {
    title: 'DiscordAI',
    description:
      'Just a ai with refining the response of gemini ai and with Discord.py integration for enhanced AI interactions.',
    tech: ['Python', 'Discord.py', 'Gemini API', 'AI'],
    github: 'https://github.com/siddhartha412/DiscordAI',
    demo: '#',
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: 'Manga App',
    description:
      'A app which helps to download all your favourite mangas which is made with mangaanelo and electron.',
    tech: ['JavaScript', 'Electron', 'Mangaanelo API'],
    github: 'https://github.com/siddhartha412/manga-app',
    demo: '#',
    icon: <Code className="h-6 w-6" />,
  },
  {
    title: 'Couplescraze',
    description:
      'A TypeScript project focused on creating engaging couple-focused applications and features.',
    tech: ['TypeScript', 'Web Development'],
    github: 'https://github.com/siddhartha412/Couplescraze',
    demo: '#',
    icon: <Palette className="h-6 w-6" />,
  },
  {
    title: 'Chess Game',
    description:
      'A JavaScript-based chess game implementation with interactive gameplay and clean interface.',
    tech: ['JavaScript', 'Game Development', 'Chess Logic'],
    github: 'https://github.com/siddhartha412/chess',
    demo: '#',
    icon: <Box className="h-6 w-6" />,
  },
]

export function HorizontalScrollProjects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        return
      }
      e.preventDefault()
      gsap.to(container, {
        scrollLeft: container.scrollLeft + e.deltaX + e.deltaY,
        duration: 0.6,
        ease: 'power2.out',
      })
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsMouseDown(true)
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0))
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0)
  }

  const handleMouseLeave = () => {
    setIsMouseDown(false)
  }

  const handleMouseUp = () => {
    setIsMouseDown(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollContainerRef.current) return

    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <div className="w-full">
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide cursor-grab active:cursor-grabbing select-none"
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {projects.map((project, index) => (
          <div key={index} className="flex-shrink-0 w-96">
            <ScrollReveal delay={index * 100} direction="scale">
              <Card className="hover:shadow-2xl hover:shadow-primary/10 hover:scale-105 hover:-translate-y-2 transition-all duration-500 group border-border/50 hover:border-primary/50 h-full cursor-pointer bg-card/50 backdrop-blur-sm backdrop-saturate-150 supports-[backdrop-filter]:bg-card/30">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-muted/50 backdrop-blur-sm rounded-lg group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {project.icon}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="leading-relaxed text-sm group-hover:text-foreground transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs group-hover:border-primary group-hover:text-primary transition-colors duration-300 bg-background/50 backdrop-blur-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <MagneticButton size="sm" variant="outline" className="flex-1">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </MagneticButton>
                    {project.demo !== '#' && (
                      <MagneticButton size="sm" className="flex-1">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </MagneticButton>
                    )}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        ))}
      </div>
    </div>
  )
}
