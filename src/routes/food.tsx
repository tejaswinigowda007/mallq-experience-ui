import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { RestaurantCard } from "@/components/mallq/Cards";
import { FilterBar, PageHeader } from "@/components/mallq/Controls";
import { CustomerLayout } from "@/components/mallq/Navigation";
import { restaurants } from "@/lib/mallq-data";

export const Route = createFileRoute("/food")({ head: () => ({ meta: [
  { title: "Food Court & Dining – MallQ" }, { name: "description", content: "Explore MallQ restaurants by cuisine, rating, floor, and price range." },
  { property: "og:title", content: "Food Court & Dining – MallQ" }, { property: "og:description", content: "Find Indian, Chinese, fast food, cafe, and dessert options at MallQ." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: FoodPage });
function FoodPage() { const [cuisine, setCuisine] = useState("All"); const filtered = useMemo(() => restaurants.filter((item) => cuisine === "All" || item.cuisine === cuisine), [cuisine]); return <CustomerLayout><PageHeader eyebrow="Food & dining" title="Find your favourite table" description="Compare cuisine, price, ratings, and food preferences before you order." /><section className="px-4 py-10 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><FilterBar label="Cuisine" options={["All", "Indian", "Chinese", "Fast Food", "Cafe", "Desserts"]} active={cuisine} onSelect={setCuisine} /><div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{filtered.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)}</div></div></section></CustomerLayout>; }
