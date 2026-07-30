import { Helmet } from "react-helmet-async";
import seoData from "@/data/seo.json";

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
}

export function SEOHead({
  title,
  description,
  image,
  url,
  type = "website",
}: SEOHeadProps) {
  const pageTitle = title ? `${title} | ${seoData.title}` : seoData.title;
  const pageDesc = description || seoData.description;
  const pageImage = image || seoData.openGraphImage;
  const canonicalUrl = url ? `${seoData.canonicalUrl}${url}` : seoData.canonicalUrl;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <meta name="keywords" content={seoData.keywords.join(", ")} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={pageImage} />

      {/* Google Structured Data / Knowledge Graph Mapping */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Naimur Rahman",
          "jobTitle": "Software Engineer",
          "url": "https://portfolio-naim9.vercel.app",
          "sameAs": [
            "https://github.com/naimurRahmanDurjoy",
            "https://linkedin.com/in/-naimur-rahman-"
          ]
        })}
      </script>
    </Helmet>
  );
}
