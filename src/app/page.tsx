// app/page.tsx
import Hero from '../components/Hero'
import ServiceSection from '../components/ServiceSection'
import WhyChooseUs from '../components/WhyChooseUsSection'
import HowItWorks from '../components/HowItWorksSection'
import FinalCta from '../components/FinalCtaSection'
import PartnersSwiper from '../components/Partners'
import BigNumbersSection from '../components/BigNumbersSection'
import { seo } from '../data'

export const metadata = {
  title: seo.home.title,
  description: seo.home.description,
  keywords: seo.home.keywords,
  openGraph: {
    title: seo.home.og.title,
    description: seo.home.og.description,
    type: seo.home.og.type,
    url: seo.home.og.url,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <PartnersSwiper />
      <WhyChooseUs />
      <HowItWorks />
      <BigNumbersSection />
      <FinalCta />
    </>
  );
}