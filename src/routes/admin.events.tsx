import { createFileRoute } from "@tanstack/react-router";
import { ManageEventsPage } from "@/components/mallq/AdminPages";
export const Route = createFileRoute("/admin/events")({ head: () => ({ meta: [
  { title: "Manage Events – MallQ Admin" }, { name: "description", content: "Maintain the mock MallQ event calendar." }, { property: "og:title", content: "Manage Events – MallQ Admin" }, { property: "og:description", content: "MallQ event management interface." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ManageEventsPage });
