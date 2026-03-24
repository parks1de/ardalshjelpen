import Link from 'next/link'
import { LogoFull } from './Logo'

const links = [
  { href: '/',         label: 'Heim' },
  { href: '/tenester', label: 'Tenester' },
  { href: '/kontakt',  label: 'Kontakt' },
  { href: '/om',       label: 'Om oss' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-800 text-white mt-24" aria-label="Botnlinje">
      <div className="container-inner px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <LogoFull height={28} className="[&_span]:text-white [&_svg_polygon]:fill-white" />
            <p className="mt-4 text-brand-200 leading-relaxed">
              Driftige folk med eit brennande hjarte for å hjelpa andre — i Årdal, Lærdal og Kaupanger.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-300 mb-4">Sider</h3>
            <ul className="flex flex-col gap-2" role="list">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-brand-100 hover:text-white transition-colors duration-150">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-300 mb-4">Kontakt</h3>
            <ul className="flex flex-col gap-3" role="list">
              <li>
                <a href="mailto:post@ardalshjelpen.no" className="flex items-center gap-3 text-brand-100 hover:text-white transition-colors duration-150">
                  <EmailIcon />
                  post@ardalshjelpen.no
                </a>
              </li>
              <li>
                <a href="tel:+4794078545" className="flex items-center gap-3 text-brand-100 hover:text-white transition-colors duration-150">
                  <PhoneIcon />
                  940 78 545
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-300">
          <p>Ardalshjelpen AS &mdash; Org.nr. 927 700 182</p>
          <div className="flex flex-col items-center md:items-end gap-1">
            <p>&copy; {new Date().getFullYear()} Ardalshjelpen</p>
            <a
              href="mailto:post@parkside.no"
              className="text-brand-500/70 hover:text-brand-400 transition-colors duration-150 text-xs"
            >
              by Parkside.
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.1 6.1l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
