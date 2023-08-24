import { MetadataRoute } from 'next'
import { getBaseUrl, getPaths } from '@lib/meta'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = getBaseUrl()
    const paths = getPaths()
    const lastModified = new Date()

    return paths.map(path => ({
        url: baseUrl + path,
        lastModified,
    }))
}
