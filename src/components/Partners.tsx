// components/Partners.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { Building2 } from "lucide-react";
import { partners as partnersData } from "../data";

export default function PartnersSwiper() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200 rounded-full opacity-5 blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-200 rounded-full opacity-5 blur-2xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/80 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold shadow-sm mb-4">
            <Building2 className="h-3 w-3 mr-1" />
            {partnersData.badge}
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            {partnersData.heading}
          </h3>
        </div>

        {/* Constant Flow Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={60}
            slidesPerView={6}
            loop={true}
            speed={8000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              480: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            className="partners-swiper"
          >
            {partnersData.items.map(({ name, logo }) => (
              <SwiperSlide key={name}>
                <div className="flex items-center justify-center h-24">
                  <div className="relative group">
                    {/* Larger logos without card background */}
                    <div className="relative p-4">
                      <Image
                        src={logo}
                        alt={name}
                        width={160}
                        height={64}
                        className="h-14 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                        quality={100}
                      />
                    </div>
                    
                    {/* Subtle Glow Effect on hover */}
                    <div className="absolute inset-0 bg-blue-200/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom CSS for constant flow animation */}
      <style jsx global>{`
        .partners-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}