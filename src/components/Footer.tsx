"use client";

import { MapPin, Phone, Mail } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { site, footer as footerData } from "../data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-9 lg:gap-12">
          {/* Contact */}
          <div className="md:col-span-2 lg:col-span-1 text-center md:text-left">
            <div className="space-y-6">
              {/* Logo */}
              <Link href="/" className="flex flex-col justify-center md:justify-start items-center md:items-start gap-2">
                <Image src={site.logo} width={180} height={58} alt={footerData.logoAlt} />
                <span className="text-2xl font-bold">
                  {(() => {
                    const parts = site.name.split(" ");
                    const city = parts[parts.length - 1];
                    const brand = parts.slice(0, -1).join(" ");
                    return <><span style={{ color: "#fe7c11" }}>{brand}</span>{" "}<span style={{ color: "#3282fd" }}>{city}</span></>;
                  })()}
                </span>
              </Link>

              <div className="space-y-4">
                <div className="flex justify-center md:justify-start items-start space-x-3">
                  <MapPin className="h-6 w-6 text-blue-400 mt-0.5 flex-shrink-0" />
                  <address className="not-italic text-base">
                    {site.address}
                  </address>
                </div>
                <div className="flex justify-center md:justify-start items-center space-x-3">
                  <Phone className="h-6 w-6 text-blue-400" />
                  <a href={site.phoneHref} className="text-base hover:text-white transition-colors">{site.phone}</a>
                </div>
                <div className="flex justify-center md:justify-start items-center space-x-3">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <a href={site.emailHref} className="text-base hover:text-white transition-colors">{site.email}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-6 text-lg">{footerData.services.heading}</h4>
            <ul className="space-y-3 text-base">
              {footerData.services.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors inline-block py-1">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-6 text-lg">{footerData.menu.heading}</h4>
            <ul className="space-y-3 text-base">
              {footerData.menu.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors inline-block py-1">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500">
          © {new Date().getFullYear()} {footerData.copyright}
        </div>
      </div>
    </footer>
  );
}