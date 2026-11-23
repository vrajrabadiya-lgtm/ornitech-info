import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google'
import './globals.css'
import { VoiceAssistant } from '@/components/voice-assistant'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ornitech.in'),
  title: {
    default: 'Software Development Company in Surat | Ornitech',
    template: '%s | Ornitech',
  },
  description:
    'Ornitech is a software development company in Surat, Gujarat, building web and mobile apps, business software, AI integrations and cloud solutions.',
  applicationName: 'Ornitech',
  authors: [{ name: 'Ronak Talaviya', url: 'https://www.ornitech.in/founder' }],
  generator: 'Next.js',
  creator: 'Ronak Talaviya',
  publisher: 'Ornitech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Software Development Company in Surat | Ornitech',
    description:
      'Ornitech builds custom web and mobile applications, business software, AI integrations and cloud systems from Surat, Gujarat.',
    siteName: 'Ornitech',
    images: [
      {
        url: '/transparent.png',
        width: 1200,
        height: 630,
        alt: 'Ornitech software development team in Surat',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Company in Surat | Ornitech',
    description:
      'Web and mobile app development, business software and AI integration from Ornitech in Surat, Gujarat.',
    images: ['/transparent.png'],
    creator: '@ornitech',
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
  icons: {
    icon: '/transparent.png',
    shortcut: '/transparent.png',
    apple: '/transparent.png',
  },
  category: 'technology',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFBFC' },
    { media: '(prefers-color-scheme: dark)', color: '#FAFBFC' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ProfessionalService', 'Organization'],
      '@id': 'https://www.ornitech.in/#organization',
      name: 'Ornitech',
      alternateName: ['Ornitech IT Solutions', 'Ornitech Software'],
      url: 'https://www.ornitech.in',
      logo: 'https://www.ornitech.in/transparent.png',
      image: 'https://www.ornitech.in/ronak-talaviya.jpg',
      description:
        'Ornitech is a software development company based in Surat, Gujarat. The team builds web and mobile applications, business software and AI integrations.',
      telephone: '+918200867325',
      email: 'hr@ornitech.in',
      founder: {
        '@type': 'Person',
        name: 'Ronak Talaviya',
        jobTitle: 'Founder & CEO',
        url: 'https://www.ornitech.in/founder',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          'Office No-324, Center Point Co-operative Society, Bali Sheri, Mahidharpura',
        addressLocality: 'Surat',
        addressRegion: 'Gujarat',
        postalCode: '395003',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 21.1959,
        longitude: 72.8302,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          opens: '09:00',
          closes: '19:00',
        },
      ],
      sameAs: [
        'https://www.linkedin.com/company/ornitech-solution/posts/?feedView=all',
        'https://github.com/Ornitech-26',
        'https://www.instagram.com/ornitech_solution',
      ],
      priceRange: '$$',
      areaServed: [
        { '@type': 'City', name: 'Surat' },
        { '@type': 'State', name: 'Gujarat' },
        { '@type': 'Country', name: 'India' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Software Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Software Development in Surat',
              description:
                'Enterprise software engineering and scalable business applications.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Development Services',
              description:
                'Modern full-stack web applications built with Next.js, React, and Node.js.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mobile App Development',
              description:
                'Native iOS, Android, and cross-platform Flutter/React Native mobile applications.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI & Machine Learning Solutions',
              description:
                'Autonomous AI workflows, custom LLM integration, and intelligent automation.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Dedicated Development Teams',
              description:
                'Hire vetted senior software engineers and staff augmentation services in Surat.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.ornitech.in/#website',
      url: 'https://www.ornitech.in',
      name: 'Ornitech',
      publisher: {
        '@id': 'https://www.ornitech.in/#organization',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${outfit.variable} bg-background overflow-x-hidden`}>
      <head>
        {/* Structured Data (JSON-LD) for Local Business & Search Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Tag Manager (gtm.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-MNWS9VGS"
        />

        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GTM-TJQBS3NZ"
        />
        <script
          id="google-tags-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-YRW251ZDNY');
              gtag('config', 'GTM-TJQBS3NZ');
              gtag('config', 'AW-18473466393');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden pt-20">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MNWS9VGS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <VoiceAssistant />
        {process.env.NODE_ENV === 'production' && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  )
}
