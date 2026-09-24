import { createFileRoute } from "@tanstack/react-router";
import { AdminDashboardPage } from "@/components/mallq/AdminPages";
export const Route = createFileRoute("/admin/")({ head: () => ({ meta: [
  { title: "Admin Dashboard – MallQ" }, { name: "description", content: "MallQ administration dashboard with mock operational data." },
  { property: "og:title", content: "Admin Dashboard – MallQ" }, { property: "og:description", content: "Review stores, offers, events, parking, and historical activity in MallQ." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: AdminDashboardPage });
