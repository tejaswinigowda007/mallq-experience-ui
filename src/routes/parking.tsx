import { createFileRoute } from "@tanstack/react-router";
import { Bike, Car, CircleParking, Clock3 } from "lucide-react";
import { MetricStrip } from "@/components/mallq/Cards";
import { PageHeader } from "@/components/mallq/Controls";
import { CustomerLayout } from "@/components/mallq/Navigation";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { parkingStats } from "@/lib/mallq-data";

export const Route = createFileRoute("/parking")({ head: () => ({ meta: [
  { title: "Parking Information – MallQ" }, { name: "description", content: "View mock parking capacity and availability information for MallQ." },
  { property: "og:title", content: "Parking Information – MallQ" }, { property: "og:description", content: "Plan your MallQ arrival with clear parking capacity information." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ParkingPage });
function ParkingPage() { const occupiedPercent = Math.round(parkingStats.occupied / parkingStats.total * 100); return <CustomerLayout><PageHeader eyebrow="Plan your arrival" title="Parking made clearer" description="Current values are mock data for this frontend phase and can later be connected to a live parking API." />
<section className="px-4 py-10 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-8 flex flex-wrap items-center gap-3 rounded-2xl border border-sage bg-sage-soft p-4"><Clock3 className="size-5 text-primary" /><p className="font-semibold">Parking availability updates automatically.</p><Badge variant="outline">Mock data in Phase 1</Badge></div>
<MetricStrip items={[{ label: "Total spaces", value: parkingStats.total.toLocaleString(), tone: "lavender" }, { label: "Available", value: parkingStats.available.toLocaleString(), tone: "sage" }, { label: "Occupied", value: parkingStats.occupied.toLocaleString(), tone: "blush" }, { label: "Occupancy", value: `${occupiedPercent}%`, tone: "sky" }]} />
<div className="mt-8 grid gap-6 lg:grid-cols-2"><div className="rounded-2xl border border-border bg-card p-6 shadow-soft"><div className="flex items-center gap-3"><CircleParking className="size-6 text-primary" /><h2 className="font-display text-2xl font-bold">Overall capacity</h2></div><Progress value={occupiedPercent} className="mt-8 h-4 bg-sage-soft" /><div className="mt-4 flex justify-between text-sm text-muted-foreground"><span>{parkingStats.available} available</span><span>{parkingStats.occupied} occupied</span></div></div>
<div className="grid gap-4 sm:grid-cols-2"><div className="rounded-2xl border border-border bg-card p-6 shadow-soft"><Bike className="size-7 text-primary" /><p className="mt-6 text-sm font-semibold text-muted-foreground">Two-wheeler spaces</p><p className="mt-2 font-display text-4xl font-extrabold">{parkingStats.twoWheeler}</p></div><div className="rounded-2xl border border-border bg-card p-6 shadow-soft"><Car className="size-7 text-primary" /><p className="mt-6 text-sm font-semibold text-muted-foreground">Four-wheeler spaces</p><p className="mt-2 font-display text-4xl font-extrabold">{parkingStats.fourWheeler}</p></div></div></div></div></section></CustomerLayout>; }
