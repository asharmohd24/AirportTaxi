"use client";

import Image from "next/image";
import ContactModal from "@/components/QuoteModal";
import { site } from "../data";

interface Service {
  title: string;
  span: string;
  subTitle: string;
  image: string;
}

export default function ServicesHero({ title, span, subTitle, image }: Service) {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-0 pb-15 lg:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10">
            {title} <span className="text-blue-600 underline">{span}</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">{subTitle}</p>
          <div className="hidden md:flex items-center space-x-4 mt-5 mb-10">
            <ContactModal />
          </div>
          <p className="text-gray-700 max-w-md">
            Or speak to one of our team on{" "}
            <a href={site.phoneHref}>
              <span className="text-primary max-w-md">{site.phone}</span>
            </a>
          </p>
        </div>

        {/* Hero Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <Image
            src={image}
            alt={`${title} ${span} | ${site.name}`}
            width={1600}              // ✅ Increased resolution
            height={900}              // ✅ High enough for retina displays
            quality={100}             // ✅ Full clarity
            priority                  // ✅ Loads fast for LCP
            unoptimized={false}       // ✅ Keeps Next.js optimization
            className="object-cover rounded-2xl w-full h-auto max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
