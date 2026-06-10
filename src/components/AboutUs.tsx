// components/AboutUs.tsx
"use client";

import Image from "next/image";
import { CheckCircle, Users, Shield, Clock, Star } from "lucide-react";
import { aboutUs as aboutUsData } from "../data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Shield,
  Clock,
  Star,
};

export default function AboutUs() {
  const features = aboutUsData.features.map((f) => ({
    ...f,
    icon: iconMap[f.iconName] || Shield,
  }));

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <span className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                <CheckCircle className="h-4 w-4 mr-2" />
                {aboutUsData.badge}
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {aboutUsData.heading}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {aboutUsData.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {aboutUsData.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={aboutUsData.image.src}
                alt={aboutUsData.image.alt}
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 animate-pulse-slow">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900">{aboutUsData.floatingCard.value}</p>
                  <p className="text-sm text-gray-600">{aboutUsData.floatingCard.label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}