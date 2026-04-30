import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HashScroll from '@/components/HashScroll'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Årdalshjelpen – Hjelp i kvardagen',
    template: '%s | Årdalshjelpen',
  },
  description:
    'Årdalshjelpen leverer praktisk hjelp i kvardagen – husvask, handleturar, hagearbeid og mykje meir. Ring oss i dag.',
  keywords: ['husvask', 'hjelp heime', 'handletur', 'Ardal', 'Laerdal', 'Kaupanger', 'praktisk hjelp'],
  openGraph: {
    siteName: 'Årdalshjelpen',
    locale: 'nn_NO',
    type: 'website',
  },
  icons: {
    icon: '/images/favicon.ico',
    apple: '/images/apple-touch-icon.png',
  },
  metadataBase: new URL('https://ardalshjelpen.no'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nn" className={inter.variable}>
      <body>
        <HashScroll />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
