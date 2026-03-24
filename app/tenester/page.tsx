import Image from 'next/image'
import type { Metadata } from 'next'
import ServiceRequestForm from '@/components/ServiceRequestForm'
import servicesData from '@/data/services.json'

export const metadata: Metadata = {
  title: 'Tenester',
  description: 'Sjå kva Ardalshjelpen kan hjelpe deg med — husvask, nedvask, handletur, hagearbeid og meir. Bestill enkelt via skjema.',
}

export default function TenesterPage() {
  return (
    <>
      <section className="section pb-0" aria-labelledby="page-heading">
        <div className="container-inner">
          <h1 id="page-heading" className="text-4xl md:text-5xl font-bold text-brand-600 mb-4">
            Tenester
          </h1>
          <p className="text-xl text-dark/70 max-w-2xl leading-relaxed">
            Sjå og les om tenestene Ardalshjelpen kan levere for deg.
          </p>
          <p className="text-dark/70 mt-3 max-w-xl leading-relaxed">
            Ønskje om spesifikke tenester som ikkje me har nemnt? Vel &quot;Andre&quot; blant tenestene når du fyller ut skjemaet under!
          </p>
        </div>
      </section>

      <section className="section" aria-label="Oversikt over tenester">
        <div className="container-inner">
          <p className="text-dark/60 mb-8">
            Pris vert avtalt basert på behov og omfang.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
            {servicesData.map(({ id, title, img, imgAlt, description }) => (
              <article key={id} className="card h-full flex flex-col sm:flex-row gap-6 border border-brand-100">
                <div className="flex-shrink-0 flex items-center justify-center w-full sm:w-40 h-40 rounded-2xl bg-brand-50 overflow-hidden">
                  <Image src={img} alt={imgAlt} width={140} height={140} className="object-contain p-3" />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-xl font-bold text-brand-600 mb-2">{title}</h2>
                  <p className="text-dark/70 leading-relaxed">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white" id="bestill" aria-labelledby="form-heading">
        <div className="container-inner">
          <div className="text-center mb-12">
            <h2 id="form-heading" className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Send oss din forespurnad
            </h2>
            <p className="text-dark/70 max-w-xl mx-auto">
              Fyll inn skjemaet nedanfor, så tek me kontakt med deg for å avtale detaljar.
            </p>
          </div>
          <ServiceRequestForm />
        </div>
      </section>

      <section className="section bg-brand-50" aria-labelledby="other-heading">
        <div className="container-inner">
          <div className="flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <Image src="/images/226-Searching-For-Answers.svg" alt="Person som leitar etter svar" width={160} height={160} />
            </div>
            <div>
              <h2 id="other-heading" className="text-2xl md:text-3xl font-bold text-brand-600 mb-4">
                Andre oppgåver du treng hjelp til?
              </h2>
              <p className="text-dark/80 leading-relaxed">
                Me er noko allsidige og har danna oss erfaring gjennom vår tid som Ardalshjelpen.
                Noko utenom våre faste tenester det er ønskje å få hjelp med?
                Fyll inn skjemaet over, og vel &quot;Andre&quot; blant tenestene!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
