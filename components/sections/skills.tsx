/**
 * Skills
 * Grid of skill cards, each with an icon, proficiency label, and an
 * animated progress bar that fills when scrolled into view.
 */
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { SkillBar } from '@/components/animations/skill-bar'
import { SectionHeading } from '@/components/section-heading'
import { skills } from '@/lib/data'

export function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-20 bg-card/30 py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Languages & Technologies"
          subtitle="A snapshot of where I am today — honest about what I've mastered and what I'm actively growing into."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => {
            const Icon = skill.icon
            return (
              <ScrollReveal key={skill.name} delay={i * 0.07} as="div">
                <div className="group glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25 transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-bold">
                    {skill.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-primary/80">
                    {skill.level}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <SkillBar value={skill.proficiency} />
                    <span className="w-9 text-right text-xs font-semibold text-muted-foreground">
                      {skill.proficiency}%
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
