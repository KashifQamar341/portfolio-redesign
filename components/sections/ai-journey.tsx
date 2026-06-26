/**
 * AIJourney
 * A roadmap of the AI/ML learning path with status indicators
 * (done / in-progress / upcoming) presented as connected step cards.
 */
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { SectionHeading } from '@/components/section-heading'
import { aiJourney } from '@/lib/data'
import { cn } from '@/lib/utils'

const statusStyles: Record<
  string,
  { badge: string; label: string; ring: string }
> = {
  done: {
    badge: 'bg-emerald-500/15 text-emerald-400 ring-emerald-500/30',
    label: 'Completed',
    ring: 'ring-emerald-500/30',
  },
  'in-progress': {
    badge: 'bg-primary/15 text-primary ring-primary/30',
    label: 'In Progress',
    ring: 'ring-primary/40',
  },
  upcoming: {
    badge: 'bg-muted text-muted-foreground ring-border',
    label: 'Upcoming',
    ring: 'ring-border',
  },
}

export function AIJourney() {
  return (
    <section
      id="ai-journey"
      className="relative scroll-mt-20 bg-card/30 py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="AI & Machine Learning"
          title="My Learning Journey"
          subtitle="I'm building toward applied AI step by step — being transparent about what I've completed and what's still ahead."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aiJourney.map((step, i) => {
            const Icon = step.icon
            const s = statusStyles[step.status]
            return (
              <ScrollReveal key={step.title} delay={i * 0.08} as="div">
                <div className="glass relative flex h-full flex-col rounded-2xl p-6">
                  {/* Step number */}
                  <span className="absolute right-5 top-5 font-heading text-3xl font-bold text-foreground/10">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div
                    className={cn(
                      'flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1',
                      s.ring,
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <span
                    className={cn(
                      'mt-4 inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide ring-1',
                      s.badge,
                    )}
                  >
                    {s.label}
                  </span>

                  <h3 className="mt-3 font-heading text-base font-bold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
