/**
 * Resume
 * Prominent, recruiter-friendly resume download band.
 * NOTE: place the PDF at /public/resume/Kashif-Baloch-Resume.pdf
 * (path configured via `profile.resumeUrl` in lib/data.ts).
 */
import { Download, FileText, Mail } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { profile } from '@/lib/data'

export function Resume() {
  return (
    <section id="resume" className="scroll-mt-20 py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ScrollReveal>
          <div className="glass flex flex-col items-center gap-6 rounded-3xl p-10 text-center sm:p-14">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/25">
              <FileText className="h-7 w-7" />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Grab my resume
              </h2>
              <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Prefer a one-page overview? Download my resume to see my
                education, skills, and projects at a glance.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Download className="h-4 w-4" />
                Download Resume (PDF)
              </a> */}
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                Request via Email
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
