import Link from 'next/link'
import { MountainHero } from '@/components/Logo'

export default function NotFound() {
  return (
    <section className="section min-h-[60vh] flex flex-col items-center justify-center text-center gap-6">
      <MountainHero className="w-48 opacity-40" />
      <h1 className="text-5xl font-bold text-dark">404</h1>
      <p className="text-xl text-dark/60">Sida du leitar etter finst ikkje.</p>
      <Link href="/" className="btn-primary">
        Tilbake til framsida
      </Link>
    </section>
  )
}
