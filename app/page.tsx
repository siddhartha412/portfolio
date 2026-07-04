"use client"

import { useState, useEffect, useRef } from "react"
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
  Star,
} from "lucide-react"
import SplitText from "@/components/split-text"
import ScrollReveal from "@/components/scroll-reveal"
import MagneticButton from "@/components/magnetic-button"
import { ThemeToggle } from "@/components/theme-toggle"
import { DiscordStatus } from "@/components/discord-status"
import { useDiscordStatus } from "@/hooks/use-discord-status"
import Image from "next/image"
import { useScroll, animated } from "@react-spring/web"
import ScrollProgress from "@/components/scroll-progress"
import PageLoader from "@/components/page-loader"

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showLoader, setShowLoader] = useState(true)
  const [isHeroVisible, setIsHeroVisible] = useState(true)
  const heroRef = useRef<HTMLElement>(null)
  const { discordData } = useDiscordStatus()

  const { scrollYProgress } = useScroll()

  const parallaxY1 = scrollYProgress.to([0, 1], [0, -50])
  const parallaxY2 = scrollYProgress.to([0, 1], [0, 75])
  const parallaxY3 = scrollYProgress.to([0, 1], [0, -25])

  // Lenis smooth scroll
  useEffect(() => {
    let lenis: any
    ;(async () => {
      const Lenis = (await import("lenis")).default
      lenis = new Lenis({ duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
      const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf) }
      requestAnimationFrame(raf)
    })()
    return () => lenis?.destroy()
  }, [])

  // Watch hero visibility for navbar logo animation
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />

      <nav className="fixed top-0 w-full z-50 p-6 sm:p-10 glass-strong text-foreground">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo hidden during hero, slides in after */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`font-bold text-xl sm:text-2xl tracking-tight transition-all duration-500 ease-out ${
              isHeroVisible ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"
            }`}
          >
            siddhartha412
          </button>
          <div className="flex items-center space-x-4 ml-auto">
            <ThemeToggle />
            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2">
              <Menu className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-background/80 backdrop-blur-2xl text-foreground transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="flex h-full flex-col md:flex-row">
          {/* Left Side - Links */}
          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center items-start md:items-center relative">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-10 right-10 md:hidden p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>

            <div className="space-y-8 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
              {[
                { name: "Home", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
                { name: "Projects", action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
                { name: "About Me", action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    item.action()
                    setIsMobileMenuOpen(false)
                  }}
                  className="block hover:text-muted-foreground transition-colors text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Socials Grid */}
          <div className="w-full md:w-1/2 h-full bg-[#0a0a0a] text-white hidden md:grid grid-cols-2 grid-rows-2 relative border-l border-white/10">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-10 right-10 z-10 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>

            <a href="https://github.com/siddhartha412" target="_blank" rel="noopener noreferrer" className="border-r border-b border-white/10 flex flex-col items-start justify-center p-12 hover:bg-white/5 transition-colors group">
              <Github className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-xl">Github</span>
            </a>
            <a href="mailto:contact@siddhartha412.com" className="border-b border-white/10 flex flex-col items-start justify-center p-12 hover:bg-white/5 transition-colors group">
              <Mail className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-xl">Email</span>
            </a>
            <a href="https://linkedin.com/in/siddhartha412" target="_blank" rel="noopener noreferrer" className="border-r border-white/10 flex flex-col items-start justify-center p-12 hover:bg-white/5 transition-colors group">
              <svg className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              <span className="text-xl">LinkedIn</span>
            </a>
            <a href="https://discord.com/users/1261577588669939755" target="_blank" rel="noopener noreferrer" className="flex flex-col items-start justify-center p-12 hover:bg-white/5 transition-colors group">
              <MessageCircle className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-xl">Discord</span>
            </a>
          </div>

          {/* Mobile Socials */}
          <div className="md:hidden grid grid-cols-2 grid-rows-2 h-full bg-[#0a0a0a] text-white">
            <a href="https://github.com/siddhartha412" target="_blank" rel="noopener noreferrer" className="border-r border-b border-white/10 flex flex-col items-center justify-center p-6">
              <Github className="h-6 w-6 mb-2" />
              <span>Github</span>
            </a>
            <a href="mailto:contact@siddhartha412.com" className="border-b border-white/10 flex flex-col items-center justify-center p-6">
              <Mail className="h-6 w-6 mb-2" />
              <span>Email</span>
            </a>
            <a href="https://linkedin.com/in/siddhartha412" target="_blank" rel="noopener noreferrer" className="border-r border-white/10 flex flex-col items-center justify-center p-6">
              <svg className="h-6 w-6 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              <span>LinkedIn</span>
            </a>
            <a href="https://discord.com/users/1261577588669939755" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6">
              <MessageCircle className="h-6 w-6 mb-2" />
              <span>Discord</span>
            </a>
          </div>
        </div>
      </div>

      <section ref={heroRef} id="home" className="min-h-screen flex flex-col justify-center px-4 sm:px-10 lg:px-20 relative overflow-hidden bg-background">
        {/* Intersecting Circles Background — positioned to the right like Mohit Kumar ref */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <animated.div style={{ y: parallaxY1 }} className="absolute right-[-8%] top-[0%] w-[420px] h-[420px] sm:w-[580px] sm:h-[580px] md:w-[720px] md:h-[720px] rounded-full border border-foreground/20" />
          <animated.div style={{ y: parallaxY2 }} className="absolute right-[8%] top-[28%] w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[520px] md:h-[520px] rounded-full border border-foreground/20" />
          <animated.div style={{ y: parallaxY3 }} className="absolute right-[24%] top-[55%] w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-foreground/60" />
        </div>

        <div className="w-full z-10 pt-24 max-w-7xl mx-auto">
          {/* Available badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 border border-foreground/20 text-foreground/60 text-xs px-4 py-1.5 rounded-full tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Available for Projects
            </span>
          </div>

          {/* Content row: big text left, pfp right */}
          <div className="flex items-end justify-between gap-8">
            <div className="flex-1 min-w-0">
              {/* One-line title — fits on one line using fluid font size */}
              <h1 className="font-black leading-none tracking-tighter uppercase font-sans mb-8"
                style={{ fontSize: "clamp(2.5rem, 10.5vw, 9rem)" }}>
                SIDDHARTHA 412
              </h1>

              <div className="border-t border-foreground/20 w-full max-w-xl pt-6 mb-8 relative">
                <p className="text-xl sm:text-2xl font-medium tracking-wide">
                  Full Stack Developer
                </p>
                {/* Decorative lines */}
                <div className="hidden md:flex flex-col gap-1.5 absolute right-0 top-6 items-end opacity-20">
                  <div className="h-[1px] w-12 bg-foreground"></div>
                  <div className="h-[1px] w-20 bg-foreground"></div>
                  <div className="h-[1px] w-16 bg-foreground"></div>
                  <div className="h-[1px] w-28 bg-foreground"></div>
                  <div className="h-[1px] w-10 bg-foreground"></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="border border-foreground text-foreground px-6 py-3 text-sm font-semibold tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors duration-300 rounded-lg"
                >
                  Get in Touch
                </button>
                <button
                  onClick={() => document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth" })}
                  className="border border-foreground/25 text-foreground px-6 py-3 text-sm font-semibold tracking-widest uppercase hover:border-foreground transition-colors duration-300 rounded-lg"
                >
                  Blog
                </button>
              </div>
            </div>

            {/* Profile Picture — circular, right side, desktop only */}
            <div className="hidden lg:block flex-shrink-0 mb-4 relative">
              <div className="relative w-52 h-52 xl:w-60 xl:h-60 overflow-hidden rounded-full border border-foreground/15 grayscale hover:grayscale-0 transition-all duration-700 ease-out">
                <Image
                  src="/avatar.png"
                  alt="siddhartha412"
                  fill
                  className="object-cover object-top scale-110"
                  priority
                />
              </div>
              {/* Status dot — Discord-style */}
              {discordData && (
                <div className={`absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full border-[2.5px] border-background ${
                  discordData.discord_status === "online" ? "bg-green-500" :
                  discordData.discord_status === "idle" ? "bg-yellow-500" :
                  discordData.discord_status === "dnd" ? "bg-red-500" : "bg-gray-500"
                }`} />
              )}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
          <svg className="w-5 h-8 border border-foreground/50 rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="5" y="2" width="14" height="20" rx="7" />
            <path d="M12 6v4" strokeLinecap="round" />
          </svg>
          <span className="text-[9px] uppercase tracking-widest mt-2 text-foreground/70">Scroll</span>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center px-4 sm:px-10 lg:px-20 py-32">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal direction="up">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 mb-6">About Me</p>
            <div className="border-t border-foreground/15 pt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left — big statement */}
              <div>
                <h2 className="font-black tracking-tighter leading-[0.9] mb-8"
                  style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}>
                  a penguin??
                </h2>
                <p className="text-base sm:text-lg text-foreground/60 leading-relaxed max-w-md">
                  just a penguin who likes to code. nothing fancy — minimal, clean, and built with love.<br />
                  i break stuff, fix it, and learn along the way. noob stack dev but i make it work.
                </p>
              </div>
              {/* Right — stat blocks */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Years Coding", value: "4+" },
                  { label: "Projects Built", value: "10+" },
                  { label: "Speciality", value: "Random Stuffs" },
                  { label: "Philosophy", value: "Minimal First" },
                ].map((stat, i) => (
                  <div key={i} className="glass-card rounded-2xl p-8 backdrop-blur-md">
                    <p className="text-3xl sm:text-4xl font-black tracking-tight mb-2">{stat.value}</p>
                    <p className="text-xs uppercase tracking-widest text-foreground/40">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="skills" className="min-h-screen flex items-center px-4 sm:px-10 lg:px-20 py-32">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal direction="up">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 mb-6">Skills</p>
            <div className="border-t border-foreground/15 pt-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0">
                {[
                  { name: "React", icon: <Layers className="h-5 w-5" />, url: "https://react.dev/", proficiency: 88 },
                  { name: "Python", icon: <Worm className="h-5 w-5" />, url: "https://www.python.org/", proficiency: 85 },
                  { name: "CSS", icon: <Palette className="h-5 w-5" />, url: "https://developer.mozilla.org/en-US/docs/Web/CSS", proficiency: 90 },
                  { name: "HTML", icon: <Code className="h-5 w-5" />, url: "https://developer.mozilla.org/en-US/docs/Web/HTML", proficiency: 92 },
                  { name: "JavaScript", icon: <Code className="h-5 w-5" />, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", proficiency: 90 },
                  { name: "Node.js", icon: <Server className="h-5 w-5" />, url: "https://nodejs.org/", proficiency: 80 },
                  { name: "Electron", icon: <Box className="h-5 w-5" />, url: "https://www.electronjs.org/", proficiency: 75 },
                  { name: "Express.js", icon: <Server className="h-5 w-5" />, url: "https://expressjs.com/", proficiency: 78 },
                  { name: "MongoDB", icon: <Database className="h-5 w-5" />, url: "https://www.mongodb.com/", proficiency: 72 },
                  { name: "Tailwind CSS", icon: <Palette className="h-5 w-5" />, url: "https://tailwindcss.com/", proficiency: 92 },
                  { name: "Bootstrap", icon: <Palette className="h-5 w-5" />, url: "https://getbootstrap.com/", proficiency: 85 },
                  { name: "Git", icon: <GitBranch className="h-5 w-5" />, url: "https://git-scm.com/", proficiency: 85 },
                  { name: "Figma", icon: <Figma className="h-5 w-5" />, url: "https://www.figma.com/", proficiency: 78 },
                  { name: "Flask", icon: <Server className="h-5 w-5" />, url: "https://flask.palletsprojects.com/", proficiency: 70 },
                  { name: "VS Code", icon: <Code className="h-5 w-5" />, url: "https://code.visualstudio.com/", proficiency: 95 },
                  { name: "Linux", icon: <Terminal className="h-5 w-5" />, url: "https://www.linux.org/", proficiency: 88 },
                  { name: "Arch Linux", icon: <Terminal className="h-5 w-5" />, url: "https://archlinux.org/", proficiency: 82 },
                  { name: "Ubuntu", icon: <Terminal className="h-5 w-5" />, url: "https://ubuntu.com/", proficiency: 85 },
                  { name: "Debian", icon: <Terminal className="h-5 w-5" />, url: "https://www.debian.org/", proficiency: 80 },
                  { name: "Fedora", icon: <Terminal className="h-5 w-5" />, url: "https://getfedora.org/", proficiency: 75 },
                  { name: "GitHub Desktop", icon: <Github className="h-5 w-5" />, url: "https://desktop.github.com/", proficiency: 88 },
                  { name: "Vite", icon: <Zap className="h-5 w-5" />, url: "https://vitejs.dev/", proficiency: 85 },
                ].map((skill, index) => (
                  <ScrollReveal key={skill.name} delay={index * 30} direction="fade">
                    <a
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex flex-col items-start p-5 border border-foreground/10 hover:bg-foreground/5 transition-colors duration-200 group overflow-hidden rounded-xl"
                    >
                      {/* proficiency bar — animated on hover */}
                      <div
                        className="absolute bottom-0 left-0 h-[2px] bg-foreground/40 group-hover:bg-foreground origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out rounded-full"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                      <div className="text-foreground/50 group-hover:text-foreground transition-colors duration-200 mb-3">
                        {skill.icon}
                      </div>
                      <span className="text-xs font-medium uppercase tracking-wider leading-tight">{skill.name}</span>
                      <span className="text-[10px] text-foreground/30 mt-1 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 ease-out">
                        {skill.proficiency}%
                      </span>
                    </a>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center px-4 sm:px-10 lg:px-20 py-32">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal direction="up">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 mb-6">Projects</p>
            <div className="border-t border-foreground/15 pt-12">
              <div className="divide-y divide-foreground/10">
                {[
                  {
                    title: "Waveyy",
                    description: "Sounds like a moving wave",
                    tech: ["JavaScript", "Audio", "Visualization"],
                    github: "https://github.com/siddhartha412/Waveyy",
                    demo: "#",
                    year: "2026",
                    stars: 1,
                  },
                  {
                    title: "peb",
                    description: "A package manager powered by pacman, yay, and flatpak",
                    tech: ["TypeScript", "CLI", "Package Manager"],
                    github: "https://github.com/siddhartha412/peb",
                    demo: "#",
                    year: "2026",
                    stars: 0,
                  },
                  {
                    title: "kiooo",
                    description: "An AI that looks like an AGI",
                    tech: ["AI", "Python", "AGI"],
                    github: "https://github.com/siddhartha412/kiooo",
                    demo: "#",
                    year: "2026",
                    stars: 0,
                  },
                  {
                    title: "Chord",
                    description: "A Discord bot made with TypeScript, Node.js, Discord.js, and JioSaavn API",
                    tech: ["Python", "Discord.js", "Node.js", "JioSaavn API"],
                    github: "https://github.com/siddhartha412/Chord",
                    demo: "#",
                    year: "2026",
                    stars: 0,
                  },
                  {
                    title: "manga-app",
                    description: "An app to download all your favourite mangas, made with Manganato and Electron",
                    tech: ["JavaScript", "Electron", "Manganato API"],
                    github: "https://github.com/siddhartha412/manga-app",
                    demo: "#",
                    year: "2025",
                    stars: 3,
                  },
                  {
                    title: "DiscordAI",
                    description: "An AI with refined Gemini responses, integrated with Discord.py",
                    tech: ["Python", "Discord.py", "Gemini API", "AI"],
                    github: "https://github.com/siddhartha412/DiscordAI",
                    demo: "#",
                    year: "2025",
                    stars: 1,
                  },
                  {
                    title: "S-412",
                    description: "A personal AI",
                    tech: ["HTML", "JavaScript", "AI"],
                    github: "https://github.com/siddhartha412/S-412",
                    demo: "#",
                    year: "2025",
                    stars: 1,
                  },
                  {
                    title: "Giveing",
                    description: "It gives you the answers to the questions...",
                    tech: ["Python", "Q&A", "CLI"],
                    github: "https://github.com/siddhartha412/Giveing",
                    demo: "#",
                    year: "2025",
                    stars: 0,
                  },
                  {
                    title: "Discord-DM-Bot",
                    description: "A Discord DM bot to talk to or prank your blocked friends using your bot",
                    tech: ["Python", "Discord.py", "Automation"],
                    github: "https://github.com/siddhartha412/Discord-DM-Bot",
                    demo: "#",
                    year: "2024",
                    stars: 1,
                  },
                  {
                    title: "ChatGPT-App-with-Electronjs",
                    description: "ChatGPT desktop app",
                    tech: ["JavaScript", "Electron", "ChatGPT", "Desktop"],
                    github: "https://github.com/siddhartha412/ChatGPT-App-with-Electronjs",
                    demo: "#",
                    year: "2024",
                    stars: 0,
                  },
                  {
                    title: "DiscordMentions",
                    description: "Top 10 users who annoy you with mentions on Discord",
                    tech: ["JavaScript", "Discord.js", "SelfBot"],
                    github: "https://github.com/siddhartha412/DiscordMentions",
                    demo: "#",
                    year: "2024",
                    stars: 0,
                  },
                ].map((project, index) => (
                  <ScrollReveal key={index} delay={index * 80} direction="up">
                    <div className="group flex flex-col sm:flex-row sm:items-center justify-between py-8 px-6 gap-4 hover:bg-foreground/[0.02] transition-colors rounded-2xl -mx-2">
                      <div className="flex items-start gap-6 flex-1">
                        <span className="text-xs text-foreground/30 tracking-widest pt-1 hidden sm:flex flex-col items-center w-12 flex-shrink-0 gap-1">
                          <span>{project.year}</span>
                          {project.stars > 0 && (
                            <span className="flex items-center gap-1 text-xs font-semibold text-foreground/50">
                              <Star className="h-3.5 w-3.5 fill-yellow-500/60 text-yellow-500/60" />
                              {project.stars}
                            </span>
                          )}
                        </span>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 group-hover:text-foreground/70 transition-colors">{project.title}</h3>
                          <p className="text-sm text-foreground/50 max-w-md leading-relaxed">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {project.tech.map(t => (
                              <span key={t} className="text-[10px] uppercase tracking-widest text-foreground/40 border border-foreground/15 px-3 py-1 rounded-md">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3 flex-shrink-0">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-foreground/20 px-4 py-2 text-xs font-semibold tracking-widest uppercase hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 flex items-center gap-2 rounded-lg"
                        >
                          <Github className="h-3.5 w-3.5" />
                          Code
                        </a>
                        {project.demo !== "#" && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-foreground px-4 py-2 text-xs font-semibold tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-300 flex items-center gap-2 rounded-lg"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="blogs" className="min-h-screen flex items-center px-4 sm:px-10 lg:px-20 py-32">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal direction="up">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 mb-6">Latest Blogs</p>
            <div className="border-t border-foreground/15 pt-12">
              <div className="divide-y divide-foreground/10">
                {[
                  {
                    title: "The uprising of me",
                    description: "A funny journey of my journey, that how I learn this stuff and all...",
                    tags: ["Breaking stuffs", "Journey"],
                    date: "Aug 12 2025",
                    readTime: "3 mins read",
                    href: "/blog/the-uprising-of-me",
                  },
                ].map((post, i) => (
                  <ScrollReveal key={i} delay={i * 80} direction="up">
                    <div className="group flex flex-col sm:flex-row sm:items-center justify-between py-8 px-6 gap-4 hover:bg-foreground/[0.02] transition-colors rounded-2xl -mx-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-xs text-foreground/30 tracking-widest">{post.date}</span>
                          <span className="text-xs text-foreground/30 tracking-widest flex items-center gap-1">
                            <Clock className="h-3 w-3" />{post.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 group-hover:text-foreground/70 transition-colors">{post.title}</h3>
                        <p className="text-sm text-foreground/50 max-w-lg leading-relaxed mb-3">{post.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map(t => (
                            <span key={t} className="text-[10px] uppercase tracking-widest text-foreground/40 border border-foreground/15 px-3 py-1 rounded-md">{t}</span>
                          ))}
                        </div>
                      </div>
                      <a
                        href={post.href}
                        className="border border-foreground/20 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 flex items-center gap-2 flex-shrink-0 rounded-lg"
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        Read Post
                      </a>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center px-4 sm:px-10 lg:px-20 py-32">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal direction="up">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 mb-6">Contact</p>
            <div className="border-t border-foreground/15 pt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
              <div>
                <h2 className="font-black tracking-tighter leading-[0.9] uppercase mb-8"
                  style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}>
                  Let's Work<br />Together
                </h2>
                <p className="text-base text-foreground/50 leading-relaxed max-w-md mb-10">
                  I'm always interested in new opportunities and collaborations.
                  Feel free to reach out if you'd like to work together.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:siddharthab412@gmail.com"
                    className="border border-foreground text-foreground px-6 py-3 text-sm font-semibold tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors duration-300 flex items-center gap-2 rounded-lg"
                  >
                    <Mail className="h-4 w-4" />
                    Email Me
                  </a>
                  <a
                    href="https://github.com/siddhartha412"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-foreground/20 text-foreground px-6 py-3 text-sm font-semibold tracking-widest uppercase hover:border-foreground transition-colors duration-300 flex items-center gap-2 rounded-lg"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>
              {/* Right — contact info list */}
              <div className="divide-y divide-foreground/10">
                {[
                  { label: "Email", value: "siddharthab412@gmail.com", href: "mailto:siddharthab412@gmail.com" },
                  { label: "GitHub", value: "github.com/siddhartha412", href: "https://github.com/siddhartha412" },
                  { label: "Instagram", value: "@siddhartha412_", href: "https://www.instagram.com/siddhartha412_/" },
                  { label: "Discord", value: "siddhartha412", href: "https://discord.com/users/1261577588669939755" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center py-5 px-4 group hover:bg-foreground/[0.02] transition-colors rounded-xl -mx-2"
                  >
                    <span className="text-xs uppercase tracking-widest text-foreground/40">{item.label}</span>
                    <span className="text-sm font-medium group-hover:text-foreground/60 transition-colors flex items-center gap-2">
                      {item.value}
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="py-12 px-4 sm:px-10 lg:px-20 border-t border-foreground/10 glass rounded-t-3xl">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div>
                <p className="font-bold text-lg tracking-tight">siddhartha412</p>
                <p className="text-xs text-foreground/40 tracking-widest uppercase mt-1">penguin but noob stack dev who loves minimal</p>
              </div>
              <div className="flex items-center gap-6">
                <a href="https://discord.com/users/1261577588669939755" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300">
                  <DiscordStatus />
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-foreground/40">
                {[
                  { label: "GitHub", href: "https://github.com/siddhartha412", icon: <Github className="h-4 w-4" /> },
                  { label: "Discord", href: "https://discord.com/users/1261577588669939755", icon: <MessageCircle className="h-4 w-4" /> },
                  { label: "Instagram", href: "https://www.instagram.com/siddhartha412_/", icon: <Instagram className="h-4 w-4" /> },
                  { label: "Email", href: "mailto:siddharthab412@gmail.com", icon: <Mail className="h-4 w-4" /> },
                ].map(link => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors flex items-center gap-1.5 uppercase tracking-widest">
                    {link.icon}{link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="border-t border-foreground/10 mt-8 pt-6">
              <p className="text-xs text-foreground/30 tracking-widest uppercase">© 2024 siddhartha412. All rights reserved.</p>
            </div>
          </ScrollReveal>
        </div>
      </footer>
      {showLoader && <PageLoader onComplete={() => setShowLoader(false)} />}
    </div>
  )
}
