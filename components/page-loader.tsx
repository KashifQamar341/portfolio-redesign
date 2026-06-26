'use client'

/**
 * PageLoader
 * A brief branded loading animation shown on first paint, then fades out.
 * Keeps perceived performance high without blocking content for long.
 */
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { profile } from '@/lib/data'

export function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Hide once the window has loaded (or after a short max wait)
    const done = () => setLoading(false)
    const timer = setTimeout(done, 1100)
    if (document.readyState === 'complete') {
      const t = setTimeout(done, 500)
      return () => clearTimeout(t)
    }
    window.addEventListener('load', done)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('load', done)
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              className="font-heading text-3xl font-bold tracking-tight"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="gradient-text">{profile.initials}</span>
            </motion.div>
            <div className="h-0.5 w-32 overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full w-full rounded-full bg-gradient-to-r from-primary to-sky-400"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
