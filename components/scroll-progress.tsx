"use client"

import { useScroll } from "@react-spring/web"
import { animated } from "@react-spring/web"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <animated.div
      className="fixed top-0 left-0 right-0 h-px bg-gray-400 z-50 origin-left"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  )
}
