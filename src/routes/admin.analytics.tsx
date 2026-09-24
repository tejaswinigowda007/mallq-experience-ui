import { createFileRoute } from "@tanstack/react-router";
import { AnalyticsPage } from "@/components/mallq/AdminPages";
export const Route = createFileRoute("/admin/analytics")({ head: () => ({ meta: [
  { title: "Analytics – MallQ Admin" }, { name: "description", content: "View clearly labelled historical and mock MallQ analytics placeholders." }, { property: "og:title", content: "Analytics – MallQ Admin" }, { property: "og:description", content: "Historical footfall and operational analytics for MallQ." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: AnalyticsPage });
