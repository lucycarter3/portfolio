"use client"

import { useRef, useState } from "react"
import { motion } from "motion/react"

interface MagneticElementProps {
  children: React.ReactNode
  className?: string
  strength?: number
}

export function MagneticElement({
  children,
  className = "",
  strength = 30,
}: MagneticElementProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current!.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    setPosition({ x: x / 5, y: y / 5 })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
