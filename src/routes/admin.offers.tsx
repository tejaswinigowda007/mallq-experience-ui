import { createFileRoute } from "@tanstack/react-router";
import { ManageOffersPage } from "@/components/mallq/AdminPages";
export const Route = createFileRoute("/admin/offers")({ head: () => ({ meta: [
  { title: "Manage Offers – MallQ Admin" }, { name: "description", content: "Create and maintain mock MallQ offers." }, { property: "og:title", content: "Manage Offers – MallQ Admin" }, { property: "og:description", content: "MallQ offer management interface." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ManageOffersPage });
