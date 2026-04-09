export interface Agent {
  slug: string;
  name: string;
  title: string;
  bio: string;
  specialties: string[];
  email: string;
  phone: string;
  image: string;
  calendarUrl?: string;
}

export const AGENTS: Agent[] = [
  {
    slug: "veronica-ramos",
    name: "Veronica Ramos",
    title: "Broker / Owner",
    bio: "With nearly two decades of experience in the Redlands real estate market, Veronica founded Citrus & Park to provide a more personal, community-focused approach to buying and selling homes. Her deep knowledge of the Inland Empire and commitment to client satisfaction has made her one of the most trusted names in local real estate.\n\nVeronica specializes in luxury properties and first-time buyers, bringing the same level of dedication and attention to detail to every transaction regardless of price point. When she's not helping clients, you'll find her exploring Redlands' historic neighborhoods and supporting local businesses.",
    specialties: ["Luxury Homes", "First-Time Buyers", "Investment Properties"],
    email: "veronica@citrusandpark.com",
    phone: "(909) 705-5275",
    image: "/images/agents/veronica-ramos.jpg",
  },
  {
    slug: "renee-stallone",
    name: "Renee Stallone",
    title: "Real Estate Agent",
    bio: "Renee brings passion and dedication to every client relationship. Known for her attention to detail and tireless work ethic, she helps buyers and sellers navigate the market with confidence. Whether you're looking for your first home or downsizing, Renee makes the process seamless.\n\nWith deep roots in the Inland Empire, Renee has an intimate knowledge of Highland, Yucaipa, Loma Linda, and the surrounding communities. Her clients appreciate her honest communication, quick response times, and genuine care for their well-being throughout the transaction.",
    specialties: ["Residential Sales", "Relocations", "Market Analysis"],
    email: "renee@citrusandpark.com",
    phone: "(909) 705-5275",
    image: "/images/agents/renee-stallone.jpg",
  },
  {
    slug: "elijah",
    name: "Elijah",
    title: "Real Estate Agent",
    bio: "Elijah is a dedicated real estate professional committed to helping clients achieve their property goals in the Inland Empire. With a keen eye for value and a passion for the local market, he provides exceptional guidance for both buyers and sellers.\n\nHis energetic approach and strong negotiation skills make him an invaluable partner in any real estate transaction. Elijah takes pride in building lasting relationships and ensuring every client feels supported from start to finish.",
    specialties: ["Buyer Representation", "Negotiations", "New Construction"],
    email: "elijah@citrusandpark.com",
    phone: "(909) 705-5275",
    image: "/images/agents/elijah.jpg",
  },
  {
    slug: "guy",
    name: "Guy",
    title: "Real Estate Agent",
    bio: "Guy brings a wealth of local knowledge and a client-first mentality to every transaction. His deep understanding of the Redlands and Inland Empire markets allows him to provide insightful advice and strategic guidance.\n\nWhether you're buying your first home or investing in property, Guy's calm, professional approach ensures a smooth experience. He is committed to making the process transparent and stress-free for every client he serves.",
    specialties: ["Investment Properties", "Market Analysis", "Property Valuation"],
    email: "guy@citrusandpark.com",
    phone: "(909) 705-5275",
    image: "/images/agents/guy.jpg",
  },
  {
    slug: "jennifer",
    name: "Jennifer",
    title: "Real Estate Agent",
    bio: "Jennifer is passionate about helping families find their perfect home. Her warm, approachable style and thorough market knowledge make her a go-to agent for buyers and sellers throughout the Inland Empire.\n\nWith a background in customer service and a genuine love for the Redlands community, Jennifer goes above and beyond to ensure her clients' needs are met. She specializes in family homes and takes pride in matching people with properties that truly fit their lifestyle.",
    specialties: ["Family Homes", "First-Time Buyers", "Staging Consultation"],
    email: "jennifer@citrusandpark.com",
    phone: "(909) 705-5275",
    image: "/images/agents/jennifer.jpg",
  },
];

export function getAgentBySlug(slug: string): Agent | undefined {
  return AGENTS.find((a) => a.slug === slug);
}
