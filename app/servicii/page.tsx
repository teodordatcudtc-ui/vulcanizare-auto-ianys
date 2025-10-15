import { Metadata } from 'next'
import ServiciiClient from './ServiciiClient'

export const metadata: Metadata = {
  title: 'Servicii Vulcanizare București - Schimb Anvelope, Echilibrare | Auto Ianys',
  description: 'Servicii complete de vulcanizare în București: schimb anvelope, echilibrare roți, vulcanizare, reparații jante, depanare, verificare TPMS. Contact: 0767062912',
  keywords: 'servicii vulcanizare București, schimb anvelope, echilibrare roți, vulcanizare auto, reparații jante, depanare, TPMS, presiune anvelope',
  openGraph: {
    title: 'Servicii Vulcanizare București - Auto Ianys',
    description: 'Servicii complete de vulcanizare în București: schimb anvelope, echilibrare roți, vulcanizare, reparații jante',
    url: 'https://vulcanizare-auto-ianys.ro/servicii',
  },
}

export default function ServiciiPage() {
  return <ServiciiClient />
}