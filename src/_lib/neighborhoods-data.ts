export interface Neighborhood {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  medianPrice: string;
  population: string;
  walkScore: number;
  highlights: string[];
  schools: string[];
  amenities: string[];
}

export const NEIGHBORHOOD_DATA: Neighborhood[] = [
  {
    slug: "redlands",
    name: "Redlands",
    description: "Historic charm meets modern living in the jewel of the Inland Empire.",
    longDescription:
      "Redlands is a historic city nestled at the base of the San Bernardino Mountains, known for its tree-lined streets, Victorian architecture, and vibrant downtown. Founded in 1888, the city has maintained its small-town charm while offering modern amenities, excellent schools, and a thriving cultural scene. The University of Redlands adds a youthful energy, while the historic Smiley Library and Lincoln Memorial Shrine provide cultural depth. Residents enjoy the annual Redlands Bowl summer concerts, the Thursday Night Market, and easy access to mountain recreation.",
    medianPrice: "$580,000",
    population: "73,000",
    walkScore: 42,
    highlights: [
      "Historic downtown with shops and restaurants",
      "University of Redlands campus",
      "Smiley Library & Lincoln Memorial Shrine",
      "Annual Redlands Bowl concerts (free admission)",
      "Close to San Bernardino National Forest",
      "Excellent citrus heritage and parks",
    ],
    schools: [
      "Redlands Unified School District",
      "Redlands High School",
      "Citrus Valley High School",
      "University of Redlands",
    ],
    amenities: [
      "Redlands Community Hospital",
      "Redlands Mall area shopping",
      "Prospect Park & Sylvan Park",
      "San Timoteo Canyon trails",
      "ESRI (world HQ)",
      "Easy I-10 freeway access",
    ],
  },
  {
    slug: "loma-linda",
    name: "Loma Linda",
    description: "A health-conscious community known for longevity and quality of life.",
    longDescription:
      "Loma Linda is one of the world's five Blue Zones — regions where people live measurably longer lives. Home to Loma Linda University and its renowned medical center, this community prioritizes health, wellness, and quality of life. The city offers a peaceful residential atmosphere with well-maintained neighborhoods, excellent healthcare access, and a strong sense of community. Residents enjoy proximity to both urban amenities and mountain recreation.",
    medianPrice: "$475,000",
    population: "24,000",
    walkScore: 35,
    highlights: [
      "Blue Zone — one of five worldwide",
      "Loma Linda University Medical Center",
      "Health-focused community lifestyle",
      "Peaceful residential neighborhoods",
      "Close to mountain recreation",
      "Strong sense of community",
    ],
    schools: [
      "Loma Linda Academy",
      "Loma Linda University",
      "Redlands Unified School District",
    ],
    amenities: [
      "Loma Linda University Medical Center",
      "Hulda Crooks Park",
      "Veterans Affairs hospital",
      "Close to I-10 and I-215",
    ],
  },
  {
    slug: "highland",
    name: "Highland",
    description: "Affordable living with mountain views and growing amenities.",
    longDescription:
      "Highland offers some of the most affordable housing in the Inland Empire while providing stunning views of the San Bernardino Mountains. The city has seen significant growth and development in recent years, with new shopping centers, restaurants, and community facilities. Highland is ideal for families seeking space, value, and a suburban lifestyle with easy access to both mountain recreation and urban conveniences.",
    medianPrice: "$420,000",
    population: "56,000",
    walkScore: 28,
    highlights: [
      "Affordable home prices",
      "Panoramic mountain views",
      "Growing retail and dining options",
      "Family-friendly neighborhoods",
      "Easy access to San Bernardino Mountains",
      "New community developments",
    ],
    schools: [
      "San Bernardino City Unified School District",
      "Pacific High School",
      "Arroyo Verde Elementary",
    ],
    amenities: [
      "Highland Community Park",
      "San Manuel Casino nearby",
      "Mountain biking & hiking trails",
      "Close to I-210 freeway",
    ],
  },
  {
    slug: "yucaipa",
    name: "Yucaipa",
    description: "Small-town charm with scenic landscapes and outdoor recreation.",
    longDescription:
      "Yucaipa is a charming foothill community known for its apple orchards, scenic beauty, and family-friendly atmosphere. With stunning views of the San Bernardino Mountains and a slower pace of life, Yucaipa attracts those looking to escape the hustle of larger cities while staying connected to Inland Empire amenities. The annual Apple Harvest Festival, local wineries, and abundant hiking trails make it a haven for outdoor enthusiasts.",
    medianPrice: "$510,000",
    population: "54,000",
    walkScore: 22,
    highlights: [
      "Apple orchards and local wineries",
      "Annual Apple Harvest Festival",
      "Stunning mountain and valley views",
      "Slower pace of life",
      "Abundant hiking and nature trails",
      "Strong community events calendar",
    ],
    schools: [
      "Yucaipa-Calimesa Joint Unified School District",
      "Yucaipa High School",
      "Green Valley High School",
    ],
    amenities: [
      "Yucaipa Regional Park",
      "Wildwood Canyon State Park",
      "Local wineries and orchards",
      "Yucaipa Performing Arts Center",
    ],
  },
  {
    slug: "mentone",
    name: "Mentone",
    description: "A peaceful, rural community nestled at the base of the San Bernardino Mountains.",
    longDescription:
      "Mentone is a small, unincorporated community between Redlands and Yucaipa that offers a truly rural lifestyle at the doorstep of the San Bernardino Mountains. With larger lot sizes, equestrian properties, and a tight-knit community feel, Mentone is perfect for those seeking space, privacy, and natural beauty. Despite its rural character, Mentone is just minutes from the amenities of Redlands and Yucaipa.",
    medianPrice: "$450,000",
    population: "10,000",
    walkScore: 15,
    highlights: [
      "Rural, peaceful atmosphere",
      "Larger lot sizes and acreage",
      "Equestrian-friendly properties",
      "Mountain gateway location",
      "Tight-knit community",
      "Minutes from Redlands amenities",
    ],
    schools: ["Redlands Unified School District", "Mentone Elementary"],
    amenities: [
      "Mentone Beach Park",
      "Gateway to Highway 38 & mountains",
      "Local shops and eateries",
      "Proximity to Mill Creek Canyon",
    ],
  },
  {
    slug: "san-bernardino",
    name: "San Bernardino",
    description: "The county seat with diverse neighborhoods and urban convenience.",
    longDescription:
      "As the county seat and largest city in San Bernardino County, San Bernardino offers diverse neighborhoods ranging from historic districts to new developments. The city provides urban conveniences including major shopping, dining, entertainment venues, and cultural institutions. With the most affordable entry points in the region and significant revitalization efforts underway, San Bernardino presents opportunities for both homebuyers and investors.",
    medianPrice: "$380,000",
    population: "222,000",
    walkScore: 38,
    highlights: [
      "Most affordable prices in the region",
      "County seat with full urban amenities",
      "Diverse neighborhood options",
      "Ongoing revitalization efforts",
      "Major employment centers",
      "Cal State San Bernardino",
    ],
    schools: [
      "San Bernardino City Unified School District",
      "Cal State San Bernardino",
      "San Bernardino Valley College",
    ],
    amenities: [
      "San Manuel Amphitheater",
      "Glen Helen Regional Park",
      "San Bernardino International Airport",
      "NOS Events Center",
    ],
  },
];

export function getNeighborhoodBySlug(slug: string): Neighborhood | undefined {
  return NEIGHBORHOOD_DATA.find((n) => n.slug === slug);
}
