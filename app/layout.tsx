import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google'
import Script from 'next/script'
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
    default: 'Ornitech — Best Software Development & IT Company in Surat',
    template: '%s | Ornitech',
  },
  description:
    'Ornitech is the best software development company in Surat, Gujarat. We build cutting-edge web applications, mobile apps, enterprise software, AI solutions, and cloud architectures for startups and global enterprises.',
  applicationName: 'Ornitech',
  authors: [{ name: 'Ronak Talaviya', url: 'https://www.ornitech.in/founder' }],
  generator: 'Next.js',
  keywords: [
    'best software company in surat',
    'software development company in surat',
    'top IT company in surat',
    'web development company in surat',
    'mobile app development company in surat',
    'IT company in gujarat',
    'custom software development surat',
    'AI development services surat',
    'hire dedicated developers surat',
    'react nextjs development company',
    'flutter mobile app developers surat',
    'full stack web development agency surat',
    'cloud and devops services surat',
    'software agency surat',
    'Ornitech',
    'Ronak Talaviya',
  ],
  creator: 'Ronak Talaviya',
  publisher: 'Ornitech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.ornitech.in',
  },
  openGraph: {
    title: 'Ornitech — Best Software Development & IT Company in Surat',
    description:
      'Partner with Ornitech, Surat’s premier IT and software development agency. Custom web & mobile applications, AI solutions, and scalable cloud systems.',
    url: 'https://www.ornitech.in',
    siteName: 'Ornitech',
    images: [
      {
        url: '/transparent.png',
        width: 1200,
        height: 630,
        alt: 'Ornitech — Best Software Development Company in Surat',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ornitech — Best Software Development & IT Company in Surat',
    description:
      'Surat’s premier software development and IT agency. Custom web, mobile, and AI solutions.',
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
        'Ornitech is the premier software development and IT company in Surat, Gujarat. We engineer custom web applications, mobile platforms, enterprise systems, and AI solutions.',
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
        { '@type': 'AdministrativeArea', name: 'Worldwide' },
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

        {/* Google Tag Manager */}
        <Script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-MNWS9VGS"
          strategy="afterInteractive"
        />

        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GTM-TJQBS3NZ"
          strategy="afterInteractive"
        />
        <Script id="google-tags" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YRW251ZDNY');
            gtag('config', 'GTM-TJQBS3NZ');
            gtag('config', 'AW-18473466393');
          `}
        </Script>
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
