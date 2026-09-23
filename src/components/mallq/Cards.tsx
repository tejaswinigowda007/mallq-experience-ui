import type { ReactNode } from "react";
import { CalendarDays, Clock, IndianRupee, MapPin, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { MallEvent, Offer, Restaurant, Store, Tone } from "@/lib/mallq-data";
import { cn } from "@/lib/utils";

const toneBadgeClass: Record<Tone, string> = {
  blush: "border-blush bg-blush-soft text-foreground",
  sage: "border-sage bg-sage-soft text-foreground",
  lavender: "border-lavender bg-lavender-soft text-foreground",
  peach: "border-peach bg-peach-soft text-foreground",
  sky: "border-sky bg-sky-soft text-foreground",
};

const tonePanelClass: Record<Tone, string> = {
  blush: "bg-blush-soft",
  sage: "bg-sage-soft",
  lavender: "bg-lavender-soft",
  peach: "bg-peach-soft",
  sky: "bg-sky-soft",
};

export function StoreCard({ store }: { store: Store }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-transform hover:-translate-y-1 hover:shadow-elevated">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={store.image}
          alt={`${store.name} storefront`}
          loading="lazy"
          width={928}
          height={720}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge className={toneBadgeClass[store.tone]}>{store.category}</Badge>
          <span className="text-xs font-semibold text-muted-foreground">{store.floor}</span>
        </div>
        <h3 className="font-display text-xl font-bold text-foreground">{store.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">{store.description}</p>
        <Button asChild variant="outline" className="mt-5 w-full">
          <Link to="/stores/$storeId" params={{ storeId: store.id }}>
            View Store
          </Link>
        </Button>
      </div>
    </article>
  );
}

export function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <Badge className={toneBadgeClass[offer.tone]}>{offer.category}</Badge>
        <div className="rounded-2xl bg-primary px-3 py-2 text-sm font-extrabold text-primary-foreground shadow-soft">
          {offer.discount}
        </div>
      </div>
      <h3 className="mt-5 font-display text-xl font-bold text-foreground">{offer.title}</h3>
      <p className="mt-1 text-sm font-semibold text-primary">{offer.storeName}</p>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{offer.description}</p>
      <p className="mt-4 text-xs font-semibold text-muted-foreground">{offer.validUntil}</p>
      <Button variant="pastel" className="mt-5 w-full">View Offer</Button>
    </article>
  );
}

export function EventCard({ event }: { event: MallEvent }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <Badge className={toneBadgeClass[event.tone]}>{event.category}</Badge>
      <h3 className="mt-4 font-display text-xl font-bold text-foreground">{event.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{event.description}</p>
      <div className="mt-5 grid gap-3 text-sm text-muted-foreground">
        <span className="flex items-center gap-2"><CalendarDays className="size-4 text-primary" aria-hidden="true" />{event.date}</span>
        <span className="flex items-center gap-2"><Clock className="size-4 text-primary" aria-hidden="true" />{event.time}</span>
        <span className="flex items-center gap-2"><MapPin className="size-4 text-primary" aria-hidden="true" />{event.location}</span>
      </div>
      <Button variant="outline" className="mt-5 w-full">View Details</Button>
    </article>
  );
}

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={restaurant.image}
          alt={`${restaurant.name} dining area`}
          loading="lazy"
          width={928}
          height={720}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className={toneBadgeClass[restaurant.tone]}>{restaurant.cuisine}</Badge>
          <Badge variant="outline">{restaurant.foodType}</Badge>
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-foreground">{restaurant.name}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{restaurant.description}</p>
        <div className="mt-5 grid grid-cols-3 gap-2 text-sm">
          <span className="rounded-xl bg-surface-warm p-3"><MapPin className="mb-1 size-4 text-primary" aria-hidden="true" />{restaurant.floor}</span>
          <span className="rounded-xl bg-surface-warm p-3"><IndianRupee className="mb-1 size-4 text-primary" aria-hidden="true" />{restaurant.priceRange}</span>
          <span className="rounded-xl bg-surface-warm p-3"><Star className="mb-1 size-4 text-primary" aria-hidden="true" />{restaurant.rating}</span>
        </div>
        <Button variant="outline" className="mt-5 w-full">View Details</Button>
      </div>
    </article>
  );
}

export function DashboardCard({
  label,
  value,
  detail,
  tone,
  icon,
}: {
  label: string;
  value: string;
  detail: string;
  tone: Tone;
  icon: ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-muted-foreground">{label}</p>
          <p className="mt-2 font-display text-3xl font-extrabold text-foreground">{value}</p>
        </div>
        <div className={cn("grid size-12 place-items-center rounded-2xl text-foreground", tonePanelClass[tone])}>{icon}</div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">{detail}</p>
    </article>
  );
}

export function MetricStrip({ items }: { items: { label: string; value: string; tone: Tone }[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className={cn("rounded-2xl border border-border p-5", tonePanelClass[item.tone])}>
          <p className="text-sm font-semibold text-muted-foreground">{item.label}</p>
          <p className="mt-2 font-display text-3xl font-extrabold text-foreground">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
