/**
 * JSON-LD Generator
 * Generates appropriate JSON-LD data based on the page type and provided content.
 * Follows Google Search Central guidelines for WebSite (Site Name), WebPage,
 * BreadcrumbList, BlogPosting, Organization, and Person entities in a unified @graph.
 */
import { absoluteUrl } from "./absoluteUrl";
import { getLocaleUrlCTM } from "./i18nUtils";
import removeEmptyKeys from "./removeEmptyKeys";
import trailingSlashChecker from "./trailingSlashChecker";
import social from "@/config/social.json";

// This component dynamically generates appropriate JSON-LD data based on the page type
export type JSONLDProps = {
  canonical?: string; // Canonical URL of the page, used to determine page type
  title?: string; // Title of the page
  description?: string; // Description of the page
  image?: string; // Image URL for blog posts, case studies, or team members
  categories?: string[]; // Categories or tags for blog posts or case studies
  author?: string; // Author for blog posts or case studies
  pageType?: string; // Page type
  datePublished?: string | Date; // Publication date
  dateModified?: string | Date; // Last modification date

  [key: string]: any;
};

export default function JsonLdGenerator(content: JSONLDProps, Astro: any) {
  let {
    canonical = "/",
    title = "",
    description = "",
    image = "",
    pageType = "",
    lang = "pt", // Default language
    alternateLangs = [], // Array of alternate language URLs
    config,
  } = content || {};

  const siteOrigin = trailingSlashChecker(
    config?.site?.baseUrl || (Astro.site ? Astro.site.href : Astro.url.origin),
  );

  const canonicalUrl = canonical.startsWith("http")
    ? trailingSlashChecker(canonical)
    : trailingSlashChecker(`${siteOrigin}${canonical.replace(/^\//, "")}`);

  const normalizedLocale = lang === "en" ? "en-US" : "pt-BR";

  // 1. Organization Node
  const organizationNode = {
    "@type": "Organization",
    "@id": `${siteOrigin}#organization`,
    name: "ML Consultoria e Treinamento",
    alternateName: "Maurício Leite",
    url: siteOrigin,
    logo: {
      "@type": "ImageObject",
      "@id": `${siteOrigin}#logo`,
      url: absoluteUrl(config?.site?.logo || "/images/logo-mauricio-leite.svg", Astro),
      caption: "Maurício Leite",
    },
    sameAs: social.main.filter((item: any) => item.enable).map((item: any) => item.url),
  };

  // 2. Author/Person Node (Maurício Leite)
  const authorPerson = {
    "@type": "Person",
    "@id": `${siteOrigin}#person`,
    name: "Maurício Leite",
    jobTitle: "Fundador & Consultor em Marketing de Performance e IA",
    worksFor: {
      "@id": `${siteOrigin}#organization`,
    },
    brand: {
      "@type": "Brand",
      name: "Criador Digital",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Manaus",
      addressRegion: "AM",
      addressCountry: "BR",
    },
    url: siteOrigin,
    sameAs: social.main.filter((item: any) => item.enable).map((item: any) => item.url),
  };

  // 3. WebSite Node (Critical for Google SERP Site Name attribution)
  const websiteNode = {
    "@type": "WebSite",
    "@id": `${siteOrigin}#website`,
    url: siteOrigin,
    name: "Maurício Leite",
    alternateName: ["Mauricio Leite", "ML Consultoria"],
    description: config?.site?.description,
    inLanguage: normalizedLocale,
    publisher: {
      "@id": `${siteOrigin}#organization`,
    },
  };

  const pathnameClean = (Astro.url?.pathname || "").replace(/\/$/, "");
  const isHome =
    pathnameClean === "" ||
    pathnameClean === "/pt" ||
    pathnameClean === "/en" ||
    canonicalUrl === siteOrigin ||
    canonicalUrl === `${siteOrigin}en/` ||
    canonicalUrl === `${siteOrigin}pt/`;

  const isBlogPost = pageType === "post" || pageType === "article" || pageType === "blog";

  const graphNodes: any[] = [websiteNode, organizationNode, authorPerson];

  if (isHome) {
    // WebPage on Home
    const webPageNode: Record<string, any> = {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: title,
      description: description,
      inLanguage: normalizedLocale,
      isPartOf: {
        "@id": `${siteOrigin}#website`,
      },
      about: {
        "@id": `${siteOrigin}#person`,
      },
    };

    if (image) {
      webPageNode.image = absoluteUrl(image, Astro);
    }

    if (alternateLangs && alternateLangs.length > 0) {
      webPageNode.alternateLanguage = alternateLangs
        .filter((alt: any) => Astro.currentLocale !== alt.languageCode)
        .map((alt: any) => ({
          "@type": "WebPage",
          url: getLocaleUrlCTM(canonicalUrl, alt.languageCode),
          inLanguage: alt.languageCode === "en" ? "en-US" : "pt-BR",
        }));
    }

    graphNodes.push(webPageNode);
  } else if (isBlogPost) {
    // BreadcrumbList for Blog Post
    const breadcrumbNode = {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: lang === "en" ? "Home" : "Início",
          item: siteOrigin,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${siteOrigin}${lang === "en" ? "en/blog/" : "blog/"}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
          item: canonicalUrl,
        },
      ],
    };

    // WebPage for Blog Post
    const webPageNode: Record<string, any> = {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: title,
      description: description,
      inLanguage: normalizedLocale,
      isPartOf: {
        "@id": `${siteOrigin}#website`,
      },
      breadcrumb: {
        "@id": `${canonicalUrl}#breadcrumb`,
      },
    };

    // BlogPosting Node
    const blogPostNode: Record<string, any> = {
      "@type": "BlogPosting",
      "@id": `${canonicalUrl}#article`,
      isPartOf: {
        "@id": `${canonicalUrl}#webpage`,
      },
      headline: title,
      name: title,
      description: description,
      url: canonicalUrl,
      inLanguage: normalizedLocale,
      mainEntityOfPage: {
        "@id": `${canonicalUrl}#webpage`,
      },
      author: {
        "@id": `${siteOrigin}#person`,
      },
      publisher: {
        "@id": `${siteOrigin}#organization`,
      },
    };

    if (image) {
      blogPostNode.image = [absoluteUrl(image, Astro)];
      webPageNode.image = absoluteUrl(image, Astro);
    }
    if (content.datePublished) {
      blogPostNode.datePublished = new Date(content.datePublished).toISOString();
    }
    const lastModified = content.dateModified || content.datePublished;
    if (lastModified) {
      blogPostNode.dateModified = new Date(lastModified).toISOString();
    }
    if (content.categories && content.categories.length > 0) {
      blogPostNode.articleSection = content.categories;
    }

    graphNodes.push(webPageNode, breadcrumbNode, blogPostNode);
  } else {
    // Standard Pages (e.g. /agenda, /politica-de-privacidade, /termos-de-uso)
    const breadcrumbNode = {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: lang === "en" ? "Home" : "Início",
          item: siteOrigin,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: title,
          item: canonicalUrl,
        },
      ],
    };

    const webPageNode: Record<string, any> = {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: title,
      description: description,
      inLanguage: normalizedLocale,
      isPartOf: {
        "@id": `${siteOrigin}#website`,
      },
      breadcrumb: {
        "@id": `${canonicalUrl}#breadcrumb`,
      },
    };

    if (image) {
      webPageNode.image = absoluteUrl(image, Astro);
    }

    if (alternateLangs && alternateLangs.length > 0) {
      webPageNode.alternateLanguage = alternateLangs
        .filter((alt: any) => Astro.currentLocale !== alt.languageCode)
        .map((alt: any) => ({
          "@type": "WebPage",
          url: getLocaleUrlCTM(canonicalUrl, alt.languageCode),
          inLanguage: alt.languageCode === "en" ? "en-US" : "pt-BR",
        }));
    }

    graphNodes.push(webPageNode, breadcrumbNode);
  }

  const jsonLdData: Record<string, any> = {
    "@context": "https://schema.org",
    "@graph": graphNodes,
  };

  // Utility to remove empty or undefined keys
  return removeEmptyKeys(jsonLdData);
}
