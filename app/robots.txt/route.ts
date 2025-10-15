import { MetadataRoute } from 'next'

export function GET(): Response {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /politica-confidentialitate
Disallow: /termeni-conditii

Sitemap: https://vulcanizare-auto-ianys.ro/sitemap.xml`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
