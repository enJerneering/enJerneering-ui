import { MetadataRoute } from 'next'
import { getBaseUrl } from '@lib/meta'
 
export default function robots(): MetadataRoute.Robots {
    const baseUrl = getBaseUrl()
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: baseUrl + 'sitemap.xml',
  }
}