import type { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION, BUSINESS_INFO } from "./constants";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.citrusandpark.com";

export function createMetadata({
  title,
  description,
  path = "",
  image,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Real Estate in Redlands, CA`;
  const desc = description || SITE_DESCRIPTION;
  const url = `${BASE_URL}${path}`;
  const ogImage = image || `${BASE_URL}/images/og/default.jpg`;

  return {
    title: fullTitle,
    description: desc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [ogImage],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: BUSINESS_INFO.name,
    image: `${BASE_URL}/images/og/default.jpg`,
    url: BASE_URL,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.coordinates.lat,
      longitude: BUSINESS_INFO.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Redlands" },
      { "@type": "City", name: "Loma Linda" },
      { "@type": "City", name: "Highland" },
      { "@type": "City", name: "Yucaipa" },
      { "@type": "City", name: "Mentone" },
      { "@type": "City", name: "San Bernardino" },
    ],
    foundingDate: "2006",
    priceRange: "$$",
  };
}
