"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Mail,
  ExternalLink,
  Menu,
  Code,
  Palette,
  Zap,
  Database,
  Server,
  GitBranch,
  Layers,
  Terminal,
  Figma,
  Box,
  Worm,
  MessageCircle,
  Instagram,
  BookOpen,
  Clock,
} from "lucide-react"
import SplitText from "@/components/split-text"
import ScrollReveal from "@/components/scroll-reveal"
import MagneticButton from "@/components/magnetic-button"
import { ThemeToggle } from "@/components/theme-toggle"
import { DiscordStatus } from "@/components/discord-status"
import Image from "next/image"
import { useScroll, animated } from "@react-spring/web" // Import useScroll and animated
import ScrollProgress from "@/components/scroll-progress"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const { scrollYProgress } = useScroll()

  const parallaxY1 = scrollYProgress.to([0, 1], [0, -50])
  const parallaxY2 = scrollYProgress.to([0, 1], [0, 75])
  const parallaxY3 = scrollYProgress.to([0, 1], [0, -25])

  const navOpacity = scrollYProgress.to([0, 0.1], [0.8, 0.95])
  const navBlur = scrollYProgress.to([0, 0.1], [8, 16])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />

      <animated.nav
        className="fixed top-0 w-full border-b border-border/50 z-40"
        style={{
          backgroundColor: isLoaded
            ? navOpacity.to((opacity) => `rgba(var(--background), ${opacity})`)
            : "rgba(var(--background), 0.9)",
          backdropFilter: isLoaded
            ? navBlur.to((blur) => `blur(${blur}px) saturate(150%)`)
            : "blur(12px) saturate(150%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-bold text-lg tracking-tight text-foreground hover:opacity-75 transition-all duration-300 hover:scale-105"
            >
              siddhartha412
            </button>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                <span className="relative">
                  Home
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    viewBox="0 0 100 4"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,2.1 Q12,0.8 25,2.3 Q38,3.1 50,1.9 Q62,0.7 75,2.4 Q88,3.2 100,1.8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      className="text-primary"
                      strokeLinecap="round"
                      strokeDasharray="100"
                      strokeDashoffset="100"
                    />
                  </svg>
                  <style jsx>{`
                    .group:hover path {
                      animation: drawIn 0.6s ease-out forwards;
                    }
                    .group:not(:hover) path {
                      animation: eraseOut 0.4s ease-in forwards;
                    }
                    @keyframes drawIn {
                      to {
                        stroke-dashoffset: 0;
                      }
                    }
                    @keyframes eraseOut {
                      from {
                        stroke-dashoffset: 0;
                      }
                      to {
                        stroke-dashoffset: -100;
                      }
                    }
                  `}</style>
                </span>
              </button>
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                <span className="relative">
                  About
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    viewBox="0 0 100 4"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,1.8 Q15,3.2 28,1.7 Q42,0.9 55,2.6 Q68,3.3 82,1.5 Q95,0.6 100,2.2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      className="text-primary"
                      strokeLinecap="round"
                      strokeDasharray="100"
                      strokeDashoffset="100"
                    />
                  </svg>
                  <style jsx>{`
                    .group:hover path {
                      animation: drawIn 0.6s ease-out forwards;
                    }
                    .group:not(:hover) path {
                      animation: eraseOut 0.4s ease-in forwards;
                    }
                    @keyframes drawIn {
                      to {
                        stroke-dashoffset: 0;
                      }
                    }
                    @keyframes eraseOut {
                      from {
                        stroke-dashoffset: 0;
                      }
                      to {
                        stroke-dashoffset: -100;
                      }
                    }
                  `}</style>
                </span>
              </button>
              <button
                onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                <span className="relative">
                  Skills
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    viewBox="0 0 100 4"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,2.3 Q18,0.7 32,2.8 Q47,3.4 61,1.6 Q76,0.8 89,2.5 Q96,3.1 100,1.9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      className="text-primary"
                      strokeLinecap="round"
                      strokeDasharray="100"
                      strokeDashoffset="100"
                    />
                  </svg>
                  <style jsx>{`
                    .group:hover path {
                      animation: drawIn 0.6s ease-out forwards;
                    }
                    .group:not(:hover) path {
                      animation: eraseOut 0.4s ease-in forwards;
                    }
                    @keyframes drawIn {
                      to {
                        stroke-dashoffset: 0;
                      }
                    }
                    @keyframes eraseOut {
                      from {
                        stroke-dashoffset: 0;
                      }
                      to {
                        stroke-dashoffset: -100;
                      }
                    }
                  `}</style>
                </span>
              </button>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                <span className="relative">
                  Projects
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    viewBox="0 0 100 4"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,1.9 Q14,3.1 29,1.4 Q44,0.6 58,2.7 Q73,3.5 87,1.8 Q94,0.9 100,2.4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      className="text-primary"
                      strokeLinecap="round"
                      strokeDasharray="100"
                      strokeDashoffset="100"
                    />
                  </svg>
                  <style jsx>{`
                    .group:hover path {
                      animation: drawIn 0.6s ease-out forwards;
                    }
                    .group:not(:hover) path {
                      animation: eraseOut 0.4s ease-in forwards;
                    }
                    @keyframes drawIn {
                      to {
                        stroke-dashoffset: 0;
                      }
                    }
                    @keyframes eraseOut {
                      from {
                        stroke-dashoffset: 0;
                      }
                      to {
                        stroke-dashoffset: -100;
                      }
                    }
                  `}</style>
                </span>
              </button>
              <button
                onClick={() => document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                <span className="relative">
                  Blogs
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    viewBox="0 0 100 4"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,2.4 Q16,0.9 31,2.6 Q46,3.2 60,1.7 Q75,0.5 90,2.3 Q97,3.0 100,1.6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      className="text-primary"
                      strokeLinecap="round"
                      strokeDasharray="100"
                      strokeDashoffset="100"
                    />
                  </svg>
                  <style jsx>{`
                    .group:hover path {
                      animation: drawIn 0.6s ease-out forwards;
                    }
                    .group:not(:hover) path {
                      animation: eraseOut 0.4s ease-in forwards;
                    }
                    @keyframes drawIn {
                      to {
                        stroke-dashoffset: 0;
                      }
                    }
                    @keyframes eraseOut {
                      from {
                        stroke-dashoffset: 0;
                      }
                      to {
                        stroke-dashoffset: -100;
                      }
                    }
                  `}</style>
                </span>
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                <span className="relative">
                  Contact
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    viewBox="0 0 100 4"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,1.7 Q13,2.9 27,1.3 Q41,0.8 56,2.5 Q71,3.4 85,1.9 Q92,0.7 100,2.1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      className="text-primary"
                      strokeLinecap="round"
                      strokeDasharray="100"
                      strokeDashoffset="100"
                    />
                  </svg>
                  <style jsx>{`
                    .group:hover path {
                      animation: drawIn 0.6s ease-out forwards;
                    }
                    .group:not(:hover) path {
                      animation: eraseOut 0.4s ease-in forwards;
                    }
                    @keyframes drawIn {
                      to {
                        stroke-dashoffset: 0;
                      }
                    }
                    @keyframes eraseOut {
                      from {
                        stroke-dashoffset: 0;
                      }
                      to {
                        stroke-dashoffset: -100;
                      }
                    }
                  `}</style>
                </span>
              </button>
              <ThemeToggle />
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:bg-muted/50 rounded-lg transition-colors duration-200 backdrop-blur-sm"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-border/50 bg-background/80 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/70">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  { name: "Home", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
                  {
                    name: "About",
                    action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
                  },
                  {
                    name: "Skills",
                    action: () => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }),
                  },
                  {
                    name: "Projects",
                    action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
                  },
                  {
                    name: "Blogs",
                    action: () => document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth" }),
                  },
                  {
                    name: "Contact",
                    action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
                  },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      item.action()
                      setIsMobileMenuOpen(false)
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/30 rounded-md transition-colors duration-200 backdrop-blur-sm"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </animated.nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal delay={isLoaded ? 100 : 0} direction="scale">
            <div className="mb-6 sm:mb-8">
              <Image
                src="/avatar.png"
                alt="siddhartha412 avatar"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-6 sm:mb-8 border-2 border-primary w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
                priority
              />
            </div>
          </ScrollReveal>

          <div className="mb-6 sm:mb-8 group cursor-default">
            <SplitText
              text="siddhartha412"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold group-hover:text-primary transition-colors duration-500"
              splitType="chars"
              staggerDelay={0.03}
              delay={0}
            />
          </div>

          <div className="mb-4 sm:mb-6">
            <SplitText
              text="the minimal user"
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-default"
              splitType="words"
              staggerDelay={0.03}
              delay={300}
            />
          </div>

          <ScrollReveal delay={isLoaded ? 600 : 200} direction="up">
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12 hover:text-foreground transition-colors duration-300 cursor-default px-4">
              Crafting clean, efficient, and user-focused digital experiences with attention to detail and simplicity.
            </p>
          </ScrollReveal>

          <ScrollReveal
            delay={isLoaded ? 800 : 300}
            direction="up"
            className="flex justify-center space-x-2 sm:space-x-4 flex-wrap gap-2 sm:gap-4"
          >
            <MagneticButton
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              className="text-sm sm:text-base"
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              size="lg"
              className="text-sm sm:text-base"
            >
              Get in Touch
            </MagneticButton>
          </ScrollReveal>
        </div>

        {isLoaded && (
          <>
            <animated.div
              className="absolute top-1/2 left-10 w-2 h-2 bg-primary rounded-full float-animation opacity-20 hover:opacity-60 hover:scale-150 transition-all duration-300 cursor-pointer"
              style={{ transform: parallaxY1.to((y) => `translateY(${y}px)`) }}
            />
            <animated.div
              className="absolute top-1/3 right-10 w-3 h-3 border border-primary rounded-full float-animation opacity-30 hover:opacity-80 hover:scale-125 hover:bg-primary transition-all duration-300 cursor-pointer"
              style={{ animationDelay: "2s", transform: parallaxY2.to((y) => `translateY(${y}px)`) }}
            />
            <animated.div
              className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-primary rounded-full float-animation opacity-40 hover:opacity-90 hover:scale-200 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: "4s", transform: parallaxY3.to((y) => `translateY(${y}px)`) }}
            />
          </>
        )}
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-muted/10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="rotate" className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">About Me</h2>
          </ScrollReveal>

          <ScrollReveal delay={200} direction="fade">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300 cursor-default max-w-3xl mx-auto">
              I'm a passionate developer who believes in the power of simplicity and clean design. My approach focuses
              on creating intuitive user experiences while maintaining efficient, maintainable code. When I'm not
              coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing
              knowledge with the developer community through my blog.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="fade">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 hover:text-primary transition-colors duration-300 cursor-default">
              Skills
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              {
                name: "React",
                icon: <Layers className="h-4 w-4 sm:h-5 sm:w-5" />,
                url: "https://react.dev/",
                proficiency: 88,
              },
              {
                name: "Python",
                icon: <Worm className="h-4 w-4 sm:h-5 sm:w-5" />,
                url: "https://www.python.org/",
                proficiency: 85,
              },
              {
                name: "CSS",
                icon: <Palette className="h-4 w-4 sm:h-5 sm:w-5" />,
                url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                proficiency: 90,
              },
              {
                name: "HTML",
                icon: <Code className="h-4 w-4 sm:h-5 sm:w-5" />,
                url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                proficiency: 92,
              },
              {
                name: "JavaScript",
                icon: <Code className="h-4 w-4 sm:h-5 sm:w-5" />,
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                proficiency: 90,
              },
              {
                name: "Node.js",
                icon: <Server className="h-4 w-4 sm:h-5 sm:w-5" />,
                url: "https://nodejs.org/",
                proficiency: 80,
              },
              {
                name: "Electron",
                icon: <Box className="h-4 w-4 sm:h-5 sm:w-5" />,
                url: "https://www.electronjs.org/",
                proficiency: 75,
              },
              {
                name: "Express.js",
                icon: <Server className="h-4 w-4 sm:h-5 sm:w-5" />,
                url: "https://expressjs.com/",
                proficiency: 78,
              },
              {
                name: "MongoDB",
                icon: <Database className="h-4 w-4 sm:h-5 sm:w-5" />,
                url: "https://www.mongodb.com/",
                proficiency: 72,
              },
              {
                name: "Tailwind CSS",
                icon: <Palette className="h-4 w-4 sm:h-5 sm:w-5" />,
                url: "https://tailwindcss.com/",
                proficiency: 92,
              },
              {
                name: "Bootstrap",
                icon: <Palette className="h-4 w-4 sm:h-5 sm:w-5" />,
                url: "https://getbootstrap.com/",
                proficiency: 85,
              },
              {
                name: "Git",
                icon: <GitBranch className="h-4 w-4 sm:h-5 sm:w-5" />,
                url: "https://git-scm.com/",
                proficiency: 85,
              },
              {
                name: "Figma",
                icon: <Figma className="h-4 w-4 sm:h-5 sm:w-5" />,
                url: "https://www.figma.com/",
                proficiency: 78,
              },
              {
                name: "Flask",
                icon: <Server className="h-4 w-4 sm:h-5 sm:w-5" />,
                url: "https://flask.palletsprojects.com/",
                proficiency: 70,
              },
              {
                name: "VS Code",
                icon: <Code className="h-4 w-4 sm:h-5 sm:w-5" />,
                url: "https://code.visualstudio.com/",
                proficiency: 95,
              },
              {
                name: "Linux",
                icon: <Terminal className="h-4 w-4 sm:h-5 sm:w-5" />,
                url: "https://www.linux.org/",
                proficiency: 88,
              },
              {
                name: "Arch Linux",
                icon: <Terminal className="h-4 w-4 sm:h-5 sm:w-5" />,
                url: "https://archlinux.org/",
                proficiency: 82,
              },
              {
                name: "Ubuntu",
                icon: <Terminal className="h-4 w-4 sm:h-5 sm:w-5" />,
                url: "https://ubuntu.com/",
                proficiency: 85,
              },
              {
                name: "Debian",
                icon: <Terminal className="h-4 w-4 sm:h-5 sm:w-5" />,
                url: "https://www.debian.org/",
                proficiency: 80,
              },
              {
                name: "Fedora",
                icon: <Terminal className="h-4 w-4 sm:h-5 sm:w-5" />,
                url: "https://getfedora.org/",
                proficiency: 75,
              },
              {
                name: "GitHub Desktop",
                icon: <Github className="h-4 w-4 sm:h-5 sm:w-5" />,
                url: "https://desktop.github.com/",
                proficiency: 88,
              },
              {
                name: "Vite",
                icon: <Zap className="h-4 w-4 sm:h-5 sm:w-5" />,
                url: "https://vitejs.dev/",
                proficiency: 85,
              },
            ].map((skill, index) => (
              <ScrollReveal key={skill.name} delay={index * 50} direction="bounce">
                <a
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 lg:p-5 border border-border/50 rounded-lg hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:scale-105 hover:-translate-y-1 transition-all duration-300 group cursor-pointer block overflow-hidden bg-card/50 backdrop-blur-sm backdrop-saturate-150 supports-[backdrop-filter]:bg-card/30"
                >
                  <div className="absolute inset-0 bg-primary/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out backdrop-blur-sm" />
                  <div
                    className="absolute bottom-0 left-0 h-1 bg-primary transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-out"
                    style={{ width: `${skill.proficiency}%` }}
                  />

                  <div className="relative z-10 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                    {skill.icon}
                  </div>
                  <div className="relative z-10 flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base font-medium group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold text-primary md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform md:translate-x-2 md:group-hover:translate-x-0 ml-2 flex-shrink-0">
                        {skill.proficiency}%
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="relative z-10 h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0" />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="down">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 hover:text-primary transition-colors duration-300 cursor-default">
              Projects
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "DiscordAI",
                description:
                  "Just a ai with refining the response of gemini ai and with Discord.py integration for enhanced AI interactions.",
                tech: ["Python", "Discord.py", "Gemini API", "AI"],
                github: "https://github.com/siddhartha412/DiscordAI",
                demo: "#",
                icon: <Zap className="h-6 w-6" />,
              },
              {
                title: "Manga App",
                description:
                  "A app which helps to download all your favourite mangas which is made with mangaanelo and electron.",
                tech: ["JavaScript", "Electron", "Mangaanelo API"],
                github: "https://github.com/siddhartha412/manga-app",
                demo: "#",
                icon: <Code className="h-6 w-6" />,
              },
              {
                title: "Couplescraze",
                description:
                  "A TypeScript project focused on creating engaging couple-focused applications and features.",
                tech: ["TypeScript", "Web Development"],
                github: "https://github.com/siddhartha412/Couplescraze",
                demo: "#",
                icon: <Palette className="h-6 w-6" />,
              },
              {
                title: "Chess Game",
                description:
                  "A JavaScript-based chess game implementation with interactive gameplay and clean interface.",
                tech: ["JavaScript", "Game Development", "Chess Logic"],
                github: "https://github.com/siddhartha412/chess",
                demo: "#",
                icon: <Box className="h-6 w-6" />,
              },
            ].map((project, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="scale">
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
                      {project.demo !== "#" && (
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
            ))}
          </div>
        </div>
      </section>

      <section id="blogs" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-48">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="fade">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 hover:text-primary transition-colors duration-300 cursor-default">
              Latest Blogs
            </h2>
          </ScrollReveal>

          <div className="flex justify-center">
            <ScrollReveal direction="up">
              <Card className="hover:shadow-2xl hover:shadow-primary/10 hover:scale-105 hover:-translate-y-2 transition-all duration-500 group border-border/50 hover:border-primary/50 h-full cursor-pointer max-w-md bg-card/50 backdrop-blur-sm backdrop-saturate-150 supports-[backdrop-filter]:bg-card/30">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-muted/50 backdrop-blur-sm rounded-lg group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                      The uprising of me
                    </CardTitle>
                  </div>
                  <CardDescription className="leading-relaxed text-sm group-hover:text-foreground transition-colors duration-300">
                    A funny journey of my journey, that how I learn this stuff and all...
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge
                      variant="outline"
                      className="text-xs group-hover:border-primary group-hover:text-primary transition-colors duration-300 bg-background/50 backdrop-blur-sm"
                    >
                      Breaking stuffs
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs group-hover:border-primary group-hover:text-primary transition-colors duration-300 bg-background/50 backdrop-blur-sm"
                    >
                      Journey
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                    <span>Aug 12 2025</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>3 mins read</span>
                    </div>
                  </div>
                  <MagneticButton size="sm" className="w-full">
                    <a href="/blog/the-uprising-of-me" className="flex items-center justify-center w-full">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Read Full Post
                    </a>
                  </MagneticButton>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-muted/10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="fade">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 hover:text-primary transition-colors duration-300 cursor-default">
              Get in Touch
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200} direction="up">
            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed hover:text-foreground transition-colors duration-300 cursor-default">
              I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
              work together.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400} direction="up">
            <div className="flex justify-center space-x-3 sm:space-x-6 flex-wrap gap-3 sm:gap-4">
              <MagneticButton size="lg" className="text-sm sm:text-base">
                <a href="mailto:siddharthab412@gmail.com" className="flex items-center">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Email
                </a>
              </MagneticButton>
              <MagneticButton variant="outline" size="lg" className="text-sm sm:text-base">
                <a
                  href="https://github.com/siddhartha412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>GitHub</span>
                </a>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50 bg-muted/30 backdrop-blur-sm backdrop-saturate-150 supports-[backdrop-filter]:bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-6 sm:space-y-8">
              <div className="flex flex-col items-center space-y-4">
                <a
                  href="https://discord.com/users/1261577588669939755"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-transform duration-300"
                >
                  <DiscordStatus />
                </a>
              </div>

              <div className="w-full max-w-xs h-px bg-border/50" />

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
                <a
                  href="https://github.com/siddhartha412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground hover:scale-110 transition-all duration-300 flex items-center space-x-1 group"
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://discord.com/users/1261577588669939755"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground hover:scale-110 transition-all duration-300 flex items-center space-x-1 group"
                >
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Discord</span>
                </a>
                <a
                  href="https://www.instagram.com/the.minimaluser/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground hover:scale-110 transition-all duration-300 flex items-center space-x-1 group"
                >
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Instagram</span>
                </a>
                <a
                  href="mailto:siddharthab412@gmail.com"
                  className="hover:text-foreground hover:scale-110 transition-all duration-300 flex items-center space-x-1 group"
                >
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Email</span>
                </a>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground text-center">
                © 2024 siddhartha412. All rights reserved.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  )
}
