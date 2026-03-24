import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

interface ContactPayload {
  name: string
  contactPreference: 'telefon' | 'epost'
  phone?: string
  email?: string
  address?: string
  services: string[]
  frequency?: string
  preferredDate?: string
  message?: string
}

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export async function POST(req: NextRequest) {
  let body: ContactPayload

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { name, contactPreference, phone, email, services } = body

  if (!name || !contactPreference || services.length === 0) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const lines = [
    `Namn: ${name}`,
    `Kontakt via: ${contactPreference === 'epost' ? `E-post – ${email}` : `Telefon – ${phone}`}`,
    body.address       ? `Adresse: ${body.address}`        : null,
    `Tenester: ${services.join(', ')}`,
    body.frequency     ? `Frekvens: ${body.frequency}`     : null,
    body.preferredDate ? `Dato: ${body.preferredDate}`     : null,
    body.message       ? `\nMelding:\n${body.message}`     : null,
  ].filter(Boolean).join('\n')

  if (resend) {
    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'post@parkside.no',
      reply_to: email || undefined,
      subject: `Ny forespurnad frå ${name}`,
      text: lines,
    })
    if (error) {
      console.error('[ardalshjelpen] Resend-feil:', error)
      return NextResponse.json({ error: 'Email failed' }, { status: 500 })
    }
  } else {
    console.warn(
      '[ardalshjelpen] RESEND_API_KEY er ikkje konfigurert — e-post vert IKKJE sendt. ' +
      'Set RESEND_API_KEY i .env.local eller Vercel Dashboard.'
    )
    console.log('=== NY KONTAKTFORESPURNAD (LOGGING BERRE) ===')
    console.log(lines)
    console.log('=============================================')
  }

  return NextResponse.json({ ok: true })
}
