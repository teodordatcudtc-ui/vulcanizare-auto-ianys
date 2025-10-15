import { Metadata } from 'next'
import Hero from '@/components/Hero'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'Vulcanizare Auto Ianys - Servicii Auto București | Schimb Anvelope, Echilibrare',
  description: 'Vulcanizare Auto Ianys București - servicii profesionale: schimb anvelope, echilibrare roți, vulcanizare, reparații jante. Programări: 0767062912. Strada Mircea Vulcănescu 94.',
  keywords: 'vulcanizare București, schimb anvelope București, echilibrare roți, vulcanizare auto, reparații jante, TPMS, presiune anvelope',
  openGraph: {
    title: 'Vulcanizare Auto Ianys - Servicii Auto București',
    description: 'Servicii profesionale de vulcanizare, schimb anvelope, echilibrare roți în București. Contact: 0767062912',
    url: 'https://vulcanizare-auto-ianys.ro',
    images: ['/og-image.jpg'],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeClient />
    </>
  )
}
