import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ContactInfo } from '@/lib/constants'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vulcanizare Auto Ianys - Servicii Auto București | Schimb Anvelope, Echilibrare',
  description: 'Vulcanizare Auto Ianys București - servicii profesionale: schimb anvelope, echilibrare roți, vulcanizare, reparații jante. Programări: 0767062912. Strada Mircea Vulcănescu 94.',
  keywords: 'vulcanizare București, schimb anvelope București, echilibrare roți, vulcanizare auto, reparații jante, TPMS, presiune anvelope',
  authors: [{ name: 'Vulcanizare Auto Ianys' }],
  creator: 'Vulcanizare Auto Ianys',
  publisher: 'Vulcanizare Auto Ianys',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vulcanizare-auto-ianys.ro'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vulcanizare Auto Ianys - Servicii Auto București',
    description: 'Servicii profesionale de vulcanizare, schimb anvelope, echilibrare roți în București. Contact: 0767062912',
    url: 'https://vulcanizare-auto-ianys.ro',
    siteName: 'Vulcanizare Auto Ianys',
    locale: 'ro_RO',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vulcanizare Auto Ianys - Servicii Auto București',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vulcanizare Auto Ianys - Servicii Auto București',
    description: 'Servicii profesionale de vulcanizare, schimb anvelope, echilibrare roți în București',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: 'Vulcanizare Auto Ianys',
    description: 'Servicii profesionale de vulcanizare, schimb anvelope, echilibrare roți în București',
    url: 'https://vulcanizare-auto-ianys.ro',
    telephone: ContactInfo.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Strada Mircea Vulcănescu 94',
      addressLocality: 'București',
      postalCode: '010864',
      addressCountry: 'RO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.441187,
      longitude: 26.074792,
    },
    openingHours: [
      'Mo-Fr 08:00-18:00',
      'Sa 08:00-14:00',
    ],
    priceRange: '$$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicii Vulcanizare',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Schimb Anvelope',
            description: 'Schimb anvelope de vară și iarnă cu echilibrare',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Echilibrare Roți',
            description: 'Echilibrare roți pentru o conducere sigură',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Vulcanizare',
            description: 'Reparații anvelope și vulcanizare',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reparații Jante',
            description: 'Reparații jante și restaurare',
          },
        },
      ],
    },
    sameAs: [
      'https://www.facebook.com/vulcanizare-auto-ianys',
    ],
  }

  return (
    <html lang="ro" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#C8102E" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
