// components/WhyChooseUsSection.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ShieldCheck,
  User,
  Clock,
  Headset,
  CheckCircle,
  DollarSign,
  ThumbsUp,
  ChevronDown,
} from "lucide-react";
import { whyChooseUs as wcu } from "../data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  DollarSign,
  User,
  Clock,
  Headset,
  CheckCircle,
  ShieldCheck,
};

export default function WhyChooseUs() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const features = wcu.features.map((f) => ({
    ...f,
    Icon: iconMap[f.iconName] || Clock,
  }));

  return (
    <section className="py-16 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-56 h-56 bg-blue-200 rounded-full opacity-5 blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-indigo-200 rounded-full opacity-5 blur-2xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content Section */}
        <div className="space-y-6 animate-slide-up">
          <div className="space-y-4">
            <span className="inline-flex items-center bg-white/80 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
              <ThumbsUp className="h-3 w-3 mr-1" />
              {wcu.badge}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {wcu.heading.line1} <span className="text-blue-600">{wcu.heading.highlight}</span>
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {wcu.description}
            </p>
          </div>
          
          {/* Accordion Features */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`group bg-white/80 rounded-xl shadow-sm border transition-all duration-300 overflow-hidden hover:shadow-md ${
                  openItems.includes(index) || hoveredItem === index 
                    ? `${feature.borderColor} border-2 shadow-md` 
                    : 'border-gray-100'
                }`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleItem(index)}
                  className={`w-full p-4 text-left flex items-center justify-between transition-all duration-300 ${
                    openItems.includes(index) || hoveredItem === index 
                      ? 'bg-blue-50/50' 
                      : 'hover:bg-gray-50/50'
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`flex-shrink-0 ${feature.bgColor} p-3 rounded-lg transition-all duration-300 ${
                      openItems.includes(index) || hoveredItem === index 
                        ? 'scale-110 ring-2 ring-blue-200' 
                        : 'group-hover:scale-105'
                    }`}>
                      <feature.Icon className={`h-5 w-5 ${feature.color}`} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold text-base mb-1 transition-colors duration-300 ${
                        openItems.includes(index) || hoveredItem === index 
                          ? 'text-blue-600' 
                          : 'text-gray-900 group-hover:text-blue-600'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 ml-4">
                    <div className={`transition-transform duration-500 ease-in-out ${
                      openItems.includes(index) ? 'rotate-180' : 'rotate-0'
                    }`}>
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </button>

                {/* Accordion Content */}
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${
                    openItems.includes(index) 
                      ? 'grid-rows-[1fr] opacity-100' 
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div 
                      className={`px-4 pb-4 transition-all duration-500 ${
                        openItems.includes(index) 
                          ? 'translate-y-0 delay-150' 
                          : 'translate-y-4'
                      }`}
                    >
                      <div className="pl-16 pr-4">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {feature.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Compact Stats */}
          <div className="grid grid-cols-3 gap-3 pt-4">
            {wcu.stats.map((stat) => (
              <div key={stat.label} className="text-center p-3 bg-white/80 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section - Fixed Alignment */}
        <div className="flex items-center justify-center lg:justify-end relative animate-slide-up" style={{animationDelay: '0.2s'}}>
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl group">
              <Image
                src={wcu.image.src}
                alt={wcu.image.alt}
                width={500}
                height={350}
                className="object-cover w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Floating Badge 1 */}
            <div className="absolute -bottom-1 -left-4 bg-white rounded-xl shadow-lg p-5 border border-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl group/badge">
              <div className="flex items-center space-x-2">
                <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center group-hover/badge:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{wcu.floatingBadges[0].value}</p>
                  <p className="text-xs text-gray-600">{wcu.floatingBadges[0].label}</p>
                </div>
              </div>
            </div>

            {/* Floating Badge 2 */}
            <div className="absolute -top-1 -right-4 bg-white rounded-xl shadow-lg p-5 border border-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl group/badge">
              <div className="flex items-center space-x-2">
                <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center group-hover/badge:scale-110 transition-transform duration-300">
                  <ShieldCheck className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{wcu.floatingBadges[1].value}</p>
                  <p className="text-xs text-gray-600">{wcu.floatingBadges[1].label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}