import { setHeader } from 'h3'
import { services, insights, jobListings } from '~/data/content'

export default defineEventHandler((event) => {
  const siteUrl = useRuntimeConfig().public.siteUrl || 'https://www.outlier.co.th'
  const staticPaths = ['/', '/about', '/services', '/work', '/insights', '/careers', '/contact', '/privacy']
  const servicePaths = services.map((s) => `/services/${s.slug}`)
  const insightPaths = insights.map((i) => `/insights/${i.slug}`)
  const careerPaths = jobListings.map((j) => `/careers/${j.slug}`)
  const urls = [...staticPaths, ...servicePaths, ...insightPaths, ...careerPaths]
  const lastmod = new Date().toISOString().split('T')[0]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>`

  setHeader(event, 'content-type', 'application/xml')
  return xml
})
