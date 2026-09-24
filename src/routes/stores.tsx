import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { StoreCard } from "@/components/mallq/Cards";
import { EmptyState, FilterBar, PageHeader, SearchBar } from "@/components/mallq/Controls";
import { CustomerLayout } from "@/components/mallq/Navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { storeCategories, stores } from "@/lib/mallq-data";

export const Route = createFileRoute("/stores")({
  head: () => ({ meta: [
    { title: "Store Directory – MallQ" },
    { name: "description", content: "Search and browse the MallQ store directory by category and floor." },
    { property: "og:title", content: "Store Directory – MallQ" },
    { property: "og:description", content: "Find fashion, electronics, beauty, lifestyle, food, and entertainment stores at MallQ." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: StoresPage,
});

function StoresPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const filtered = useMemo(() => {
    const result = stores.filter((store) => (category === "All" || store.category === category) && `${store.name} ${store.category} ${store.description}`.toLowerCase().includes(query.toLowerCase()));
    return [...result].sort((a, b) => sort === "name" ? a.name.localeCompare(b.name) : sort === "floor" ? a.floor.localeCompare(b.floor) : 0);
  }, [category, query, sort]);

  return <CustomerLayout>
    <PageHeader eyebrow="Mall directory" title="Find your next stop" description="Search every corner of MallQ, then filter by the kind of shopping experience you want." />
    <section className="px-4 py-10 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl">
      <div className="grid gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft md:grid-cols-[1fr_auto] md:items-center">
        <SearchBar value={query} onChange={setQuery} placeholder="Search stores or categories" />
        <Select value={sort} onValueChange={setSort}><SelectTrigger className="h-11 w-full rounded-xl bg-surface md:w-48"><SelectValue placeholder="Sort stores" /></SelectTrigger><SelectContent><SelectItem value="featured">Featured first</SelectItem><SelectItem value="name">Name A-Z</SelectItem><SelectItem value="floor">Floor</SelectItem></SelectContent></Select>
      </div>
      <div className="mt-6"><FilterBar label="Category" options={["All", ...storeCategories]} active={category} onSelect={setCategory} /></div>
      {filtered.length ? <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map((store) => <StoreCard key={store.id} store={store} />)}</div> : <div className="mt-8"><EmptyState title="No stores found" description="Try a different search term or category." /></div>}
    </div></section>
  </CustomerLayout>;
}
