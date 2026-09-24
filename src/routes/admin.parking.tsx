import { createFileRoute } from "@tanstack/react-router";
import { ManageParkingPage } from "@/components/mallq/AdminPages";
export const Route = createFileRoute("/admin/parking")({ head: () => ({ meta: [
  { title: "Manage Parking – MallQ Admin" }, { name: "description", content: "Review mock parking capacity and vehicle breakdowns." }, { property: "og:title", content: "Manage Parking – MallQ Admin" }, { property: "og:description", content: "MallQ parking management interface." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ManageParkingPage });
