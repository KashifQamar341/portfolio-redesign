'use client'

/**
 * Contact
 * Left: intro + direct contact links and socials.
 * Right: a validated contact form that sends messages via EmailJS
 * (reusing the keys from the original portfolio).
 */
import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { Loader2, MapPin, Send } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { SectionHeading } from '@/components/section-heading'
import { emailjsConfig, profile, socials } from '@/lib/data'
import { cn } from '@/lib/utils'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('from_name') || '').trim()
    const email = String(data.get('from_email') || '').trim()
    const msg = String(data.get('message') || '').trim()

    // Basic client-side validation
    if (!name || !email || !msg) {
      setStatus('error')
      setMessage('Please fill in all fields.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    try {
      setStatus('sending')
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        { from_name: name, from_email: email, message: msg },
        { publicKey: emailjsConfig.publicKey },
      )
      setStatus('success')
      setMessage("Message sent! I'll get back to you soon.")
      form.reset()
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again or email me directly.')
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Info column */}
        <div>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's connect & collaborate"
            subtitle="Whether you have an internship opportunity, a project idea, or just want to say hello — my inbox is always open."
          />

          <ScrollReveal delay={0.1}>
            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-xl border border-border bg-card/40 p-4 transition-colors hover:border-primary/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/25">
                  <Send className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">{profile.email}</span>
              </a>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card/40 p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/25">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">
                  {profile.shortUniversity}
                </span>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              {socials
                .filter((s) => s.label !== 'Email')
                .map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-xl border border-border bg-card/40 px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Form column */}
        <ScrollReveal delay={0.15}>
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-7 sm:p-9" noValidate>
            {status !== 'idle' && status !== 'sending' && (
              <div
                role="status"
                className={cn(
                  'mb-5 rounded-lg px-4 py-3 text-center text-sm font-semibold',
                  status === 'success'
                    ? 'bg-emerald-500/15 text-emerald-400'
                    : 'bg-destructive/15 text-destructive',
                )}
              >
                {message}
              </div>
            )}

            <div className="space-y-5">
              <Field label="Your Name" htmlFor="from_name">
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your name"
                  className={inputClass}
                />
              </Field>
              <Field label="Email Address" htmlFor="from_email">
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  autoComplete="email"
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </Field>
              <Field label="Message" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="What would you like to talk about?"
                  className={cn(inputClass, 'resize-none')}
                />
              </Field>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}

const inputClass =
  'w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/25'

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  )
}
