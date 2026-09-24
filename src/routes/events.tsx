import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, MapPin } from "lucide-react";
import { EventCard } from "@/components/mallq/Cards";
import { PageHeader } from "@/components/mallq/Controls";
import { CustomerLayout } from "@/components/mallq/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { events } from "@/lib/mallq-data";

export const Route = createFileRoute("/events")({ head: () => ({ meta: [
  { title: "Events Calendar – MallQ" }, { name: "description", content: "See upcoming shopping, music, and lifestyle events at MallQ." },
  { property: "og:title", content: "Events Calendar – MallQ" }, { property: "og:description", content: "Plan your visit around upcoming MallQ events." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: EventsPage });

function EventsPage() { const featured = events[0]; if (!featured) return null; return <CustomerLayout><PageHeader eyebrow="What’s happening" title="Events at MallQ" description="Shopping, culture, food, and community moments—all in one calendar." />
  <section className="px-4 py-10 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><article className="overflow-hidden rounded-2xl border border-peach bg-peach-soft p-6 shadow-elevated md:p-10"><div className="grid items-center gap-8 md:grid-cols-[1fr_auto]"><div><Badge variant="peach">Featured event</Badge><h2 className="mt-5 font-display text-4xl font-extrabold">{featured.title}</h2><p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{featured.description}</p><div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold"><span className="flex items-center gap-2"><CalendarDays className="size-4 text-primary" />{featured.date} · {featured.time}</span><span className="flex items-center gap-2"><MapPin className="size-4 text-primary" />{featured.location}</span></div></div><Button size="lg">View Details</Button></div></article>
  <h2 className="mt-12 font-display text-3xl font-extrabold">Upcoming events</h2><div className="mt-6 grid gap-6 lg:grid-cols-3">{events.map((event) => <EventCard key={event.id} event={event} />)}</div></div></section></CustomerLayout>; }
