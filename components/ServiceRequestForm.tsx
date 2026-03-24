'use client'

import { useState, FormEvent } from 'react'
import servicesData from '@/data/services.json'

type Step = 1 | 2 | 3

const SERVICES = [...servicesData.map(s => s.title), 'Andre']

interface FormData {
  name: string
  contactPreference: 'telefon' | 'epost' | ''
  phone: string
  email: string
  address: string
  services: string[]
  frequency: string
  preferredDate: string
  message: string
}

const empty: FormData = {
  name: '', contactPreference: '', phone: '', email: '', address: '',
  services: [], frequency: '', preferredDate: '', message: '',
}

export default function ServiceRequestForm() {
  const [step, setStep] = useState<Step>(1)
  const [data, setData] = useState<FormData>(empty)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setData(prev => ({ ...prev, [key]: value }))
  }

  function toggleService(service: string) {
    setData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service],
    }))
  }

  function validateStep1() {
    if (!data.name.trim()) return 'Skriv inn namnet ditt.'
    if (!data.contactPreference) return 'Vel korleis me kan kontakte deg.'
    if (data.contactPreference === 'telefon' && !data.phone.trim()) return 'Skriv inn telefonnummeret ditt.'
    if (data.contactPreference === 'epost' && !data.email.trim()) return 'Skriv inn e-postadressa di.'
    return ''
  }

  function validateStep2() {
    if (data.services.length === 0) return 'Vel minst ei teneste.'
    return ''
  }

  function handleNext() {
    const err = step === 1 ? validateStep1() : step === 2 ? validateStep2() : ''
    if (err) { setError(err); return }
    setError('')
    setStep(s => (s + 1) as Step)
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        let msg = 'Noko gjekk gale. Prøv igjen, eller kontakt oss direkte.'
        try {
          const json = await res.json()
          if (json?.error) msg = json.error
        } catch { /* ignore parse errors */ }
        setError(msg)
        return
      }
      setData(empty)
      setStep(1)
      setSubmitted(true)
    } catch {
      setError('Noko gjekk gale. Prøv igjen, eller kontakt oss direkte.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="card text-center py-16 border-2 border-brand-200">
        <div className="w-16 h-16 rounded-full bg-brand-300 flex items-center justify-center mx-auto mb-6">
          <CheckIcon />
        </div>
        <h2 className="text-2xl font-bold text-dark mb-3">Takk for førespurnaden!</h2>
        <p className="text-dark/70 max-w-md mx-auto">
          Me kjem att til deg så snart som mogleg — som regel innan ein kvardag.
        </p>
      </div>
    )
  }

  return (
    <div className="card border border-brand-100 max-w-2xl mx-auto">
      {/* Progress */}
      <div className="flex items-center gap-3 mb-10" aria-label="Steg i skjema">
        {([1, 2, 3] as Step[]).map(s => (
          <div key={s} className="flex items-center gap-3 flex-1">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors duration-200 ${
                step === s ? 'bg-brand-300 text-white shadow-md' : step > s ? 'bg-brand-600 text-white' : 'bg-brand-100 text-brand-400'
              }`}
              aria-current={step === s ? 'step' : undefined}
            >
              {step > s ? <SmallCheckIcon /> : s}
            </div>
            <span className={`text-sm font-semibold hidden sm:block ${step === s ? 'text-dark' : 'text-dark/40'}`}>
              {s === 1 ? 'Personalia' : s === 2 ? 'Tenester' : 'Bekreft'}
            </span>
            {s < 3 && <div className={`h-0.5 flex-1 rounded-full transition-colors ${step > s ? 'bg-brand-400' : 'bg-brand-100'}`} />}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Step 1 */}
        {step === 1 && (
          <fieldset>
            <legend className="text-2xl font-bold text-dark mb-8">Personalia</legend>
            <div className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="label">Ditt namn <span className="text-red-500">*</span></label>
                <input id="name" type="text" required autoComplete="name" className="input-field" placeholder="Ola Normann"
                  value={data.name} onChange={e => update('name', e.target.value)} />
              </div>

              <div>
                <span className="label">Ønskjer bli kontakta på <span className="text-red-500">*</span></span>
                <div className="flex gap-6 mt-2">
                  {(['telefon', 'epost'] as const).map(opt => (
                    <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="contactPreference" value={opt}
                        checked={data.contactPreference === opt}
                        onChange={() => update('contactPreference', opt)}
                        className="w-5 h-5 accent-brand-400 cursor-pointer" />
                      <span className="text-dark font-medium group-hover:text-brand-600 transition-colors">
                        {opt === 'epost' ? 'E-post' : 'Telefon'}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {data.contactPreference === 'telefon' && (
                <div>
                  <label htmlFor="phone" className="label">Telefon <span className="text-red-500">*</span></label>
                  <input id="phone" type="tel" required autoComplete="tel" className="input-field" placeholder="940 78 545"
                    value={data.phone} onChange={e => update('phone', e.target.value)} />
                </div>
              )}

              {data.contactPreference === 'epost' && (
                <div>
                  <label htmlFor="email" className="label">E-post <span className="text-red-500">*</span></label>
                  <input id="email" type="email" required autoComplete="email" className="input-field" placeholder="ola@example.no"
                    value={data.email} onChange={e => update('email', e.target.value)} />
                </div>
              )}

              <div>
                <label htmlFor="address" className="label">Di adresse <span className="text-dark/40 font-normal normal-case tracking-normal">(valfritt)</span></label>
                <input id="address" type="text" autoComplete="street-address" className="input-field" placeholder="Hagavegen 71A, Årdal"
                  value={data.address} onChange={e => update('address', e.target.value)} />
              </div>
            </div>
          </fieldset>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <fieldset>
            <legend className="text-2xl font-bold text-dark mb-8">Vel teneste(r)</legend>
            <div className="flex flex-col gap-6">
              <div>
                <span className="label">Kva treng du hjelp med? <span className="text-red-500">*</span></span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  {SERVICES.map(service => {
                    const checked = data.services.includes(service)
                    return (
                      <label key={service}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-150 ${
                          checked ? 'border-brand-300 bg-brand-50' : 'border-brand-100 bg-white hover:border-brand-200'
                        }`}
                      >
                        <input type="checkbox" checked={checked} onChange={() => toggleService(service)}
                          className="w-5 h-5 accent-brand-400 cursor-pointer flex-shrink-0" />
                        <span className="font-medium text-dark">{service}</span>
                      </label>
                    )
                  })}
                </div>
              </div>

              <div>
                <label htmlFor="frequency" className="label">Kor ofte ønskjer du hjelp? <span className="text-dark/40 font-normal normal-case tracking-normal">(valfritt)</span></label>
                <select id="frequency" className="input-field bg-white cursor-pointer" value={data.frequency} onChange={e => update('frequency', e.target.value)}>
                  <option value="">Vel frekvens…</option>
                  <option value="eingong">Eingong</option>
                  <option value="kvar-veke">Kvar veke</option>
                  <option value="annakvar-veke">Annakvar veke</option>
                  <option value="kvar-manad">Kvar månad</option>
                  <option value="anna">Anna</option>
                </select>
              </div>

              <div>
                <label htmlFor="preferredDate" className="label">Ønskt dato <span className="text-dark/40 font-normal normal-case tracking-normal">(valfritt)</span></label>
                <input id="preferredDate" type="date" className="input-field" value={data.preferredDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={e => update('preferredDate', e.target.value)} />
              </div>

              <div>
                <label htmlFor="message" className="label">Melding <span className="text-dark/40 font-normal normal-case tracking-normal">(valfritt)</span></label>
                <textarea id="message" rows={4} className="input-field resize-none"
                  placeholder="Spesielle ønskjer, tilgang til bustad, anna relevant informasjon…"
                  value={data.message} onChange={e => update('message', e.target.value)} />
              </div>
            </div>
          </fieldset>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-dark mb-8">Stadfest og send</h2>
            <div className="rounded-2xl bg-brand-50 border border-brand-100 p-6 mb-8 flex flex-col gap-4 text-sm">
              <Row label="Namn" value={data.name} />
              <Row label="Kontakt" value={data.contactPreference === 'epost' ? data.email : data.phone} />
              {data.address && <Row label="Adresse" value={data.address} />}
              <Row label="Tenester" value={data.services.join(', ')} />
              {data.frequency && <Row label="Frekvens" value={data.frequency} />}
              {data.preferredDate && <Row label="Dato" value={data.preferredDate} />}
              {data.message && <Row label="Melding" value={data.message} />}
            </div>
            <p className="text-dark/60 text-sm mb-6">
              Ved å sende skjemaet godtek du at me kontaktar deg for å avtale detaljar.
            </p>
          </div>
        )}

        {error && (
          <div role="alert" className="mt-6 rounded-xl bg-red-50 border border-red-200 px-5 py-3.5 text-red-700 text-sm font-medium">
            {error}
          </div>
        )}

        <div className="flex justify-between items-center mt-8 gap-4">
          {step > 1 ? (
            <button type="button" onClick={() => { setError(''); setStep(s => (s - 1) as Step) }} className="btn-outline !py-3 !px-6 !text-base">
              Tilbake
            </button>
          ) : <span />}

          {step < 3 ? (
            <button type="button" onClick={handleNext} className="btn-primary !py-3 !px-8 !text-base ml-auto">
              Neste steg &rarr;
            </button>
          ) : (
            <button type="submit" disabled={loading} className="btn-primary !py-3 !px-8 !text-base ml-auto disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? 'Sender…' : 'Send forespurnad'}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <span className="font-semibold text-dark/50 w-24 flex-shrink-0">{label}</span>
      <span className="text-dark">{value}</span>
    </div>
  )
}

function CheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function SmallCheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
