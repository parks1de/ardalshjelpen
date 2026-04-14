import Link from 'next/link'
import Image from 'next/image'
import { MountainHero } from '@/components/Logo'
import servicesData from '@/data/services.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hjelp i kvardagen – Heim',
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="section" aria-labelledby="hero-heading">
        <div className="container-inner">
          <div className="rounded-2xl bg-brand-300 text-white text-center px-6 py-4 text-lg font-medium shadow-sm mb-12">
            Me har driftige tilsette — med eit brennande ønske om å hjelpe deg å gjere kvardagen lettare!
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Contact card */}
            <div className="card border border-brand-100">
              <h2 className="text-xl font-bold text-dark mb-6">Kontakt oss</h2>
              <ul className="flex flex-col gap-4" role="list">
                <li>
                  <a
                    href="mailto:ardalshjelpen@gmail.com"
                    className="flex items-center gap-4 group"
                    aria-label="Send e-post til ardalshjelpen@gmail.com"
                  >
                    <span className="flex-shrink-0 w-11 h-11 rounded-full bg-brand-300 flex items-center justify-center text-white shadow group-hover:bg-brand-400 transition-colors">
                      <EmailIcon />
                    </span>
                    <span className="text-dark font-medium group-hover:text-brand-600 transition-colors whitespace-nowrap">
                      ardalshjelpen@gmail.com
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+4794078545"
                    className="flex items-center gap-4 group"
                    aria-label="Ring 940 78 545"
                  >
                    <span className="flex-shrink-0 w-11 h-11 rounded-full bg-brand-300 flex items-center justify-center text-white shadow group-hover:bg-brand-400 transition-colors">
                      <PhoneIcon />
                    </span>
                    <span className="text-dark font-medium text-xl group-hover:text-brand-600 transition-colors">
                      940 78 545
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Mountain illustration */}
            <div className="flex justify-center">
              <MountainHero className="w-full max-w-xs md:max-w-sm drop-shadow-sm" />
            </div>

            {/* Services list */}
            <div className="card border border-brand-100">
              <h2 className="text-xl font-bold text-dark mb-6">Tenester</h2>
              <ul className="flex flex-col gap-3" role="list">
                {[...servicesData.map(s => s.title), '…og mykje meir'].map(label => (
                  <li key={label} className="flex items-center gap-3 text-dark font-medium">
                    <span className="w-2 h-2 rounded-full bg-brand-300 flex-shrink-0" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/tenester#skjema" className="btn-primary text-xl px-12 py-5 shadow-lg">
              Bestill tenester i dag!
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why us ── */}
      <section className="section bg-white" aria-labelledby="why-heading">
        <div className="container-inner">
          <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-brand-600 text-center mb-4">
            Kvifor velje Årdalshjelpen?
          </h2>
          <p className="text-center text-dark/70 max-w-2xl mx-auto mb-14">
            Me er lokalt forankra og kjenner Årdal, Lærdal og Kaupanger. Tenestene er tilpassa deg — båe privatpersonar og verksemder.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {whyItems.map(({ icon, title, body }) => (
              <div key={title} className="flex flex-col items-center text-center gap-4 p-6">
                <div className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center text-brand-600" aria-hidden="true">
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-dark">{title}</h3>
                <p className="text-dark/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service overview cards ── */}
      <section className="section" aria-labelledby="services-heading">
        <div className="container-inner">
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-brand-600 text-center mb-4">
            Kva kan me hjelpe med?
          </h2>
          <p className="text-center text-dark/70 max-w-xl mx-auto mb-14">
            Sjå og les om tenestene Årdalshjelpen kan levere for deg.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map(({ id, title, description, img, imgAlt, price }) => (
              <Link
                key={id}
                href="/tenester"
                className="card flex flex-col gap-4 hover:border-brand-300 border-2 border-transparent group no-underline"
              >
                <div className="w-full aspect-square rounded-2xl bg-brand-50 flex items-center justify-center overflow-hidden">
                  <Image
                    src={img}
                    alt={imgAlt}
                    width={180}
                    height={180}
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-brand-600 group-hover:text-brand-500 transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-brand-500 font-medium mt-0.5 mb-2">{price}</p>
                  <p className="text-dark/70 text-sm leading-relaxed">{description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/tenester" className="btn-outline">
              Sjå alle tenester og bestill
            </Link>
          </div>
        </div>
      </section>

      {/* ── Other tasks ── */}
      <section className="section bg-brand-50" aria-labelledby="other-heading">
        <div className="container-inner">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0">
              <Image
                src="/images/226-Searching-For-Answers.svg"
                alt="Person som ser etter svar"
                width={180}
                height={180}
              />
            </div>
            <div>
              <h2 id="other-heading" className="text-3xl md:text-4xl font-bold text-brand-600 mb-4">
                Andre oppgåver du treng hjelp til?
              </h2>
              <p className="text-dark/80 text-lg leading-relaxed mb-6">
                Me er noko allsidige og har danna oss erfaring gjennom vår tid som Årdalshjelpen.
                Noko utenom våre faste tenester det er ønskje å få hjelp med?
                Fyll inn skjemaet og vel &quot;Andre&quot; blant tenestene!
              </p>
              <Link href="/tenester#skjema" className="btn-primary">
                Send ein førespurnad
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const whyItems = [
  {
    title: 'Lokalt og nært',
    body: 'Me kjenner lokalsamfunnet og er raskt på plass i Årdal, Lærdal og Kaupanger.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
  },
  {
    title: 'Pris etter avtale',
    body: 'Me skreddarsyr tilbodet etter dine behov — ingen skjulte kostnader.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'For alle',
    body: 'Tenestene er for privatpersonar og firma — store og små behov er velkomne.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.1 6.1l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
