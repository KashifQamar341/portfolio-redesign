/**
 * SectionHeading
 * Consistent eyebrow label + title (+ optional subtitle) used across sections.
 */
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <ScrollReveal
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <span className="eyebrow">
        <span className="h-px w-6 bg-primary" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-pretty text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  )
}
