"use client";

import React, { useState } from "react";
import {
  Users,
  Fuel,
  Cog,
  Shield,
  Car,
  Bus,
  ChevronDown,
  Armchair,
  Accessibility,
  Crown,
  Star,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { fleet as fleetData } from "../data";

export default function FleetSection() {
  const [activeCategory, setActiveCategory] = useState<
    "cars" | "minibuses" | "coaches"
  >("cars");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = fleetData.categories.map((cat) => ({
    key: cat.key as "cars" | "minibuses" | "coaches",
    name: cat.name,
    icon: cat.iconName === "Car" ? Car : Bus,
  }));

  const currentFleet = fleetData.vehicles[activeCategory];
  const activeCategoryData = categories.find(
    (cat) => cat.key === activeCategory
  );

  const CurrentCategoryIcon = activeCategoryData?.icon || Car;

  type VehicleClass = "standard" | "executive" | "luxury";

  const classConfig: Record<
    VehicleClass,
    {
      icon: React.ComponentType<{ className?: string }>;
      color: string;
      label: string;
      bgColor: string;
    }
  > = {
    standard: {
      icon: CheckCircle,
      color: "text-blue-700",
      label: fleetData.vehicleLabels.classes.standard,
      bgColor: "bg-blue-50 border-blue-200",
    },
    executive: {
      icon: Star,
      color: "text-purple-700",
      label: fleetData.vehicleLabels.classes.executive,
      bgColor: "bg-purple-50 border-purple-200",
    },
    luxury: {
      icon: Crown,
      color: "text-amber-700",
      label: fleetData.vehicleLabels.classes.luxury,
      bgColor: "bg-amber-50 border-amber-200",
    },
  };

  return (
    <section
      id="fleet"
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6 shadow-sm">
            <Shield className="h-4 w-4 mr-2" />
            {fleetData.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {fleetData.heading}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {fleetData.description}
          </p>
        </div>

        {/* Category Navigation - Desktop */}
        <div className="hidden md:flex justify-center gap-3 mb-16">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.key;

            return (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-2xl border-2 transition-all duration-300 font-semibold ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-600 shadow-lg shadow-blue-500/25 scale-105"
                    : "bg-white text-gray-700 border-gray-200 hover:border-blue-400 hover:shadow-md hover:scale-105"
                }`}
              >
                <IconComponent className="h-5 w-5" />
                <span className="whitespace-nowrap">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Category Navigation - Mobile Dropdown */}
        <div className="md:hidden relative mb-12">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 font-semibold"
          >
            <div className="flex items-center space-x-3">
              <CurrentCategoryIcon className="h-5 w-5 text-blue-600" />
              <span>{activeCategoryData?.name}</span>
            </div>
            <ChevronDown
              className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-2xl shadow-lg z-20 overflow-hidden">
              {categories.map((category) => {
                const IconComponent = category.icon;
                const isActive = activeCategory === category.key;

                return (
                  <button
                    key={category.key}
                    onClick={() => {
                      setActiveCategory(category.key);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-6 py-4 transition-all duration-200 border-b border-gray-100 last:border-b-0 ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {currentFleet.map((vehicle) => {
            const vehicleClass = vehicle.vehicleClass as VehicleClass;
            const ClassIcon = classConfig[vehicleClass].icon;
            const classColor = classConfig[vehicleClass].color;
            const classLabel = classConfig[vehicleClass].label;
            const classBgColor = classConfig[vehicleClass].bgColor;

            return (
              <div
                key={vehicle.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group flex flex-col h-full"
              >
                {/* Vehicle Image with Next.js Image optimization */}
                <div className="relative h-72 overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-white flex items-center justify-center">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      width={500}
                      height={300}
                      className="h-5/6 w-5/6 object-contain group-hover:scale-105 transition-transform duration-500"
                      style={{ 
                        width: 'auto',
                        height: 'auto',
                        maxWidth: '80%',
                        maxHeight: '80%'
                      }}
                      priority={vehicle.id <= 3} // Only prioritize first few images
                    />
                  </div>
                  {/* Badges Container */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    {/* Capacity Badge */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-3 py-2 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                          {vehicle.capacity}
                        </span>
                      </div>
                    </div>

                    {/* Class Badge */}
                    <div
                      className={`${classBgColor} rounded-2xl px-3 py-2 shadow-lg border`}
                    >
                      <div className="flex items-center space-x-2">
                        <ClassIcon className={`h-4 w-4 ${classColor}`} />
                        <span
                          className={`text-sm font-semibold ${classColor} whitespace-nowrap`}
                        >
                          {classLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Wheelchair Badge */}
                  {vehicle.wheelchairAccessible && (
                    <div className="absolute bottom-4 left-4 bg-green-500 text-white rounded-2xl px-3 py-2 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <Accessibility className="h-4 w-4" />
                        <span className="text-sm font-semibold whitespace-nowrap">
                          {fleetData.vehicleLabels.wheelchairAccess}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Vehicle Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {vehicle.name}
                  </h3>

                  {/* Specifications Grid - Tighter Layout */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center space-x-2 text-gray-600 min-w-0 flex-1">
                        <Armchair className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-sm font-medium whitespace-nowrap">
                          {fleetData.vehicleLabels.seats}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                        {vehicle.specs.seats}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center space-x-2 text-gray-600 min-w-0 flex-1">
                        <Fuel className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm font-medium whitespace-nowrap">
                          {fleetData.vehicleLabels.fuelType}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                        {vehicle.specs.fuel}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center space-x-2 text-gray-600 min-w-0 flex-1">
                        <Cog className="h-4 w-4 text-purple-600 flex-shrink-0" />
                        <span className="text-sm font-medium whitespace-nowrap">
                          {fleetData.vehicleLabels.transmission}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                        {vehicle.specs.transmission}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fleet Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetData.stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}