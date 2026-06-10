// components/ServiceSection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Bus,
  Users,
  GraduationCap,
  Building2,
  Plane,
  Home,
  ChevronDown,
} from "lucide-react";
import { services as servicesData } from "../data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  GraduationCap,
  Plane,
  Users,
  Home,
};

const services = servicesData.items.map((item) => ({
  ...item,
  icon: iconMap[item.iconName] || Bus,
}));

export default function ServicesSection() {
  const [active, setActive] = useState(services[0].key);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const current = services.find((s) => s.key === active)!;

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4 shadow-sm animate-fade-in">
            <Bus className="h-4 w-4 mr-2" />
            {servicesData.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-slide-up">
            {servicesData.heading}
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {servicesData.description}
          </p>
        </div>

        {/* Service Selection - Desktop Tabs & Mobile Dropdown */}
        <div
          className="mb-12 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          {/* Desktop Tabs (hidden on mobile) */}
          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {services.map((service) => (
              <button
                key={service.key}
                onClick={() => setActive(service.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl border transition-all duration-300 font-medium transform hover:-translate-y-1 ${
                  active === service.key
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-600 shadow-lg scale-105"
                    : "bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:shadow-md"
                }`}
              >
                <service.icon className="h-5 w-5" />
                <span>{service.title}</span>
              </button>
            ))}
          </div>

          {/* Mobile Dropdown (hidden on desktop) */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between px-6 py-4 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 font-medium text-gray-700"
            >
              <div className="flex items-center space-x-3">
                <current.icon className="h-5 w-5 text-blue-600" />
                <span>{current.title}</span>
              </div>
              <ChevronDown 
                className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`} 
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-xl shadow-lg z-20 overflow-hidden">
                {services.map((service) => (
                  <button
                    key={service.key}
                    onClick={() => {
                      setActive(service.key);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-6 py-4 text-left transition-colors duration-200 ${
                      active === service.key
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <service.icon className="h-5 w-5" />
                    <span>{service.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Service Content */}
        <div
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Text Content */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <current.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900">
                  {current.title}
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {current.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {current.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src={current.image}
                  alt={`${current.title} - Belgium Buses`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  quality={100}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 animate-pulse-slow">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <current.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {servicesData.floatingBadge.label}
                    </p>
                    <p className="text-xs text-gray-600">{servicesData.floatingBadge.sublabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}