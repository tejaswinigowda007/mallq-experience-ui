import atriumImage from "@/assets/mallq-atrium.jpg";
import electronicsImage from "@/assets/mallq-electronics.jpg";
import fashionImage from "@/assets/mallq-fashion.jpg";
import foodImage from "@/assets/mallq-food.jpg";

export type StoreCategory =
  | "Fashion"
  | "Electronics"
  | "Beauty"
  | "Lifestyle"
  | "Sports"
  | "Home"
  | "Food"
  | "Entertainment";

export type Tone = "blush" | "sage" | "lavender" | "peach" | "sky";

export type Store = {
  id: string;
  name: string;
  category: StoreCategory;
  floor: string;
  location: string;
  hours: string;
  description: string;
  image: string;
  phone: string;
  email: string;
  offers: string[];
  tone: Tone;
  status: "Open" | "Closed" | "Renovation";
};

export type Offer = {
  id: string;
  title: string;
  discount: string;
  storeName: string;
  category: StoreCategory;
  validUntil: string;
  description: string;
  tone: Tone;
  status: "Active" | "Paused";
};

export type MallEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  tone: Tone;
  status: "Upcoming" | "Scheduled";
};

export type Restaurant = {
  id: string;
  name: string;
  cuisine: "Indian" | "Chinese" | "Fast Food" | "Cafe" | "Desserts";
  floor: string;
  priceRange: string;
  rating: string;
  foodType: "Vegetarian" | "Non-vegetarian" | "Both";
  description: string;
  image: string;
  tone: Tone;
};

export const storeCategories: StoreCategory[] = [
  "Fashion",
  "Electronics",
  "Beauty",
  "Lifestyle",
  "Sports",
  "Home",
  "Food",
  "Entertainment",
];

export const stores: Store[] = [
  {
    id: "aurelia-style",
    name: "Aurelia Style",
    category: "Fashion",
    floor: "Level 1",
    location: "L1 - Atrium East",
    hours: "10:00 AM - 10:00 PM",
    description: "Contemporary apparel, occasion wear, and curated accessories for everyday premium shopping.",
    image: fashionImage,
    phone: "+91 98765 42110",
    email: "hello@aureliastyle.example",
    offers: ["Flat 30% on spring edits", "Buy 2 accessories and save 15%"],
    tone: "blush",
    status: "Open",
  },
  {
    id: "nova-electronics",
    name: "Nova Electronics",
    category: "Electronics",
    floor: "Level 2",
    location: "L2 - Tech Avenue",
    hours: "10:30 AM - 9:30 PM",
    description: "Smartphones, laptops, wearables, and accessories with guided in-store product demos.",
    image: electronicsImage,
    phone: "+91 98765 42111",
    email: "support@nova.example",
    offers: ["Up to 20% on headphones", "Student laptop bundles available"],
    tone: "sky",
    status: "Open",
  },
  {
    id: "glow-lane",
    name: "Glow Lane",
    category: "Beauty",
    floor: "Level 1",
    location: "L1 - West Court",
    hours: "10:00 AM - 10:00 PM",
    description: "Skincare, fragrance, and beauty essentials with quick consultation counters.",
    image: atriumImage,
    phone: "+91 98765 42112",
    email: "care@glowlane.example",
    offers: ["Complimentary mini facial on purchases above ₹2,999"],
    tone: "lavender",
    status: "Open",
  },
  {
    id: "home-haven",
    name: "Home Haven",
    category: "Home",
    floor: "Level 3",
    location: "L3 - Home District",
    hours: "11:00 AM - 9:00 PM",
    description: "Soft furnishings, modular decor, candles, kitchenware, and gifting collections.",
    image: atriumImage,
    phone: "+91 98765 42113",
    email: "visit@homehaven.example",
    offers: ["Weekend decor sale up to 25%"],
    tone: "sage",
    status: "Open",
  },
  {
    id: "stride-sport",
    name: "Stride Sport",
    category: "Sports",
    floor: "Level 2",
    location: "L2 - North Wing",
    hours: "10:00 AM - 10:00 PM",
    description: "Performance footwear, gym apparel, sports accessories, and lifestyle athleisure.",
    image: atriumImage,
    phone: "+91 98765 42114",
    email: "team@stridesport.example",
    offers: ["Running shoes from ₹2,499"],
    tone: "sage",
    status: "Open",
  },
  {
    id: "cinema-grove",
    name: "Cinema Grove",
    category: "Entertainment",
    floor: "Level 4",
    location: "L4 - Entertainment Zone",
    hours: "9:00 AM - 12:00 AM",
    description: "Multiplex screens, lounge seating, and family-friendly entertainment experiences.",
    image: atriumImage,
    phone: "+91 98765 42115",
    email: "tickets@cinemagrove.example",
    offers: ["Student weekday ticket combo"],
    tone: "peach",
    status: "Open",
  },
];

