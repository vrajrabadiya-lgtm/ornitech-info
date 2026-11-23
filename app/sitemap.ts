import { MetadataRoute } from 'next'
import {
  SERVICES_DATA,
  TECH_CATEGORIES,
  INDUSTRIES_DATA,
  BLOG_POSTS,
} from '@/lib/site-data'

const BASE_URL = 'https://www.ornitech.in'

export default function sitemap(): MetadataRoute.Sitemap {
  // Static high-priority pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/contact`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/founder`,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/technologies`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industries`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/portfolio`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/careers`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Dynamic service pages
  const servicePages: MetadataRoute.Sitemap = SERVICES_DATA.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  // Dynamic technology pages
  const techPages: MetadataRoute.Sitemap = TECH_CATEGORIES.map((tech) => ({
    url: `${BASE_URL}/technologies/${tech.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Dynamic industry pages
  const industryPages: MetadataRoute.Sitemap = INDUSTRIES_DATA.map((industry) => ({
    url: `${BASE_URL}/industries/${industry.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Dynamic blog posts
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    ...(post.updatedAt ? { lastModified: new Date(post.updatedAt) } : {}),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    ...staticPages,
    ...servicePages,
    ...techPages,
    ...industryPages,
    ...blogPages,
  ]
}
