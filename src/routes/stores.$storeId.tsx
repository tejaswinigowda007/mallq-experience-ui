import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";

import { CustomerLayout } from "@/components/mallq/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { stores } from "@/lib/mallq-data";

export const Route = createFileRoute("/stores/$storeId")({
  loader: ({ params }) => {
    const store = stores.find((item) => item.id === params.storeId);
    if (!store) throw notFound();
    return { store };
  },
  head: ({ loaderData }) => ({ meta: [
    { title: loaderData ? `${loaderData.store.name} – MallQ` : "Store unavailable – MallQ" },
    { name: "description", content: loaderData ? `${loaderData.store.description} Find hours, location, offers, and contact details.` : "The requested MallQ store could not be found." },
    { property: "og:title", content: loaderData ? `${loaderData.store.name} – MallQ` : "Store unavailable – MallQ" },
    { property: "og:description", content: loaderData ? `Visit ${loaderData.store.name} at MallQ.` : "The requested MallQ store could not be found." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: StoreDetailsPage,
});

function StoreDetailsPage() {
  const { store } = Route.useLoaderData();
  return <CustomerLayout>
    <section className="px-4 py-10 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="overflow-hidden rounded-2xl shadow-elevated"><img src={store.image} alt={`${store.name} storefront`} width={928} height={720} className="aspect-[4/3] h-full w-full object-cover" /></div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-wrap gap-2"><Badge variant="soft">{store.category}</Badge><Badge variant="sage">{store.status}</Badge></div>
        <h1 className="mt-5 font-display text-4xl font-extrabold md:text-5xl">{store.name}</h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">{store.description}</p>
        <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
          <Detail icon={<MapPin />} label="Location" value={store.location} />
          <Detail icon={<Clock />} label="Opening hours" value={store.hours} />
          <Detail icon={<Phone />} label="Phone" value={store.phone} />
          <Detail icon={<Mail />} label="Email" value={store.email} />
        </div>
        <Button className="mt-6 w-full sm:w-fit" size="lg"><Navigation /> Get Directions</Button>
      </div>
    </div></section>
    <section className="bg-surface-warm px-4 py-12 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl">
      <h2 className="font-display text-3xl font-extrabold">Current offers</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">{store.offers.map((offer) => <div key={offer} className="rounded-2xl border border-blush bg-card p-5 shadow-soft"><Badge variant="soft">Store offer</Badge><p className="mt-3 font-display text-lg font-bold">{offer}</p></div>)}</div>
      <Button asChild variant="outline" className="mt-6"><Link to="/stores">Back to all stores</Link></Button>
    </div></section>
  </CustomerLayout>;
}

function Detail({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return <div className="rounded-2xl border border-border bg-card p-4 shadow-soft"><div className="mb-2 flex size-8 items-center justify-center rounded-lg bg-blush-soft text-primary [&_svg]:size-4">{icon}</div><p className="text-xs font-semibold text-muted-foreground">{label}</p><p className="mt-1 font-semibold text-foreground">{value}</p></div>;
}
