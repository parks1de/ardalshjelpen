import { NextRequest, NextResponse } from 'next/server'

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

  const apiKey = process.env.BREVO_API_KEY

  if (apiKey) {
    const payload: Record<string, unknown> = {
      sender: { name: 'Årdalshjelpen', email: 'noreply@ardalshjelpen.no' },
      to: [{ email: 'post@parkside.no' }],
      subject: `Ny førespurnad – ${name}`,
      textContent: lines,
    }

    if (email) {
      payload.replyTo = { name, email }
    }

    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const detail = await res.text()
      console.error('[ardalshjelpen] Brevo-feil:', res.status, detail)
      return NextResponse.json({ error: 'Email failed' }, { status: 500 })
    }
  } else {
    console.warn(
      '[ardalshjelpen] BREVO_API_KEY er ikkje konfigurert — e-post vert IKKJE sendt. ' +
      'Set BREVO_API_KEY i .env.local eller Vercel Dashboard.'
    )
    console.log('=== NY KONTAKTFORESPURNAD (LOGGING BERRE) ===')
    console.log(lines)
    console.log('=============================================')
  }

  return NextResponse.json({ ok: true })
}
