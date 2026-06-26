/**
 * About
 * Two-column layout: narrative paragraphs + quick facts on the left,
 * an emphasized quote card with stats on the right.
 */
import { Quote } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { SectionHeading } from '@/components/section-heading'
import { aboutContent } from '@/lib/data'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="About Me"
        title="Code first, questions later."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Narrative + facts */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
            {aboutContent.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {aboutContent.facts.map((f) => (
              <div
                key={f.label}
                className="rounded-xl border border-border bg-card/40 p-4"
              >
                <div className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  {f.label}
                </div>
                <div className="mt-1 text-sm font-semibold">{f.value}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Quote + stats */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="glass relative h-full rounded-3xl p-8 sm:p-10">
            <Quote className="h-8 w-8 text-primary/60" />
            <p className="mt-4 font-heading text-xl font-medium leading-snug text-balance sm:text-2xl">
              {aboutContent.highlight}
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {aboutContent.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-heading text-4xl font-bold text-primary">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
