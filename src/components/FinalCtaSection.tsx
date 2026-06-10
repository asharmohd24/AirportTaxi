// components/FinalCtaSection.tsx
"use client";

import Image from "next/image";
import ContactModal from "@/components/QuoteModal";
import {
  Phone,
  MessageCircle,
  CheckCircle,
  MapPin,
  Star,
  Bus,
  Clock,
} from "lucide-react";
import { finalCta as ctaData, site } from "../data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin,
  Clock,
  Star,
};

export default function FinalCta() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-40 animate-float"></div>
      <div
        className="absolute bottom-10 left-10 w-24 h-24 bg-indigo-100 rounded-full opacity-40 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Animated Road */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-100 to-gray-200">
        {/* Road Lines */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-road-line"></div>
      </div>

      {/* Animated Bus */}
      <div
        className="absolute bottom-8 left-0 animate-bus-drive"
        style={{ animationDuration: "20s" }}
      >
        <div className="relative">
          {/* Bus Body */}
          <div className="w-20 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg relative">
            {/* Windows */}
            <div className="absolute top-1 left-2 w-4 h-3 bg-blue-200 rounded"></div>
            <div className="absolute top-1 left-7 w-4 h-3 bg-blue-200 rounded"></div>
            <div className="absolute top-1 right-2 w-4 h-3 bg-blue-200 rounded"></div>
            {/* Wheels */}
            <div className="absolute -bottom-2 left-3 w-4 h-4 bg-gray-800 rounded-full border-2 border-gray-600"></div>
            <div className="absolute -bottom-2 right-3 w-4 h-4 bg-gray-800 rounded-full border-2 border-gray-600"></div>
            {/* Headlights */}
            <div className="absolute -bottom-1 left-1 w-2 h-1 bg-yellow-300 rounded-full"></div>
          </div>
          {/* Road Shadow */}
          <div className="absolute -bottom-4 left-2 right-2 h-2 bg-gray-400 opacity-30 rounded-full blur-sm"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <span className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                <CheckCircle className="h-4 w-4 mr-2" />
                {ctaData.badge}
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {ctaData.heading.line1} <span className="text-blue-600">{ctaData.heading.highlight}</span>{" "}
                {ctaData.heading.line2}
              </h2>
              <p className="text-gray-700 text-xl leading-relaxed">
                {ctaData.description}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 gap-4">
              {ctaData.features.map((feature) => {
                const IconComp = iconMap[feature.iconName];
                return (
                  <div key={feature.title} className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className={`w-12 h-12 ${feature.iconBg} rounded-lg flex items-center justify-center`}>
                      {IconComp && <IconComp className={`h-6 w-6 ${feature.iconColor}`} />}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{feature.title}</p>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactModal />
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 group"
              >
                <Phone className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                {ctaData.cta.secondary}
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              {ctaData.trustIndicators.map((ind, i) => (
                <div key={ind.text} className="flex items-center space-x-2 text-gray-600">
                  {i === 2
                    ? <MessageCircle className="h-4 w-4 text-purple-500" />
                    : <div className={`w-2 h-2 ${i === 0 ? 'bg-green-500 animate-pulse' : 'bg-blue-500'} rounded-full`}></div>
                  }
                  <span className="text-sm font-medium">{ind.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div
            className="flex justify-center lg:justify-end animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <div className="relative w-80 h-80 bg-white rounded-3xl shadow-xl p-8">
                <Image
                  src={ctaData.image.src}
                  alt={ctaData.image.alt}
                  fill
                  className="object-contain"
                />

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Bus className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{ctaData.floatingCards[0].value}</p>
                      <p className="text-xs text-gray-600">{ctaData.floatingCards[0].label}</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{ctaData.floatingCards[1].value}</p>
                      <p className="text-xs text-gray-600">{ctaData.floatingCards[1].label}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {ctaData.stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes bus-drive {
          0% {
            transform: translateX(-100px);
          }
          100% {
            transform: translateX(calc(100vw + 100px));
          }
        }

        @keyframes road-line {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-bus-drive {
          animation: bus-drive 20s linear infinite;
        }

        .animate-road-line {
          animation: road-line 2s linear infinite;
        }
      `}</style>
    </section>
  );
}
