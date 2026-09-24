import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { OfferCard } from "@/components/mallq/Cards";
import { EmptyState, FilterBar, PageHeader, SearchBar } from "@/components/mallq/Controls";
import { CustomerLayout } from "@/components/mallq/Navigation";
import { offers, storeCategories } from "@/lib/mallq-data";

export const Route = createFileRoute("/offers")({ head: () => ({ meta: [
  { title: "Offers & Savings – MallQ" }, { name: "description", content: "Browse current MallQ discounts and store offers." },
  { property: "og:title", content: "Offers & Savings – MallQ" }, { property: "og:description", content: "Discover current fashion, electronics, beauty, and dining offers at MallQ." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: OffersPage });

function OffersPage() {
  const [query, setQuery] = useState(""); const [category, setCategory] = useState("All");
  const filtered = useMemo(() => offers.filter((offer) => (category === "All" || offer.category === category) && `${offer.title} ${offer.storeName}`.toLowerCase().includes(query.toLowerCase())), [query, category]);
  return <CustomerLayout><PageHeader eyebrow="MallQ savings" title="Offers worth a detour" description="Browse active mock offers across MallQ and save the ones you want to revisit." />
    <section className="px-4 py-10 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SearchBar value={query} onChange={setQuery} placeholder="Search offers or stores" className="max-w-2xl" /><div className="mt-6"><FilterBar label="Category" options={["All", ...storeCategories]} active={category} onSelect={setCategory} /></div>
    {filtered.length ? <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{filtered.map((offer) => <OfferCard key={offer.id} offer={offer} />)}</div> : <div className="mt-8"><EmptyState title="No offers found" description="Try another category or search term." /></div>}</div></section></CustomerLayout>;
}
