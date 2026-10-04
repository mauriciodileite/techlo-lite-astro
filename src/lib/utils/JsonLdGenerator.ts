/**
 * JSON-LD Generator
 * Generates appropriate JSON-LD data based on the page type and provided content
 * Generates JSON-LD data that search engines like Google, Bing, and DuckDuckGo can use to better understand the content of the page.
 * This can improve the page's visibility in search engine results and provide users with additional information about the page.
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

  // Rich Author Profile (Maurício Leite)
  const authorPerson = {
    "@type": "Person",
    name: "Maurício Leite",
    jobTitle: "Fundador & Consultor em Marketing de Performance e IA",
    worksFor: {
      "@type": "Organization",
      name: "ML Consultoria e Treinamento",
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
    url: trailingSlashChecker(Astro.url.origin),
    sameAs: social.main.filter((item: any) => item.enable).map((item: any) => item.url),
  };

  // Generate JSON-LD data dynamically based on page type
  let jsonLdData: Record<string, any> = {
    "@context": "https://schema.org",
  };

  switch (pageType) {
    case "post":
    case "article":
    case "blog":
      jsonLdData["@type"] = "BlogPosting";
      jsonLdData.headline = title;
      jsonLdData.name = title;
      jsonLdData.description = description;
      if (image) {
        jsonLdData.image = [absoluteUrl(image, Astro)];
      }
      jsonLdData.url = canonical;
      if (lang) {
        jsonLdData.inLanguage = lang;
      }
      if (content.datePublished) {
        jsonLdData.datePublished = new Date(content.datePublished).toISOString();
      }
      const lastModified = content.dateModified || content.datePublished;
      if (lastModified) {
        jsonLdData.dateModified = new Date(lastModified).toISOString();
      }
      jsonLdData.author = authorPerson;
      jsonLdData.publisher = {
        "@type": "Organization",
        name: "ML Consultoria e Treinamento",
        alternateName: "Maurício Leite",
        url: trailingSlashChecker(Astro.url.origin),
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl(config.site.logo, Astro),
        },
      };
      jsonLdData.mainEntityOfPage = {
        "@type": "WebPage",
        "@id": canonical,
      };
      if (content.categories && content.categories.length > 0) {
        jsonLdData.articleSection = content.categories;
      }
      break;

    default:
      jsonLdData["@type"] = "WebPage";
      jsonLdData.name = title;
      jsonLdData.description = description;
      jsonLdData.image = image ? absoluteUrl(image, Astro) : undefined;
      jsonLdData.url = canonical;

      if (lang) {
        jsonLdData.inLanguage = lang;
      }
  }

  // Add site metadata to `isPartOf` of jsonLdData
  const siteTitle =
    config.site.title +
    (config.site.tagline &&
      (config.site.taglineSeparator || " - ") + config.site.tagline);

  jsonLdData["isPartOf"] = {
    "@type": "WebSite",
    name: siteTitle,
    description: config.site.description,
    url: trailingSlashChecker(Astro.url.origin),
  };

  // Add alternate languages if provided
  if (alternateLangs.length > 0) {
    jsonLdData.alternateLanguage = alternateLangs
      .filter((alt: any) => Astro.currentLocale !== alt.languageCode)
      .map((alt: any) => ({
        "@type": "WebPage",
        url: getLocaleUrlCTM(canonical, alt.languageCode),
        inLanguage: alt.languageCode,
      }));
  }

  // Add `publisher` if not already set
  if (!jsonLdData.publisher) {
    jsonLdData.publisher = {
      "@type": "Organization",
      name: "ML Consultoria e Treinamento",
      alternateName: config.seo.author || "Maurício Leite",
      url: trailingSlashChecker(Astro.url.origin),
      sameAs: social.main.filter((item: any) => item.enable).map((item: any) => item.url),
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(config.site.logo, Astro),
      },
    };
  }

  // Utility to remove empty or undefined keys
  return removeEmptyKeys(jsonLdData);
}
