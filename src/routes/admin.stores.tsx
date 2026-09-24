import { createFileRoute } from "@tanstack/react-router";
import { ManageStoresPage } from "@/components/mallq/AdminPages";
export const Route = createFileRoute("/admin/stores")({ head: () => ({ meta: [
  { title: "Manage Stores – MallQ Admin" }, { name: "description", content: "Manage mock MallQ store directory records." }, { property: "og:title", content: "Manage Stores – MallQ Admin" }, { property: "og:description", content: "MallQ store management interface." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ManageStoresPage });
