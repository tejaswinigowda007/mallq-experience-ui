import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  Bell,
  CalendarDays,
  Car,
  LayoutDashboard,
  Menu,
  Search,
  Settings,
  ShoppingBag,
  Store,
  Tag,
  Users,
  Utensils,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MallQLogo } from "@/components/mallq/Brand";
import { cn } from "@/lib/utils";

const customerLinks = [
  { label: "Home", to: "/" },
  { label: "Stores", to: "/stores" },
  { label: "Offers", to: "/offers" },
  { label: "Events", to: "/events" },
  { label: "Food", to: "/food" },
  { label: "Parking", to: "/parking" },
] as const;

const adminLinks = [
  { label: "Dashboard", to: "/admin", icon: LayoutDashboard },
  { label: "Stores", to: "/admin/stores", icon: Store },
  { label: "Users", to: "/admin/users", icon: Users },
  { label: "Offers", to: "/admin/offers", icon: Tag },
  { label: "Events", to: "/admin/events", icon: CalendarDays },
  { label: "Parking", to: "/admin/parking", icon: Car },
  { label: "Analytics", to: "/admin/analytics", icon: BarChart3 },
  { label: "Settings", to: "/admin/settings", icon: Settings },
] as const;

export function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomerNavbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function CustomerNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="MallQ home">
          <MallQLogo />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Customer navigation">
          {customerLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "bg-accent text-accent-foreground" }}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <label className="relative w-56">
            <span className="sr-only">Search MallQ</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input placeholder="Search MallQ" className="h-10 rounded-xl bg-surface pl-9" />
          </label>
          <Button asChild variant="outline" size="sm">
            <Link to="/profile">Profile</Link>
          </Button>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <div className="border-t border-border bg-background px-4 py-4 lg:hidden">
          <div className="grid gap-2">
            {customerLinks.map((item) => (
              <Button key={item.to} asChild variant="ghost" className="justify-start">
                <Link to={item.to} onClick={() => setOpen(false)}>{item.label}</Link>
              </Button>
            ))}
            <Button asChild variant="outline" className="justify-start">
              <Link to="/profile" onClick={() => setOpen(false)}>Profile</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-warm px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.3fr_1fr] md:items-center">
        <div>
          <MallQLogo />
          <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
            MallQ is a frontend-first capstone prototype for mall discovery, offers, events, dining, parking, and admin management.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <Button asChild variant="ghost" size="sm"><Link to="/stores">Stores</Link></Button>
          <Button asChild variant="ghost" size="sm"><Link to="/offers">Offers</Link></Button>
          <Button asChild variant="ghost" size="sm"><Link to="/parking">Parking</Link></Button>
          <Button asChild variant="outline" size="sm"><Link to="/admin">Admin Console</Link></Button>
        </div>
      </div>
    </footer>
  );
}

export function AdminShell({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface-cool text-foreground lg:flex">
      <aside className="border-b border-sidebar-border bg-sidebar p-4 lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:border-b-0 lg:border-r lg:p-6">
        <Link to="/admin" className="mb-6 block">
          <MallQLogo />
        </Link>
        <nav className="flex gap-2 overflow-x-auto pb-2 lg:grid lg:overflow-visible lg:pb-0" aria-label="Admin navigation">
          {adminLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/admin" }}
                activeProps={{ className: "bg-sidebar-accent text-sidebar-accent-foreground" }}
                className="flex shrink-0 items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <Icon className="size-4" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <div className="min-w-0 flex-1">
        <header className="border-b border-border bg-background/90 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="font-display text-3xl font-extrabold text-foreground">{title}</h1>
              <p className="mt-1 text-sm text-muted-foreground">{description}</p>
            </div>
            <div className="flex items-center gap-3">
              <label className="relative min-w-0 flex-1 md:w-72 md:flex-none">
                <span className="sr-only">Search admin</span>
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                <Input placeholder="Search admin" className="h-10 rounded-xl bg-surface pl-9" />
              </label>
              <Button variant="outline" size="icon" aria-label="Notifications"><Bell /></Button>
              <div className="hidden items-center gap-3 rounded-xl border border-border bg-surface px-3 py-2 sm:flex">
                <div className="grid size-8 place-items-center rounded-full bg-blush-soft font-bold text-primary">A</div>
                <span className="text-sm font-semibold">Admin</span>
              </div>
            </div>
          </div>
        </header>
        <main className="px-4 py-8 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}

export function ContentCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return <section className={cn("rounded-2xl border border-border bg-card p-5 shadow-soft", className)}>{children}</section>;
}
