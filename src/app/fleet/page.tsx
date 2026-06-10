// app/fleet/page.tsx
import Header from "@/components/Header";
import FleetSection from "@/components/FleetSection";
import TestimonialSection from '../../components/TestimonialSection';
import FinalCta from "@/components/FinalCtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function FleetPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-3">
        <Breadcrumbs
                crumbs={[
                  { name: "Home", href: "/" },
                  { name: "Fleet" },
                ]}
              />
        <FleetSection />
        <TestimonialSection />
        <FinalCta />
      </div>
      
    </main>
  );
}