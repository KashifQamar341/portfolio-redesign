/**
 * Education
 * Vertical timeline with a connecting line, animated nodes, and cards.
 */
import { GraduationCap } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { SectionHeading } from '@/components/section-heading'
import { education } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8"
    >
      <SectionHeading
        eyebrow="Education"
        title="My Academic Journey"
        subtitle="The foundation behind my work — from intermediate studies to a degree focused on artificial intelligence."
      />

      <div className="relative mt-14 pl-8 sm:pl-10">
        {/* Vertical line */}
        <div
          className="absolute left-[11px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary/60 via-border to-transparent sm:left-[13px]"
          aria-hidden
        />

        <div className="space-y-10">
          {education.map((edu, i) => (
            <ScrollReveal key={i} direction="left" delay={i * 0.1} as="div">
              <div className="relative">
                {/* Node */}
                <span
                  className={cn(
                    'absolute -left-8 top-1.5 flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-background sm:-left-10',
                    edu.status === 'current'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground',
                  )}
                  aria-hidden
                >
                  <GraduationCap className="h-3.5 w-3.5" />
                </span>

                <div className="glass rounded-2xl p-6 transition-colors hover:border-primary/40">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/25">
                      {edu.period}
                    </span>
                    {edu.status === 'current' && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                        <span className="status-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        In Progress
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 font-heading text-lg font-bold">
                    {edu.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary/90">
                    {edu.institution}
                  </p>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {edu.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
