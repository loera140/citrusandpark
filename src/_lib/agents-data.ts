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
];

export function getAgentBySlug(slug: string): Agent | undefined {
  return AGENTS.find((a) => a.slug === slug);
}
