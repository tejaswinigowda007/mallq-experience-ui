import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Car, ChevronRight, Sparkles, Store, Tag, Utensils } from "lucide-react";

import atriumImage from "@/assets/mallq-atrium.jpg";
import foodImage from "@/assets/mallq-food.jpg";
import { EventCard, OfferCard, StoreCard } from "@/components/mallq/Cards";
import { CustomerLayout } from "@/components/mallq/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { events, offers, parkingStats, storeCategories, stores } from "@/lib/mallq-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MallQ – Your Smart Mall Experience" },
      { name: "description", content: "Discover stores, offers, events, food, and parking information with MallQ." },
      { property: "og:title", content: "MallQ – Your Smart Mall Experience" },
      { property: "og:description", content: "Everything you love, all in one place. Explore MallQ stores, offers, events, dining, and parking." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <CustomerLayout>
      <section className="relative min-h-[72vh] overflow-hidden">
        <img src={atriumImage} alt="MallQ premium shopping mall atrium" width={1280} height={912} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/72" />
        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="soft"><Sparkles className="mr-1 size-3" /> Your Smart Mall Experience</Badge>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-tight text-foreground md:text-7xl">
              Everything You Love, All in One Place.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/80">
              Discover stores, current offers, upcoming events, great food, and clear parking information before you arrive.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="premium" size="lg"><Link to="/stores">Explore the Mall <ArrowRight /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/offers">View Offers</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Mall directory" title="Featured stores" description="A curated mix of fashion, technology, beauty, lifestyle, and more." href="/stores" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{stores.slice(0, 3).map((store) => <StoreCard key={store.id} store={store} />)}</div>
        </div>
      </section>

      <section className="bg-surface-warm px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Browse your way" title="Popular categories" description="Go straight to what you need today." />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {storeCategories.map((category, index) => (
              <Link key={category} to="/stores" className={index % 3 === 0 ? "rounded-2xl border border-blush bg-blush-soft p-4 text-center shadow-soft" : index % 3 === 1 ? "rounded-2xl border border-sage bg-sage-soft p-4 text-center shadow-soft" : "rounded-2xl border border-lavender bg-lavender-soft p-4 text-center shadow-soft"}>
                <Store className="mx-auto mb-3 size-5 text-primary" aria-hidden="true" />
                <span className="text-sm font-bold">{category}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Save while you shop" title="Current offers" description="Fresh offers from stores across MallQ." href="/offers" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{offers.map((offer) => <OfferCard key={offer.id} offer={offer} />)}</div>
        </div>
      </section>

      <section className="bg-surface-cool px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Mall calendar" title="Upcoming events" description="Make your next visit more memorable." href="/events" />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">{events.map((event) => <EventCard key={event.id} event={event} />)}</div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-elevated"><img src={foodImage} alt="MallQ food court dining area" loading="lazy" width={928} height={720} className="aspect-[4/3] h-full w-full object-cover" /></div>
          <div>
            <Badge variant="sage"><Utensils className="mr-1 size-3" /> Food & dining</Badge>
            <h2 className="mt-5 font-display text-4xl font-extrabold">A table for every taste.</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">From quick snacks to relaxed cafe stops, find cuisine, prices, ratings, and dining details before you choose.</p>
            <Button asChild variant="premium" className="mt-6"><Link to="/food">Explore Dining <ChevronRight /></Link></Button>
          </div>
        </div>
      </section>

      <section className="bg-sage-soft px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <Badge variant="outline"><Car className="mr-1 size-3" /> Parking preview</Badge>
            <h2 className="mt-5 font-display text-4xl font-extrabold">Plan your arrival with ease.</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">This frontend preview uses mock parking values and is structured for a future live API connection.</p>
            <Button asChild variant="outline" className="mt-6"><Link to="/parking">View Parking</Link></Button>
          </div>
          <div className="rounded-2xl border border-sage bg-card p-6 shadow-soft">
            <p className="text-sm font-semibold text-muted-foreground">Available spaces</p>
            <p className="mt-2 font-display text-5xl font-extrabold text-foreground">{parkingStats.available}</p>
            <div className="mt-5 h-3 overflow-hidden rounded-full bg-muted"><div className="h-full w-[37%] rounded-full bg-sage" /></div>
            <p className="mt-3 text-xs text-muted-foreground">of {parkingStats.total} total spaces</p>
          </div>
        </div>
      </section>
    </CustomerLayout>
  );
}

function SectionHeading({ eyebrow, title, description, href }: { eyebrow: string; title: string; description: string; href?: "/stores" | "/offers" | "/events" }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div><p className="text-sm font-bold text-primary">{eyebrow}</p><h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">{title}</h2><p className="mt-3 text-muted-foreground">{description}</p></div>
      {href && <Button asChild variant="ghost"><Link to={href}>View all <ChevronRight /></Link></Button>}
    </div>
  );
}
