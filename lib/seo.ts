import type { Metadata } from 'next'

const SITE_NAME = 'Ornitech'
const SOCIAL_IMAGE = '/transparent.png'

type PageMetadataInput = {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
}

export function pageMetadata({
  title,
  description,
  path,
  image = SOCIAL_IMAGE,
  type = 'website',
}: PageMetadataInput): Metadata {
  const openGraph = {
    title,
    description,
    url: path,
    siteName: SITE_NAME,
    images: [{ url: image, width: 1200, height: 630, alt: `${SITE_NAME} — ${title}` }],
    locale: 'en_IN',
    ...(type === 'article' ? { type: 'article' as const } : { type: 'website' as const }),
  }

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph,
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}
