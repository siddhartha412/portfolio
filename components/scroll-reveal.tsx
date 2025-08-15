"use client"

import type React from "react"
import { useSpring, animated } from "@react-spring/web"
import { useInView } from "@react-spring/web"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale" | "rotate" | "bounce"
  distance?: number
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 50,
}) => {
  const [ref, inView] = useInView({
    once: false,
    rootMargin: "-10% 0%",
  })

  const getAnimationProps = () => {
    switch (direction) {
      case "up":
        return {
          opacity: inView ? 1 : 0,
          transform: inView ? `translate3d(0, 0, 0)` : `translate3d(0, ${distance}px, 0)`,
        }
      case "down":
        return {
          opacity: inView ? 1 : 0,
          transform: inView ? `translate3d(0, 0, 0)` : `translate3d(0, -${distance}px, 0)`,
        }
      case "left":
        return {
          opacity: inView ? 1 : 0,
          transform: inView ? `translate3d(0, 0, 0)` : `translate3d(${distance}px, 0, 0)`,
        }
      case "right":
        return {
          opacity: inView ? 1 : 0,
          transform: inView ? `translate3d(0, 0, 0)` : `translate3d(-${distance}px, 0, 0)`,
        }
      case "scale":
        return {
          opacity: inView ? 1 : 0,
          transform: inView ? `scale(1)` : `scale(0.8)`,
        }
      case "rotate":
        return {
          opacity: inView ? 1 : 0,
          transform: inView ? `rotate(0deg)` : `rotate(-10deg)`,
        }
      case "bounce":
        return {
          opacity: inView ? 1 : 0,
          transform: inView ? `translate3d(0, 0, 0)` : `translate3d(0, ${distance}px, 0)`,
        }
      case "fade":
      default:
        return {
          opacity: inView ? 1 : 0,
          transform: `translate3d(0, 0, 0)`,
        }
    }
  }

  const getConfig = () => {
    switch (direction) {
      case "bounce":
        return { mass: 1, tension: 300, friction: 10 }
      case "scale":
        return { mass: 1, tension: 280, friction: 25 }
      case "rotate":
        return { mass: 1, tension: 200, friction: 30 }
      default:
        return { mass: 1, tension: 200, friction: 20 }
    }
  }

  const springProps = useSpring({
    ...getAnimationProps(),
    delay: delay,
    config: getConfig(),
    immediate: !inView,
  })

  return (
    <animated.div ref={ref} style={springProps} className={className}>
      {children}
    </animated.div>
  )
}

export default ScrollReveal
