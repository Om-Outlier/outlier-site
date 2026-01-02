import { setHeader } from 'h3'

export default defineEventHandler((event) => {
  const siteUrl = useRuntimeConfig().public.siteUrl || 'https://www.outlier.co.th'
  const content = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml`
  setHeader(event, 'content-type', 'text/plain')
  return content
})
