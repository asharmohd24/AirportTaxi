// app/corporate/layout.tsx
import type { Metadata } from "next";
import { seo } from "../../data";

export const metadata: Metadata = {
  title: seo.corporate.title,
  description: seo.corporate.description,
  keywords: seo.corporate.keywords,
  openGraph: {
    title: seo.corporate.og.title,
    description: seo.corporate.og.description,
    type: seo.corporate.og.type as "website",
    url: seo.corporate.og.url,
  },
};

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
