export const SITE_NAME = "Citrus & Park";
export const SITE_TAGLINE = "Rooted in Redlands. Growing Your Future.";
export const SITE_DESCRIPTION =
  "Citrus & Park is a premier real estate agency in Redlands, California. Since 2006, we've been helping families buy, sell, and find their dream homes in the Inland Empire.";

export const BUSINESS_INFO = {
  name: "Citrus & Park Real Estate",
  address: {
    street: "330 N 6th St, Suite 203",
    city: "Redlands",
    state: "CA",
    zip: "92374",
    full: "330 N 6th St, Suite 203, Redlands, CA 92374",
  },
  phone: "(909) 705-5275",
  phoneHref: "tel:+19097055275",
  email: "veronica@citrusandpark.com",
  coordinates: {
    lat: 34.0556,
    lng: -117.1825,
  },
  foundedYear: 2006,
  hours: {
    weekdays: "9:00 AM – 6:00 PM",
    saturday: "10:00 AM – 4:00 PM",
    sunday: "By Appointment",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Listings", href: "/listings" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/citrusandpark",
  instagram: "https://www.instagram.com/citrusandpark",
} as const;

export const SERVICES = [
  {
    title: "Buy",
    description:
      "Find your dream home in Redlands and the surrounding Inland Empire. We'll guide you through every step of the buying process.",
    icon: "Home" as const,
    href: "/services#buying",
  },
  {
    title: "Sell",
    description:
      "Get the best price for your property with our proven marketing strategies and deep local market knowledge.",
    icon: "DollarSign" as const,
    href: "/services#selling",
  },
  {
    title: "Rent",
    description:
      "Whether you're looking for a rental or need help with property management, we've got you covered.",
    icon: "Key" as const,
    href: "/services#renting",
  },
] as const;

export const NEIGHBORHOODS = [
  {
    name: "Redlands",
    slug: "redlands",
    description: "Historic charm meets modern living in the jewel of the Inland Empire.",
  },
  {
    name: "Loma Linda",
    slug: "loma-linda",
    description: "A health-conscious community known for longevity and quality of life.",
  },
  {
    name: "Highland",
    slug: "highland",
    description: "Affordable living with mountain views and growing amenities.",
  },
  {
    name: "Yucaipa",
    slug: "yucaipa",
    description: "Small-town charm with scenic landscapes and outdoor recreation.",
  },
  {
    name: "Mentone",
    slug: "mentone",
    description: "A peaceful, rural community nestled at the base of the San Bernardino Mountains.",
  },
  {
    name: "San Bernardino",
    slug: "san-bernardino",
    description: "The county seat with diverse neighborhoods and urban convenience.",
  },
] as const;
