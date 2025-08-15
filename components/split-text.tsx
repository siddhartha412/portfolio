"use client"

import type React from "react"
import { useTrail, animated } from "@react-spring/web"
import { useInView } from "@react-spring/web"

export interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  splitType?: "chars" | "words" | "lines"
  staggerDelay?: number
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 0,
  duration = 0.6,
  splitType = "chars",
  staggerDelay = 0.05,
}) => {
  const [ref, inView] = useInView({
    once: true,
    rootMargin: "-10% 0%", // Trigger when 10% of the element is in view
  })

  const items = splitType === "chars" ? text.split("") : text.split(" ")

  const trail = useTrail(items.length, {
    config: { mass: 1, tension: 200, friction: 20 },
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 40,
    rotateX: inView ? 0 : 90,
    delay: delay,
    from: { opacity: 0, y: 40, rotateX: 90 },
    immediate: !inView, // Don't animate on initial render if not in view
  })

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {trail.map((styles, index) => (
        <animated.span
          key={index}
          style={styles}
          // Removed whitespace-pre-wrap for chars to prevent extra spacing
          className={splitType === "chars" ? "inline-block" : "inline-block whitespace-pre-wrap"}
        >
          {items[index]}
          {/* Add non-breaking space only for words split type */}
          {splitType === "words" && index < items.length - 1 && "\u00A0"}
        </animated.span>
      ))}
    </div>
  )
}

export default SplitText
