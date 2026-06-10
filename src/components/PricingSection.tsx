"use client";

import { Check } from "lucide-react";
import ContactModal from "@/components/QuoteModal";

const packages = [
  {
    title: "Standard",
    price: "$99",
    frequency: "per day",
    features: [
      "Comfort seating",
      "Air conditioning",
      "Professional driver",
      "Room for luggage",
      "Safety first"
    ],
  },
  {
    title: "Executive",
    price: "$149",
    frequency: "per day",
    features: [
      "All Standard features",
      "On-board Wi-Fi",
      "Complimentary refreshments",
      "Extra legroom",
      "Priority boarding"
    ],
  },
  {
    title: "Premium",
    price: "$199",
    frequency: "per day",
    features: [
      "All Executive features",
      "Reclining leather seats",
      "Private restroom",
      "Premium sound system",
      "Dedicated concierge"
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="inline-block bg-blue-100 text-blue-600 px-3 py-2 rounded-full text-sm font-semibold ">
          Pricing Packages
        </h3>
        <h2 className="mt-2 text-3xl font-bold text-gray-900">
          Choose the Best Fit for Your Journey
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Select from our flexible packages designed to cater to all travel needs, from group outings to luxury transfers.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="flex flex-col bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {pkg.title}
              </h3>
              <div className="mt-4 flex items-baseline justify-center">
                <span className="text-4xl font-extrabold text-gray-900">
                  {pkg.price}
                </span>
                <span className="ml-1 text-gray-600">{pkg.frequency}</span>
              </div>
              <ul className="mt-6 space-y-3 text-left flex-1 mb-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div>
              <ContactModal>
               

              </ContactModal>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
