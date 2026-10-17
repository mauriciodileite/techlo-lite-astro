import config from ".astro/config.generated.json" with { type: "json" };
import type { APIRoute } from "astro";

const { enable, disallow } = config.seo.robotsTxt;

const getRobotsTxt = (
  sitemapURL: URL,
) => `# Robots.txt file for controlling web crawler access

User-agent: *

# Content Signals (AI preferences per contentsignals.org)
Content-Signal: ai-train=no, search=yes, ai-input=yes

# Allowed pages
Allow: /

# Disallowed pages
${disallow?.map((item: string) => `Disallow: ${item}`).join("\n") || ""}

# Sitemap location
Sitemap: ${sitemapURL.href}

# Agentic Resource Discovery (ARD) capability manifest
Agentmap: https://mauricioleite.com.br/.well-known/ai-catalog.json
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return enable
    ? new Response(getRobotsTxt(sitemapURL))
    : new Response(null, { status: 404 });
};
