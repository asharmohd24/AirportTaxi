// app/transfers/layout.tsx
import type { Metadata } from "next";
import { seo } from "../../data";

export const metadata: Metadata = {
  title: seo.transfers.title,
  description: seo.transfers.description,
  keywords: seo.transfers.keywords,
  openGraph: {
    title: seo.transfers.og.title,
    description: seo.transfers.og.description,
    type: seo.transfers.og.type as "website",
    url: seo.transfers.og.url,
  },
};

export default function TransferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
