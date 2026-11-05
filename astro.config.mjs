import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import { unified } from "@astrojs/markdown-remark";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import rehypeExternalLinks from "rehype-external-links";
import { enabledLanguages } from "./src/lib/utils/i18nUtils.ts";
import remarkParseContent from "./src/lib/utils/remarkParseContent.ts";
import config from "./.astro/config.generated.json";
import fontsJson from "./src/config/fonts.json";
import { generateAstroFontsConfig } from "./src/lib/utils/AstroFont.ts";

const fonts = generateAstroFontsConfig(fontsJson);

let {
  seo: { sitemap: sitemapConfig },
  settings: {
    multilingual: { showDefaultLangInUrl, defaultLanguage },
  },
} = config;

// https://astro.build/config
export default defineConfig({
  site: config.site.baseUrl ? config.site.baseUrl : "http://examplesite.com",
  trailingSlash: config.site.trailingSlash ? "always" : "never",
  redirects: {
    "/empresas-brasil": "/agenda",
    "/en/empresas-brasil": "/en/agenda",
    "/agencia-de-trafego-pago": "/agenda",
    // Rotas antigas com tráfego detectado no GSC
    "/tik-tok-shop": "/blog",
    "/alerta": "/blog",
    // Rotas de taxonomia, feeds e páginas legadas do WordPress detectadas
    "/author/mauricio": "/",
    "/author": "/",
    "/category/uncategorized": "/blog",
    "/category": "/blog",
    "/tag": "/blog",
    "/comments/feed": "/",
    "/feed": "/blog",
    "/wp-login.php": "/",
    "/wp-admin": "/",
    // Redirecionamentos para páginas legais
    "/politica-de-privacidade-e-termos-de-uso": "/politica-de-privacidade",
    "/en/politica-de-privacidade-e-termos-de-uso": "/en/privacy-policy",
    "/privacy-policy": "/politica-de-privacidade",
    "/terms-of-service": "/termos-de-uso",
    "/terms-conditions": "/termos-de-uso",
    "/termos-e-condicoes": "/termos-de-uso",
    "/termos": "/termos-de-uso",
    "/privacidade": "/politica-de-privacidade",
    "/en/terms-of-service": "/en/terms-conditions",
    // Rotas de paginação legadas eliminadas
    "/blog/page/2": "/blog",
    "/blog/page/3": "/blog",
    "/en/blog/page/2": "/en/blog",
    "/en/blog/page/3": "/en/blog",
    // Resíduos de posts demo do tema detectados no GSC
    "/blog/post-1": "/blog",
    "/blog/post-2": "/blog",
    "/blog/post-3": "/blog",
    "/blog/post-4": "/blog",
    "/blog/post-5": "/blog",
    "/blog/post-6": "/blog",
    "/blog/post-7": "/blog",
    "/blog/post-8": "/blog",
    "/blog/post-9": "/blog",
    "/blog/post-10": "/blog",
    "/en/blog/post-1": "/en/blog",
    "/en/blog/post-2": "/en/blog",
    "/en/blog/post-3": "/en/blog",
    "/en/blog/post-4": "/en/blog",
    "/en/blog/post-5": "/en/blog",
    "/en/blog/post-6": "/en/blog",
    "/en/blog/post-7": "/en/blog",
    "/en/blog/post-8": "/en/blog",
    "/en/blog/post-9": "/en/blog",
    "/en/blog/post-10": "/en/blog",
    // Resíduos da seção team do tema detectados no GSC
    "/team/lena-hoffman": "/",
    "/en/team/lena-hoffman": "/en",
    "/team": "/",
    "/en/team": "/en",
  },
  devToolbar: {
    enabled: true,
  },
  image: {
    layout: "constrained",
  },
  fonts,
  i18n: {
    locales: enabledLanguages,
    defaultLocale: defaultLanguage,
    routing: {
      prefixDefaultLocale: showDefaultLangInUrl,
    },
  },
  integrations: [
    sitemapConfig.enable ? sitemap() : null,
    // Shortcodes are provided to MDX via the `components` prop on `<Content />`
    // (see `src/lib/shortcodes.ts`), so no auto-import integration is needed.
    mdx(),
  ],
  markdown: {
    // Since @astrojs/mdx v6, remark/rehype plugins are configured on the
    // `unified()` processor instead of top-level `markdown.*` options.
    processor: unified({
      remarkPlugins: [
        remarkParseContent, // Parse markdown content and add classes in heading and loading="lazy" to images
        remarkToc,
      ],
      rehypePlugins: [
        [
          rehypeExternalLinks,
          {
            rel: "noopener noreferrer nofollow",
            target: "_blank",
          },
        ],
      ],
    }),

    // Code Highlighter https://github.com/shikijs/shiki
    shikiConfig: {
      // WCAG-AA themed code: every syntax token (incl. comments) clears 4.5:1
      // against the block background, which standard themes don't guarantee.
      theme: "github-light-high-contrast", // https://shiki.style/themes
      wrap: false,
    },
  },
  vite: {
    logLevel: "error",
    build: {
      minify: true,
    },
    plugins: [tailwindcss()],
  },
});
