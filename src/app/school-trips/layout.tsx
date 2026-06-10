// app/school-trips/layout.tsx
import type { Metadata } from "next";
import { seo } from "../../data";

export const metadata: Metadata = {
  title: seo.schoolTrips.title,
  description: seo.schoolTrips.description,
  keywords: seo.schoolTrips.keywords,
  openGraph: {
    title: seo.schoolTrips.og.title,
    description: seo.schoolTrips.og.description,
    type: seo.schoolTrips.og.type as "website",
    url: seo.schoolTrips.og.url,
  },
};

export default function SchoolTripsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
