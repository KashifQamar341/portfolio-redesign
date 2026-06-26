/**
 * Projects
 * Showcases real, shipped projects plus clearly-labeled placeholders for
 * future AI work. Each card has an image, description, tech tags, and
 * GitHub / Live Demo buttons.
 */
import Image from 'next/image'
import { ArrowUpRight, Clock, ExternalLink } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { SectionHeading } from '@/components/section-heading'
import { GitHubIcon } from '@/components/icons/brand-icons'
import { projects, type Project } from '@/lib/data'
import { cn } from '@/lib/utils'

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={cn(
        'group glass flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40',
        project.comingSoon && 'opacity-90',
      )}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={cn(
            'object-cover transition-transform duration-500 group-hover:scale-105',
            project.comingSoon && 'opacity-50 grayscale',
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        {project.comingSoon && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-primary backdrop-blur ring-1 ring-primary/30">
            <Clock className="h-3.5 w-3.5" />
            Coming Soon
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary/80">
          {project.category}
        </p>
        <h3 className="mt-2 font-heading text-xl font-bold">{project.title}</h3>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap gap-2 pt-2">
          {project.github && !project.comingSoon && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          )}
          {project.demo && !project.comingSoon && (
            <a
              href={project.demo}
              target={project.demo.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
          {project.comingSoon && (
            <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-border px-4 py-2 text-sm font-medium text-muted-foreground">
              <ArrowUpRight className="h-4 w-4" />
              Details soon
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const upcoming = projects.filter((p) => !p.featured)

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8"
    >
      <SectionHeading
        eyebrow="Projects"
        title="Work I've Actually Built"
        subtitle="Real, runnable software — not just coursework. Here's what I've shipped, plus what's coming next as I grow into AI."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 0.08} as="div">
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>

      {/* Future / placeholder projects */}
      <div className="mt-12">
        <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-muted-foreground">
          On the Horizon
        </h3>
        <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((project, i) => (
            <ScrollReveal key={`${project.title}-${i}`} delay={i * 0.08} as="div">
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
