'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { LogoFull } from './Logo'

const links = [
  { href: '/',         label: 'Heim' },
  { href: '/tenester', label: 'Tenester' },
  { href: '/kontakt',  label: 'Kontakt' },
  { href: '/om',       label: 'Om oss' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#EEF5F4]/95 backdrop-blur-sm border-b border-brand-100 shadow-sm">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 btn-primary py-2 px-4 text-sm"
      >
        Hopp til innhald
      </a>

      <nav className="container-inner flex items-center justify-between h-20 px-4" aria-label="Hovudnavigasjon">
        <Link href="/" aria-label="Heim – Ardalshjelpen">
          <LogoFull height={32} />
        </Link>

        <ul className="hidden md:flex items-center gap-1" role="list">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-5 py-2.5 rounded-xl text-base font-semibold tracking-wide transition-colors duration-150 ${
                    active ? 'bg-brand-300 text-white' : 'text-dark hover:bg-brand-100 hover:text-brand-700'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            )
          })}
          <li className="ml-4">
            <Link href="/tenester#skjema" className="btn-primary !py-2.5 !px-6 !text-base">
              Bestill hjelp
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-3 rounded-xl hover:bg-brand-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Lukk meny' : 'Opne meny'}
        >
          <span className={`block w-6 h-0.5 bg-dark transition-transform duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-dark transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-dark transition-transform duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-brand-100 bg-[#EEF5F4] px-4 pb-6">
          <ul className="flex flex-col gap-1 pt-4" role="list">
            {links.map(({ href, label }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`block px-5 py-3.5 rounded-xl text-lg font-semibold transition-colors duration-150 ${
                      active ? 'bg-brand-300 text-white' : 'text-dark hover:bg-brand-100'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
            <li className="mt-3">
              <Link href="/tenester#skjema" onClick={() => setOpen(false)} className="btn-primary w-full !justify-center">
                Bestill hjelp
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
