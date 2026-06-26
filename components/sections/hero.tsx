'use client'

/**
 * Hero
 * Animated introduction: kicker, name, typing role, intro paragraph,
 * social chips, primary CTAs, and a premium glassmorphic profile card.
 */
import { motion } from 'framer-motion'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import { TypingText } from '@/components/animations/typing-text'
import { profile, heroContent, socials, aboutContent } from '@/lib/data'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 md:pt-32"
    >
      {/* Ambient animated background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="animate-blob absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="animate-blob absolute right-0 top-1/3 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl [animation-delay:4s]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        {/* Text column */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.span variants={item} className="eyebrow">
            <span className="h-px w-6 bg-primary" aria-hidden />
            {heroContent.kicker}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 font-heading text-5xl font-extrabold leading-[0.98] tracking-tight text-balance sm:text-6xl md:text-7xl"
          >
            {profile.name.split(' ')[0]}
            <br />
            <span className="gradient-text">{profile.name.split(' ')[1]}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-lg font-medium text-muted-foreground sm:text-xl"
          >
            <span className="text-foreground">I&apos;m an </span>
            <TypingText
              phrases={profile.typingRoles}
              className="font-semibold text-primary"
            />
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground"
          >
            {heroContent.intro}
          </motion.p>

          {/* Social chips */}
          <motion.div variants={item} className="mt-7 flex flex-wrap gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/40 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Profile card column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="glass relative overflow-hidden rounded-3xl p-8">
            {/* Decorative top glow */}
            <div
              className="absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl"
              aria-hidden
            />

            {/*
              Premium monogram avatar.
              TODO: To use a real photo, replace this block with:
              <Image src="/your-photo.jpg" alt="Kashif Baloch" width={160} height={160}
                className="mx-auto h-40 w-40 rounded-2xl object-cover" />
            */}
           <img
  src={`/portfolio-redesign${profile.avatar}`}
  alt={profile.name}
  className="mx-auto h-36 w-36 rounded-2xl object-cover"
/>

            <div className="mt-6 text-center">
              <h2 className="font-heading text-xl font-bold">{profile.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {profile.program}
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {profile.location}
              </p>
            </div>

            {/* Availability badge */}
            <div className="mt-5 flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2">
              <span className="status-dot h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold">
                {profile.availability}
              </span>
            </div>

            {/* Mini stats */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {aboutContent.stats.slice(0, 4).map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border bg-card/40 p-3 text-center"
                >
                  <div className="font-heading text-2xl font-bold text-primary">
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
