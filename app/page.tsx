/**
 * Home page
 * Composes every portfolio section in order. Each section is a self-contained
 * component under components/sections for clean organization.
 */
import { Navbar } from '@/components/navbar'
import { PageLoader } from '@/components/page-loader'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Education } from '@/components/sections/education'
import { Skills } from '@/components/sections/skills'
import { Languages } from '@/components/sections/languages'
import { AIJourney } from '@/components/sections/ai-journey'
import { Projects } from '@/components/sections/projects'
import { GitHubSection } from '@/components/sections/github'
import { Resume } from '@/components/sections/resume'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'

export default function HomePage() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Languages />
        <AIJourney />
        <Projects />
        <GitHubSection />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
