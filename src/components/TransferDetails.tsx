// components/TransferDetails.tsx
"use client";

import SwiperComponent from "./Swiper"
import ContactModal from "@/components/QuoteModal";

type ImageItem = {
  image: string;
};
interface ServiceDetails {
  title: string,
  features: string[],
  images: ImageItem[],
  h2: string
}



export default function TransferDetails({ title, features, images, h2 }: ServiceDetails) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Image Gallery */}
        <div className="space-y-4">
          <SwiperComponent gallery={images} />
        </div>

        {/* Right: Description & Features */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900">
            {h2}
          </h2>
          <p className="mt-4 text-gray-700">
            {title}
          </p>

          <ul className="mt-6 space-y-3 list-disc list-inside text-gray-700 mb-3">
            {features.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <ContactModal>
            

          </ContactModal>
        </div>
      </div>
    </section>
  );
}
