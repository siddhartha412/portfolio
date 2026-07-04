"use client"

import { useEffect, useState } from "react"
import { animated, useSpring, useTrail } from "@react-spring/web"

interface PageLoaderProps {
  onComplete: () => void
}

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [phase, setPhase] = useState<"enter" | "loading" | "exit" | "done">("enter")

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("loading"), 1000)
    return () => clearTimeout(t1)
  }, [])

  useEffect(() => {
    if (phase !== "loading") return
    const t2 = setTimeout(() => setPhase("exit"), 700)
    return () => clearTimeout(t2)
  }, [phase])

  useEffect(() => {
    if (phase !== "exit") return
    const t3 = setTimeout(() => {
      setPhase("done")
      onComplete()
    }, 1000)
    return () => clearTimeout(t3)
  }, [phase, onComplete])

  const curtainSpring = useSpring({
    transform: phase === "exit" ? "translateY(-100%)" : "translateY(0%)",
    config: { mass: 1, tension: 140, friction: 26 },
  })

  const contentSpring = useSpring({
    opacity: phase === "exit" ? 0 : 1,
    config: { duration: 200 },
  })

  const letters = "SIDDHARTHA 412".split("")
  const trail = useTrail(letters.length, {
    from: { opacity: 0, y: 60 },
    to: { opacity: 1, y: 0 },
    config: { mass: 1, tension: 220, friction: 24 },
    immediate: phase !== "enter",
  })

  const subtitleSpring = useSpring({
    opacity: phase !== "enter" ? 1 : 0,
    y: phase !== "enter" ? 0 : 10,
    config: { mass: 1, tension: 200, friction: 20 },
    delay: 500,
  })

  const barSpring = useSpring({
    scaleX: phase === "loading" ? 1 : 0,
    config: { duration: 600 },
  })

  if (phase === "done") return null

  return (
    <animated.div
      style={curtainSpring}
      className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center"
    >
      <animated.div style={contentSpring} className="flex items-center justify-center px-4">
        {trail.map((style, i) => (
          <animated.span
            key={i}
            style={{ ...style, fontSize: "clamp(2.5rem, 10.5vw, 9rem)" }}
            className="font-black tracking-tighter leading-none text-foreground inline-block"
          >
            {letters[i]}
          </animated.span>
        ))}
      </animated.div>
      <animated.p
        style={subtitleSpring}
        className="text-foreground/40 text-xs uppercase tracking-[0.3em] mt-6 font-semibold"
      >
        Full Stack Developer
      </animated.p>
      <div className="h-[1px] bg-foreground/10 w-40 mt-8 overflow-hidden rounded-full">
        <animated.div
          style={{ ...barSpring, transformOrigin: "left" }}
          className="h-full bg-foreground/40 rounded-full w-full"
        />
      </div>
    </animated.div>
  )
}