export const offers: Offer[] = [
  {
    id: "fashion-edit",
    title: "Spring Wardrobe Edit",
    discount: "30% OFF",
    storeName: "Aurelia Style",
    category: "Fashion",
    validUntil: "Valid until 30 Sep 2026",
    description: "Seasonal apparel and accessories across selected collections.",
    tone: "blush",
    status: "Active",
  },
  {
    id: "audio-days",
    title: "Audio Days",
    discount: "20% OFF",
    storeName: "Nova Electronics",
    category: "Electronics",
    validUntil: "Valid until 05 Oct 2026",
    description: "Headphones, earbuds, and portable speakers on offer.",
    tone: "sky",
    status: "Active",
  },
  {
    id: "beauty-glow",
    title: "Glow Routine Bundle",
    discount: "15% OFF",
    storeName: "Glow Lane",
    category: "Beauty",
    validUntil: "Valid until 12 Oct 2026",
    description: "Curated skincare sets and fragrance minis.",
    tone: "lavender",
    status: "Active",
  },
  {
    id: "dine-delight",
    title: "Food Court Feast",
    discount: "Buy 1 Get 1",
    storeName: "The Garden Bowl",
    category: "Food",
    validUntil: "Valid every Wednesday",
    description: "Selected bowls, wraps, and beverages for dine-in customers.",
    tone: "sage",
    status: "Active",
  },
];

export const events: MallEvent[] = [
  {
    id: "festival-market",
    title: "Pastel Pop-Up Market",
    date: "27 Sep 2026",
    time: "4:00 PM - 9:00 PM",
    location: "Central Atrium",
    category: "Shopping",
    description: "Student entrepreneurs, handmade accessories, mini games, and weekend-only offers.",
    tone: "peach",
    status: "Upcoming",
  },
  {
    id: "music-evening",
    title: "Acoustic Courtyard Evening",
    date: "02 Oct 2026",
    time: "6:30 PM - 8:30 PM",
    location: "Food Court Stage",
    category: "Music",
    description: "A relaxed live music session for shoppers and dining guests.",
    tone: "sage",
    status: "Scheduled",
  },
  {
    id: "style-workshop",
    title: "Capsule Styling Workshop",
    date: "06 Oct 2026",
    time: "5:00 PM - 6:00 PM",
    location: "Level 1 Lounge",
    category: "Fashion",
    description: "Quick styling ideas from participating fashion stores.",
    tone: "blush",
    status: "Scheduled",
  },
];

