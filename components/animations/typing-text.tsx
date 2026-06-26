'use client'

/**
 * TypingText
 * Cycles through an array of phrases with a typewriter effect:
 * types a word out, pauses, deletes it, then moves to the next.
 */
import { useEffect, useState } from 'react'

export function TypingText({
  phrases,
  className,
  typingSpeed = 90,
  deletingSpeed = 45,
  pause = 1400,
}: {
  phrases: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pause?: number
}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[index % phrases.length]

    // Decide the delay for the next tick
    let timeout = isDeleting ? deletingSpeed : typingSpeed

    if (!isDeleting && text === current) {
      // Finished typing — pause before deleting
      timeout = pause
      const t = setTimeout(() => setIsDeleting(true), timeout)
      return () => clearTimeout(t)
    }

    if (isDeleting && text === '') {
      // Finished deleting — move to next phrase
      setIsDeleting(false)
      setIndex((i) => (i + 1) % phrases.length)
      return
    }

    const t = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.slice(0, prev.length - 1)
          : current.slice(0, prev.length + 1),
      )
    }, timeout)

    return () => clearTimeout(t)
  }, [text, isDeleting, index, phrases, typingSpeed, deletingSpeed, pause])

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="caret ml-0.5 inline-block w-0.5 -translate-y-0.5 bg-primary align-middle text-primary">
        &nbsp;
      </span>
    </span>
  )
}
