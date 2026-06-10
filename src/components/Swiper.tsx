"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Category {
  image: string;
}
interface CategoriesCarouselProps {
  gallery: Category[];
}

export default function SwiperComponent({ gallery }: CategoriesCarouselProps) {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1600}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {gallery.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={src.image}
                alt={`Belgium Buses Shuttle Service Image ${idx + 1}`}
                width={1600}                // ✅ increased resolution
                height={900}
                quality={100}               // ✅ keeps full clarity
                unoptimized={false}         // ✅ uses Next’s optimizer
                priority={idx === 0}        // ✅ preload first image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px" // ✅ mobile sharpness
                className="object-cover w-full h-[250px] lg:h-[450px] rounded-2xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