export const restaurants: Restaurant[] = [
  {
    id: "garden-bowl",
    name: "The Garden Bowl",
    cuisine: "Indian",
    floor: "Level 3",
    priceRange: "₹₹",
    rating: "4.6",
    foodType: "Vegetarian",
    description: "Fresh thalis, bowls, chaats, and regional comfort food.",
    image: foodImage,
    tone: "sage",
  },
  {
    id: "wok-lotus",
    name: "Wok Lotus",
    cuisine: "Chinese",
    floor: "Level 3",
    priceRange: "₹₹",
    rating: "4.4",
    foodType: "Both",
    description: "Noodles, dim sum, rice bowls, and quick wok specials.",
    image: foodImage,
    tone: "sky",
  },
  {
    id: "peach-cafe",
    name: "Peach Cafe",
    cuisine: "Cafe",
    floor: "Level 1",
    priceRange: "₹₹₹",
    rating: "4.7",
    foodType: "Vegetarian",
    description: "Coffee, brunch plates, desserts, and quiet seating near the atrium.",
    image: foodImage,
    tone: "peach",
  },
  {
    id: "quick-bite",
    name: "Quick Bite Co.",
    cuisine: "Fast Food",
    floor: "Level 3",
    priceRange: "₹",
    rating: "4.2",
    foodType: "Both",
    description: "Burgers, wraps, fries, and quick combos for busy shoppers.",
    image: foodImage,
    tone: "blush",
  },
];

export const parkingStats = {
  total: 1200,
  available: 438,
  occupied: 762,
  twoWheeler: 320,
  fourWheeler: 880,
};

export const mockProfile = {
  name: "Tejaswini Gowda",
  email: "tejaswini.mallq@example.com",
  memberSince: "Sep 2026",
  favoriteStores: ["Aurelia Style", "Nova Electronics", "Peach Cafe"],
  savedOffers: ["Spring Wardrobe Edit", "Audio Days"],
  eventRegistrations: ["Pastel Pop-Up Market"],
};

export const adminStats = [
  { label: "Total Users", value: "12,480", detail: "Registered customers", tone: "blush" as Tone },
  { label: "Total Stores", value: "168", detail: "Active directory listings", tone: "sage" as Tone },
  { label: "Active Offers", value: "42", detail: "Visible to customers", tone: "peach" as Tone },
  { label: "Upcoming Events", value: "9", detail: "Scheduled in mall calendar", tone: "lavender" as Tone },
  { label: "Parking Occupancy", value: "64%", detail: "Based on mock parking data", tone: "sky" as Tone },
];

export const footfallData = [
  { label: "Mon", value: "18.2k", height: "h-20", tone: "bg-chart-2" },
  { label: "Tue", value: "20.1k", height: "h-24", tone: "bg-chart-4" },
  { label: "Wed", value: "22.4k", height: "h-28", tone: "bg-chart-1" },
  { label: "Thu", value: "21.7k", height: "h-26", tone: "bg-chart-3" },
  { label: "Fri", value: "28.5k", height: "h-36", tone: "bg-chart-5" },
  { label: "Sat", value: "36.8k", height: "h-44", tone: "bg-chart-1" },
  { label: "Sun", value: "33.6k", height: "h-40", tone: "bg-chart-2" },
];

export const categoryDistribution = [
  { label: "Fashion", value: "28%", width: "w-[72%]", tone: "bg-blush" },
  { label: "Food", value: "22%", width: "w-[58%]", tone: "bg-sage" },
  { label: "Electronics", value: "17%", width: "w-[45%]", tone: "bg-sky" },
  { label: "Lifestyle", value: "14%", width: "w-[36%]", tone: "bg-peach" },
  { label: "Entertainment", value: "11%", width: "w-[30%]", tone: "bg-lavender" },
];

export const recentActivities = [
  "Nova Electronics updated store hours",
  "Pastel Pop-Up Market event added",
  "Parking mock feed refreshed for UI testing",
  "Aurelia Style offer marked active",
];

export const users = [
  { name: "Ananya Rao", email: "ananya@example.com", status: "Active", registered: "12 Sep 2026" },
  { name: "Rahul Nair", email: "rahul@example.com", status: "Active", registered: "14 Sep 2026" },
  { name: "Mira Shah", email: "mira@example.com", status: "Inactive", registered: "18 Sep 2026" },
  { name: "Dev Patel", email: "dev@example.com", status: "Active", registered: "20 Sep 2026" },
];
