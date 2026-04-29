import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontakt Årdalshjelpen via e-post eller telefon. Me er klare til å hjelpe deg.',
}

export default function KontaktPage() {
  return (
    <>
      <section className="section pb-0" aria-labelledby="page-heading">
        <div className="container-inner">
          <h1 id="page-heading" className="text-4xl md:text-5xl font-bold text-brand-600 mb-4">
            Kontakt oss
          </h1>
          <p className="text-xl text-dark/70 max-w-2xl leading-relaxed">
            Me er klare til å ta imot din forespurnad — kontakt oss gjerne via e-post, telefon, eller send ei melding!
          </p>
        </div>
      </section>

      <section className="section" aria-label="Kontaktinformasjon">
        <div className="container-inner">
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            <a
              href="tel:+4794078545"
              className="card border-2 border-brand-100 hover:border-brand-300 flex items-center gap-5 group transition-all duration-200 no-underline"
              aria-label="Ring 940 78 545"
            >
              <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-brand-300 flex items-center justify-center text-white shadow group-hover:bg-brand-400 transition-colors">
                <PhoneIcon size={24} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-dark/40 mb-0.5">Telefon</p>
                <p className="font-semibold text-dark text-xl group-hover:text-brand-600 transition-colors">
                  940 78 545
                </p>
              </div>
            </a>

            <a
              href="mailto:ardalshjelpen@gmail.com"
              className="card border-2 border-brand-100 hover:border-brand-300 flex items-center gap-5 group transition-all duration-200 no-underline"
              aria-label="Send e-post til ardalshjelpen@gmail.com"
            >
              <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-brand-300 flex items-center justify-center text-white shadow group-hover:bg-brand-400 transition-colors">
                <EmailIcon size={24} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold uppercase tracking-wide text-dark/40 mb-0.5">E-post</p>
                <p className="font-semibold text-dark group-hover:text-brand-600 transition-colors whitespace-nowrap">
                  ardalshjelpen@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-brand-50" aria-labelledby="form-cta-heading">
        <div className="container-inner max-w-2xl text-center">
          <h2 id="form-cta-heading" className="text-3xl font-bold text-dark mb-4">
            Føretrekker du å skrive?
          </h2>
          <p className="text-dark/70 text-lg mb-8 leading-relaxed">
            Bruk teneste-skjemaet vårt — vel teneste, skriv meldinga di og send i veg. Enkelt og raskt.
          </p>
          <Link href="/tenester#skjema" className="btn-primary">
            Gå til skjema
          </Link>
        </div>
      </section>

      <section className="section" aria-labelledby="area-heading">
        <div className="container-inner max-w-2xl">
          <h2 id="area-heading" className="text-2xl font-bold text-dark mb-6">
            Tenesteområde
          </h2>
          <div className="card border border-brand-100 flex flex-col gap-3">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600 flex-shrink-0 mt-0.5">
                <LocationIcon />
              </div>
              <div>
                <p className="font-bold text-dark">Hovudkontor</p>
                <p className="text-dark/70">Hagavegen 71A, Årdal</p>
              </div>
            </div>
            <div className="border-t border-brand-50 pt-4 mt-2">
              <p className="font-semibold text-dark mb-2">Me utfører tenester i:</p>
              <ul className="flex flex-col gap-1.5" role="list">
                {['Årdal kommune', 'Lærdal kommune', 'Kaupanger'].map(area => (
                  <li key={area} className="flex items-center gap-2 text-dark/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-300 flex-shrink-0" aria-hidden="true" />
                    {area}
                  </li>
                ))}
              </ul>
              <p className="text-dark/50 text-sm mt-4">
                Utvidelse til fleire kommunar kan skje om etterspurnaden er stor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function EmailIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function PhoneIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.1 6.1l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
