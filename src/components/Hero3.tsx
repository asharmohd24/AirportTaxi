"use client";

import Image from "next/image";
import ContactModal from "@/components/QuoteModal";


export default function Hero() {
  return (
    <section className="relative h-[600px] w-full">
      {/* Background Fleet Image */}
      <Image
        src="/images/hero-about.png"
        alt="Our fleet of modern coaches"
        fill
        className="object-cover"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Company Vision Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white">
          Driven by Excellence, Connecting Communities
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
          At Coach Hire, our vision is to be the preferred partner in group transportation,
          delivering safety, comfort, and punctuality in every journey.
        </p>
        <div className="mt-8">
          <ContactModal>
          </ContactModal>
        </div>
      </div>
    </section>
  );
}
