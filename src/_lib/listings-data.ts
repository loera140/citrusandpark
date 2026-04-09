export interface Listing {
  id: number;
  slug: string;
  title: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  lotSize: string;
  yearBuilt: number;
  status: "For Sale" | "New" | "Pending" | "Sold";
  type: "Single Family" | "Condo" | "Townhouse" | "Multi-Family";
  description: string;
  features: string[];
  images: string[];
  agent: string;
  neighborhood: string;
  virtualTourUrl?: string;
}

export const LISTINGS: Listing[] = [
  {
    id: 1,
    slug: "125-cajon-st-redlands",
    title: "125 Cajon St",
    address: "125 Cajon St",
    city: "Redlands",
    state: "CA",
    zip: "92373",
    price: 650000,
    beds: 4,
    baths: 3,
    sqft: 2400,
    lotSize: "0.25 acres",
    yearBuilt: 1925,
    status: "For Sale",
    type: "Single Family",
    description:
      "Charming Craftsman home in the heart of historic Redlands. This beautifully restored 4-bedroom residence features original hardwood floors, a chef's kitchen with modern appliances, and a spacious backyard with mature citrus trees. Walking distance to downtown shops, restaurants, and the University of Redlands.",
    features: [
      "Hardwood Floors",
      "Central A/C",
      "Updated Kitchen",
      "Fireplace",
      "Covered Patio",
      "Citrus Trees",
      "2-Car Garage",
      "Laundry Room",
    ],
    images: ["/images/listings/home-1.jpg"],
    agent: "Veronica Ramos",
    neighborhood: "redlands",
  },
  {
    id: 2,
    slug: "800-orange-ave-redlands",
    title: "800 Orange Ave",
    address: "800 Orange Ave",
    city: "Redlands",
    state: "CA",
    zip: "92374",
    price: 525000,
    beds: 3,
    baths: 2,
    sqft: 1800,
    lotSize: "0.18 acres",
    yearBuilt: 1960,
    status: "For Sale",
    type: "Single Family",
    description:
      "Mid-century ranch-style home on a tree-lined street. Freshly painted interior, new roof, and updated bathrooms. The open floor plan connects the living room to a bright, airy kitchen. Large backyard perfect for entertaining, with room for a pool.",
    features: [
      "New Roof",
      "Updated Bathrooms",
      "Open Floor Plan",
      "Large Backyard",
      "Central A/C",
      "1-Car Garage",
      "Ceiling Fans",
      "Tile Flooring",
    ],
    images: ["/images/listings/home-2.jpg"],
    agent: "Renee Stallone",
    neighborhood: "redlands",
  },
  {
    id: 3,
    slug: "1450-garden-st-redlands",
    title: "1450 Garden St",
    address: "1450 Garden St",
    city: "Redlands",
    state: "CA",
    zip: "92373",
    price: 780000,
    beds: 5,
    baths: 3,
    sqft: 3200,
    lotSize: "0.35 acres",
    yearBuilt: 2005,
    status: "New",
    type: "Single Family",
    description:
      "Stunning two-story home in North Redlands with mountain views. Grand entrance with vaulted ceilings, gourmet kitchen with granite counters and stainless steel appliances. Master suite features a spa-like bathroom and walk-in closet. Resort-style backyard with pool, spa, and built-in BBQ.",
    features: [
      "Pool & Spa",
      "Mountain Views",
      "Gourmet Kitchen",
      "Vaulted Ceilings",
      "Walk-in Closets",
      "Built-in BBQ",
      "3-Car Garage",
      "Smart Home System",
    ],
    images: ["/images/listings/home-3.jpg"],
    agent: "Veronica Ramos",
    neighborhood: "redlands",
  },
  {
    id: 4,
    slug: "220-palm-ln-loma-linda",
    title: "220 Palm Ln",
    address: "220 Palm Ln",
    city: "Loma Linda",
    state: "CA",
    zip: "92354",
    price: 460000,
    beds: 3,
    baths: 2,
    sqft: 1600,
    lotSize: "0.15 acres",
    yearBuilt: 1978,
    status: "For Sale",
    type: "Single Family",
    description:
      "Well-maintained home in a quiet Loma Linda neighborhood near the university and medical center. Recent upgrades include new flooring, fresh paint, and energy-efficient windows. Cozy living room with fireplace, private backyard with fruit trees.",
    features: [
      "New Flooring",
      "Energy-Efficient Windows",
      "Fireplace",
      "Fruit Trees",
      "Central A/C",
      "2-Car Garage",
      "Near Medical Center",
      "Cul-de-sac",
    ],
    images: ["/images/listings/home-4.jpg"],
    agent: "Renee Stallone",
    neighborhood: "loma-linda",
  },
  {
    id: 5,
    slug: "3100-highland-ave",
    title: "3100 Highland Ave",
    address: "3100 Highland Ave",
    city: "Highland",
    state: "CA",
    zip: "92346",
    price: 395000,
    beds: 3,
    baths: 2,
    sqft: 1450,
    lotSize: "0.12 acres",
    yearBuilt: 1990,
    status: "For Sale",
    type: "Single Family",
    description:
      "Affordable family home in Highland with mountain views. Open kitchen with breakfast bar, spacious family room, and low-maintenance yard. Close to schools, parks, and shopping. Great first-time buyer opportunity.",
    features: [
      "Mountain Views",
      "Breakfast Bar",
      "Family Room",
      "Low-Maintenance Yard",
      "Central A/C",
      "2-Car Garage",
      "Near Schools",
      "Corner Lot",
    ],
    images: ["/images/listings/home-5.jpg"],
    agent: "Veronica Ramos",
    neighborhood: "highland",
  },
  {
    id: 6,
    slug: "550-yucaipa-blvd",
    title: "550 Yucaipa Blvd",
    address: "550 Yucaipa Blvd",
    city: "Yucaipa",
    state: "CA",
    zip: "92399",
    price: 590000,
    beds: 4,
    baths: 2,
    sqft: 2100,
    lotSize: "0.30 acres",
    yearBuilt: 2010,
    status: "New",
    type: "Single Family",
    description:
      "Beautiful single-story home in scenic Yucaipa with panoramic valley views. Open concept living with a modern kitchen, quartz countertops, and custom cabinetry. Expansive lot with mature landscaping, covered patio, and RV parking.",
    features: [
      "Valley Views",
      "Single Story",
      "Quartz Countertops",
      "Custom Cabinetry",
      "RV Parking",
      "Covered Patio",
      "3-Car Garage",
      "Mature Landscaping",
    ],
    images: ["/images/listings/home-6.jpg"],
    agent: "Renee Stallone",
    neighborhood: "yucaipa",
  },
];

export function getListingBySlug(slug: string): Listing | undefined {
  return LISTINGS.find((l) => l.slug === slug);
}

export function getListingsByNeighborhood(neighborhood: string): Listing[] {
  return LISTINGS.filter((l) => l.neighborhood === neighborhood);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}
