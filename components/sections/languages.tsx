/**
 * Languages
 * Spotlight on the two core programming languages (C++ and Python),
 * each with a circular-style proficiency, tagline, and key highlights.
 */
import { Check } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { SkillBar } from '@/components/animations/skill-bar'
import { SectionHeading } from '@/components/section-heading'
import { languages } from '@/lib/data'

export function Languages() {
  return (
    <section
      id="languages"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8"
    >
      <SectionHeading
        eyebrow="Programming Languages"
        title="Where I Write Code"
        subtitle="C++ is my strongest language and the one I shipped a full system in. Python is my current focus as I move toward AI and machine learning."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {languages.map((lang, i) => {
          const Icon = lang.icon
          return (
            <ScrollReveal key={lang.name} delay={i * 0.1} as="div">
              <div className="glass h-full rounded-3xl p-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/25">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold">
                        {lang.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {lang.tagline}
                      </p>
                    </div>
                  </div>
                  <span className="font-heading text-3xl font-bold gradient-text">
                    {lang.proficiency}%
                  </span>
                </div>

                <div className="mt-6">
                  <SkillBar value={lang.proficiency} />
                </div>

                <ul className="mt-6 space-y-2.5">
                  {lang.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}
