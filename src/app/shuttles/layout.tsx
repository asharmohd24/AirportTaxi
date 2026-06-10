// app/shuttle-services/layout.tsx
import type { Metadata } from "next";
import { seo } from "../../data";

export const metadata: Metadata = {
  title: seo.shuttles.title,
  description: seo.shuttles.description,
  keywords: seo.shuttles.keywords,
  openGraph: {
    title: seo.shuttles.og.title,
    description: seo.shuttles.og.description,
    type: seo.shuttles.og.type as "website",
    url: seo.shuttles.og.url,
  },
};

export default function ShuttleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
