import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Sora, Geist_Mono } from 'next/font/google'
import './globals.css'

/* Body font — clean, highly legible for recruiters */
const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
})

/* Heading font — modern geometric sans for a premium feel */
const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
  display: 'swap',
})

/* Monospace — used for code snippets */
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

const SITE_URL = 'https://kashif-baloch.vercel.app' // TODO: replace with your final deployed domain

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Kashif Baloch — AI Student & Software Developer',
    template: '%s · Kashif Baloch',
  },
  description:
    'Kashif Baloch is a BS Artificial Intelligence student and aspiring software/AI developer. C++ and Python developer building real projects and seeking internship and entry-level opportunities.',
  keywords: [
    'Kashif Baloch',
    'AI Student',
    'Software Developer',
    'Machine Learning',
    'C++ Developer',
    'Python Developer',
    'Portfolio',
    'Internship',
    'Aror University',
    'Sukkur',
  ],
  authors: [{ name: 'Kashif Baloch' }],
  creator: 'Kashif Baloch',
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Kashif Baloch — AI Student & Software Developer',
    description:
      'Aspiring software/AI developer building real projects in C++ and Python. Open to internship and entry-level opportunities.',
    siteName: 'Kashif Baloch Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kashif Baloch — AI Student & Software Developer',
    description:
      'Aspiring software/AI developer building real projects in C++ and Python. Open to internship and entry-level opportunities.',
  },
  robots: { index: true, follow: true },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b1020',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${sora.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
