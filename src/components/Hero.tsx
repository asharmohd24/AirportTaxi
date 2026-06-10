// components/Hero.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Users, Bus, Star, Shield, Clock, Phone } from "lucide-react";
import QuoteModal from "@/components/QuoteModal";
import { hero, site } from "../data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Clock,
  Users,
  Star,
};

export default function Hero() {
  const [] = useState({
    pickup: "",
    destination: "",
    date: "",
    passengers: ""
  });

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  //   setFormData(prev => ({
  //     ...prev,
  //     [e.target.name]: e.target.value
  //   }));
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Formspree will handle the submission
  // };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -translate-y-48 translate-x-48 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20 -translate-x-48 translate-y-48 animate-pulse"></div>

      {/* Floating Bubbles */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-blue-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-indigo-300 rounded-full opacity-40 animate-bounce" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-40 left-20 w-10 h-10 bg-blue-400 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Header Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold shadow-sm animate-fade-in">
                <Bus className="h-4 w-4 mr-2" />
                {hero.badge}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-slide-up">
                {hero.heading.line1}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{hero.heading.highlight}</span>
                {hero.heading.line2}
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
                {hero.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-md animate-slide-up" style={{animationDelay: '0.4s'}}>
              {hero.features.map((feature, index) => {
                const IconComp = iconMap[feature.iconName];
                return (
                  <div key={index} className="flex items-center space-x-2 text-gray-600 group">
                    <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                      {IconComp && <IconComp className="h-5 w-5 text-blue-600" />}
                    </div>
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{animationDelay: '0.6s'}}>
              <QuoteModal />
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <Phone className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                {hero.cta.secondary}
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-8 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="flex items-center space-x-2 text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm">
                <div className="relative">
                  <Users className="h-6 w-6 text-blue-600" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <span className="text-sm font-medium">{hero.trustIndicators[0].text}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">{hero.trustIndicators[1].text}</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-float">
            <div className="relative z-10">
              <Image
                src={hero.image.src}
                width={600}
                height={500}
                alt={hero.image.alt}
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-7 -left-4 bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300 border border-gray-100 animate-pulse-slow">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{hero.floatingCards[0].value}</p>
                  <p className="text-sm text-gray-600">{hero.floatingCards[0].label}</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-7 -right-4 bg-white rounded-2xl shadow-2xl p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300 border border-gray-100 animate-pulse-slow" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{hero.floatingCards[1].value}</p>
                  <p className="text-sm text-gray-600">{hero.floatingCards[1].label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        {/* <div className="mt-8 animate-slide-up" style={{animationDelay: '1s'}}> */}
          {/* <form
            action="https://formspree.io/f/myzlwaoy"
            method="POST"
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-500"
          >
            <input type="hidden" name="_subject" value="New Coach Hire Quote Request - Belgium Buses" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 items-end">
              {/* Pickup Location */}
              {/* <div className="lg:col-span-3">
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-3">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span>Pickup Location</span>
                </label>
                <input
                  type="text"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleInputChange}
                  placeholder="Enter pickup address"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 hover:shadow-md"
                  required
                />
              </div> */}

              {/* Destination */}
              {/* <div className="lg:col-span-3">
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-3">
                  <MapPin className="h-4 w-4 text-green-600" />
                  <span>Destination</span>
                </label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  placeholder="Enter destination"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 hover:shadow-md"
                  required
                />
              </div> */}

              {/* Date */}
              {/* <div className="lg:col-span-2">
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-3">
                  <Calendar className="h-4 w-4 text-purple-600" />
                  <span>Travel Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 hover:shadow-md"
                  required
                />
              </div> */}

              {/* Passengers */}
              {/* <div className="lg:col-span-2">
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-3">
                  <Users className="h-4 w-4 text-orange-600" />
                  <span>Passengers</span>
                </label>
                <select
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 hover:shadow-md"
                  required
                >
                  <option value="">Select</option>
                  <option value="1-15">1-15 Passengers</option>
                  <option value="16-30">16-30 Passengers</option>
                  <option value="31-50">31-50 Passengers</option>
                  <option value="50+">50+ Passengers</option>
                </select>
              </div> */}

              {/* Get Quote Button */}
              {/* <div className="lg:col-span-2">
                <label className="text-sm font-semibold text-gray-700 mb-3 block opacity-0">Search</label>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                >
                  {/* Shine effect */}
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative flex items-center justify-center">
                    Get Quote
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span> */}
                {/* </button> */}
              {/* </div> */} 
            {/* </div> */}
          {/* // </form> */} 
        {/* // </div> */}
      </div>
    </section>
  );
}