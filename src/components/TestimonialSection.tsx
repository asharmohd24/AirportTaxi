// components/TestimonialSection.tsx
"use client";
import { Star } from "lucide-react";
import { useState } from 'react';
import { testimonials as testimonialsData } from "../data";

export default function TestimonialSection() {
  const categories = testimonialsData.categories.map((c) => c.key);
  const [active, setActive] = useState(categories[0]);
  const filtered = testimonialsData.items.filter(t => t.key === active);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
            {testimonialsData.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {testimonialsData.heading}
          </h2>
          <p className="text-gray-600 max-w-2xl text-lg">
            {testimonialsData.description}
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12 flex justify-center gap-4 flex-wrap">
          {testimonialsData.categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-6 py-3 rounded-full transition-all duration-300 focus:outline-none border transform hover:-translate-y-1 ${
                active === cat.key
                ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                : 'bg-white text-gray-600 border-gray-300 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((t, idx) => (
            <div 
              key={idx} 
              className="flex flex-col bg-white rounded-2xl shadow-lg p-8 text-left h-full transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:shadow-xl"
            >
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 flex-grow text-lg leading-relaxed italic">
                {`"${t.message}"`}
              </p>
              
              {/* Stars */}
              <div className="flex mb-6">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Author Info */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {t.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-lg">{t.name}</p>
                  <p className="text-gray-600 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating Badge */}
        <div className="mt-16">
          <div className="inline-flex items-center space-x-4 bg-white rounded-2xl shadow-lg px-8 py-4 border border-gray-100">
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-900">{testimonialsData.rating.value}</div>
              <div className="text-gray-600 text-sm">{testimonialsData.rating.label}</div>
            </div>
            <div className="flex">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className="h-7 w-7 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">{testimonialsData.rating.reviewCount}</div>
              <div className="text-gray-600 text-sm">{testimonialsData.rating.reviewLabel}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}