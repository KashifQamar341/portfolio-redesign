'use client'

/**
 * SkillBar
 * Animated horizontal progress bar that fills to `value`% when scrolled
 * into view. Used for the Technical Skills and Programming Languages sections.
 */
import { motion } from 'framer-motion'

export function SkillBar({ value }: { value: number }) {
  return (
    <div
      className="h-2 w-full overflow-hidden rounded-full bg-muted"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-primary to-sky-400"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}
