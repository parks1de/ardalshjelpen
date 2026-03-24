import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HashScroll from '@/components/HashScroll'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Ardalshjelpen – Hjelp i kvardagen',
    template: '%s | Ardalshjelpen',
  },
  description:
    'Ardalshjelpen leverer praktisk hjelp i kvardagen – husvask, handleturar, hagearbeid og mykje meir. Ring oss i dag.',
  keywords: ['husvask', 'hjelp heime', 'handletur', 'Ardal', 'Laerdal', 'Kaupanger', 'praktisk hjelp'],
  openGraph: {
    siteName: 'Ardalshjelpen',
    locale: 'nn_NO',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
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
      </body>
    </html>
  )
}
