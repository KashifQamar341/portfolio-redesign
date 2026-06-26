/**
 * GitHubSection
 * A focused call-to-action inviting recruiters to explore the GitHub profile,
 * with quick links to the headline repositories.
 */
import { ArrowUpRight, Star } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { GitHubIcon } from '@/components/icons/brand-icons'
import { githubUrl, projects } from '@/lib/data'

export function GitHubSection() {
  // Pull repos straight from the projects list (those that have a GitHub link)
  const repos = projects.filter((p) => p.github && !p.comingSoon).slice(0, 3)

  return (
    <section id="github" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <ScrollReveal>
        <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
          <div
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
            aria-hidden
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="eyebrow">
                <span className="h-px w-6 bg-primary" aria-hidden />
                GitHub
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Explore my code on GitHub
              </h2>
              <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Every project here is open source. Browse the source, follow my
                progress, and see how I structure and document my work.
              </p>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                <GitHubIcon className="h-5 w-5" />
                View GitHub Profile
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Repo quick links */}
            <div className="space-y-3">
              {repos.map((repo) => (
                <a
                  key={repo.title}
                  href={repo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card/40 p-4 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/25">
                      <GitHubIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{repo.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {repo.technologies.slice(0, 3).join(' · ')}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
