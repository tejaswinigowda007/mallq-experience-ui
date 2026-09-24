import { createFileRoute } from "@tanstack/react-router";
import { ManageUsersPage } from "@/components/mallq/AdminPages";
export const Route = createFileRoute("/admin/users")({ head: () => ({ meta: [
  { title: "Manage Users – MallQ Admin" }, { name: "description", content: "Review mock MallQ user profiles and status." }, { property: "og:title", content: "Manage Users – MallQ Admin" }, { property: "og:description", content: "MallQ user management interface." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ManageUsersPage });
