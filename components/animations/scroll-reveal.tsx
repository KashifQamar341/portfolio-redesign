'use client'

/**
 * ScrollReveal
 * Wraps children and fades/slides them in when they enter the viewport.
 * Built on Framer Motion's `whileInView` for smooth scroll-triggered animation.
 */
import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

const offset = 28

function getVariants(direction: Direction): Variants {
  const hidden: Record<string, number> = { opacity: 0 }
  if (direction === 'up') hidden.y = offset
  if (direction === 'down') hidden.y = -offset
  if (direction === 'left') hidden.x = offset
  if (direction === 'right') hidden.x = -offset

  return {
    hidden,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className,
  as = 'div',
}: {
  children: ReactNode
  direction?: Direction
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'article'
}) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      variants={getVariants(direction)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  )
}
