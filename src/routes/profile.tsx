import { createFileRoute } from "@tanstack/react-router";
import { Bell, CalendarDays, Heart, Mail, Tag, UserRound } from "lucide-react";
import { PageHeader } from "@/components/mallq/Controls";
import { CustomerLayout } from "@/components/mallq/Navigation";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { mockProfile } from "@/lib/mallq-data";

export const Route = createFileRoute("/profile")({ head: () => ({ meta: [
  { title: "My MallQ Profile" }, { name: "description", content: "View a mock MallQ customer profile, favourites, saved offers, and notification preferences." },
  { property: "og:title", content: "My MallQ Profile" }, { property: "og:description", content: "A frontend preview of the MallQ customer profile experience." },
  { property: "og:type", content: "profile" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ProfilePage });
function ProfilePage() { return <CustomerLayout><PageHeader eyebrow="Your MallQ" title="Profile" description="A mock customer view for favourites, saved offers, event registrations, and preferences." /><section className="px-4 py-10 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
<div className="rounded-2xl border border-border bg-card p-6 shadow-soft"><div className="grid size-20 place-items-center rounded-2xl bg-blush-soft"><UserRound className="size-9 text-primary" /></div><h2 className="mt-5 font-display text-2xl font-bold">{mockProfile.name}</h2><p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><Mail className="size-4" />{mockProfile.email}</p><p className="mt-2 text-sm text-muted-foreground">Member since {mockProfile.memberSince}</p></div>
<div className="grid gap-6 sm:grid-cols-2"><ProfileList icon={<Heart />} title="Favorite stores" items={mockProfile.favoriteStores} tone="bg-blush-soft" /><ProfileList icon={<Tag />} title="Saved offers" items={mockProfile.savedOffers} tone="bg-peach-soft" /><ProfileList icon={<CalendarDays />} title="Event registrations" items={mockProfile.eventRegistrations} tone="bg-lavender-soft" /><div className="rounded-2xl border border-border bg-card p-5 shadow-soft"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-sage-soft"><Bell className="size-5 text-primary" /></span><h2 className="font-display text-lg font-bold">Notifications</h2></div><div className="mt-5 grid gap-4"><Preference label="Offer reminders" checked /><Preference label="Event updates" checked /><Preference label="Parking updates" /></div></div></div></div></section></CustomerLayout>; }
function ProfileList({ icon, title, items, tone }: { icon: React.ReactNode; title: string; items: string[]; tone: string }) { return <div className="rounded-2xl border border-border bg-card p-5 shadow-soft"><div className="flex items-center gap-3"><span className={`grid size-10 place-items-center rounded-xl ${tone} text-primary [&_svg]:size-5`}>{icon}</span><h2 className="font-display text-lg font-bold">{title}</h2></div><div className="mt-5 flex flex-wrap gap-2">{items.map((item) => <Badge key={item} variant="outline">{item}</Badge>)}</div></div>; }
function Preference({ label, checked = false }: { label: string; checked?: boolean }) { return <div className="flex items-center justify-between gap-4"><span className="text-sm font-semibold">{label}</span><Switch defaultChecked={checked} aria-label={label} /></div>; }
