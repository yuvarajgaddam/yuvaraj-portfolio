import { NextApiRequest, NextApiResponse } from 'next';

export const runtime = 'experimental-edge';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  priority: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
  const baseUrl: string = process.env.NEXT_PUBLIC_URL || "http://localhost:3000"; // Fallback for local development

  const urls: SitemapUrl[] = [
    {
      loc: `${baseUrl}/`,
      lastmod: new Date().toISOString(),
      priority: 1.0,
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
  ];

  res.setHeader('Content-Type', 'application/xml');
  res.write(`
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (url) => `
      <url>
        <loc>${url.loc}</loc>
        <lastmod>${url.lastmod}</lastmod>
        <priority>${url.priority}</priority>
      </url>
      `
        )
        .join('')}
    </urlset>
  `);
  res.end();
}