import { createFileRoute } from "@tanstack/react-router";
import { SettingsPage } from "@/components/mallq/AdminPages";
export const Route = createFileRoute("/admin/settings")({ head: () => ({ meta: [
  { title: "Settings – MallQ Admin" }, { name: "description", content: "Configure frontend preferences for the MallQ admin experience." }, { property: "og:title", content: "Settings – MallQ Admin" }, { property: "og:description", content: "MallQ admin settings interface." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: SettingsPage });
