import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Om oss',
  description: 'Les om historia bak Ardalshjelpen — eit lokalt selskap med engasjement for å hjelpe folk i kvardagen.',
}

export default function OmPage() {
  return (
    <>
      <section className="section pb-0" aria-labelledby="page-heading">
        <div className="container-inner">
          <h1 id="page-heading" className="text-4xl md:text-5xl font-bold text-brand-600 mb-4">
            Om oss
          </h1>
          <p className="text-xl text-dark/70 max-w-2xl leading-relaxed">
            Eit selskap med hjarte for Årdal og nærleiiken.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="story-heading">
        <div className="container-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
            {/* Portrait – padding reserves space for the decorative square */}
            <div className="relative pb-5 pr-5">
              <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/5] bg-brand-100 relative">
                <Image
                  src="/images/bente-ardalshjelpen.avif"
                  alt="Portrett av eigar av Ardalshjelpen"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div
                className="absolute bottom-0 right-0 w-28 h-28 rounded-3xl bg-brand-300 -z-10"
                aria-hidden="true"
              />
            </div>

            <div className="flex flex-col gap-6">
              <h2 id="story-heading" className="text-3xl font-bold text-dark">
                Historia bak Ardalshjelpen
              </h2>
              <div className="flex flex-col gap-4 text-dark/80 leading-relaxed text-lg">
                <p>
                  Ideen bak Ardalshjelpen byrja tidleg sommaren 2021. Og hausten same året blei me registrert som eit AS — planlegginga hadde blitt til ei bedrift.
                </p>
                <p>
                  Me er ei bedrift som spirar i frå Årdal med driftig engasjement, og har eit brennande hjarte for å hjelpa andre.
                </p>
                <p>
                  Me har hovudkontor ved Hagavegen 71A i Årdal, og utfører tenester i Årdal og Lærdal kommune samt Kaupanger. Det er godt mogleg det blir utvidelse til fleire kommunar i nærområdet om etterspurnaden er stor.
                </p>
                <p>Våre tenester er for privatpersonar og firma.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="/tenester" className="btn-primary">Sjå tenestene våre</Link>
                <Link href="/kontakt" className="btn-outline">Ta kontakt</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="values-heading">
        <div className="container-inner">
          <h2 id="values-heading" className="text-3xl md:text-4xl font-bold text-brand-600 text-center mb-12">
            Dette er me
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {values.map(({ title, body, icon }) => (
              <div key={title} className="card border border-brand-100 flex flex-col gap-4 text-center items-center">
                <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center text-brand-600" aria-hidden="true">
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-dark">{title}</h3>
                <p className="text-dark/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="cta-heading">
        <div className="container-inner max-w-2xl text-center">
          <h2 id="cta-heading" className="text-3xl font-bold text-dark mb-4">Klar til å prøve?</h2>
          <p className="text-dark/70 text-lg mb-8 leading-relaxed">
            Bestill di første teneste i dag — enkelt og uforpliktande.
          </p>
          <Link href="/tenester" className="btn-primary text-xl px-12 py-5">Bestill tenester</Link>
        </div>
      </section>
    </>
  )
}

const values = [
  {
    title: 'Lokalt engasjement',
    body: 'Me er frå Årdal og kjenner lokalsamfunnet. Det betyr at me bryr oss, og er raskt på plass.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Påliteleg',
    body: 'Me møter opp til avtalt tid og gjer jobben skikkeleg — kvar gong.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: 'Allsidig',
    body: 'Frå husvask til hagearbeid — me tilpassar oss dine behov og finn alltid ei løysing.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
]
