"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { site, navigation as navData } from "../data";

interface SubmenuItem {
  name: string;
  href: string;
}

interface NavigationItem {
  name: string;
  href: string;
  submenu?: SubmenuItem[];
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation: NavigationItem[] = navData.items as NavigationItem[];

  // Check if a navigation item is active
  const isActive = (href: string, submenu?: SubmenuItem[]) => {
    // Exact match
    if (pathname === href) return true;
    
    // For Services and its submenu items
    if (submenu) {
      return submenu.some(item => pathname === item.href);
    }
    
    // For other pages, check if pathname starts with href (for nested routes)
    if (href !== "/") {
      return pathname.startsWith(href);
    }
    
    return false;
  };

  const linkClasses = (href: string, submenu?: SubmenuItem[]) => {
    const base = "px-4 py-2 rounded-lg text-base font-medium transition-all duration-300";
    const active = isActive(href, submenu);
    return active
      ? `${base} text-blue-600 bg-blue-50 font-semibold`
      : `${base} text-gray-700 hover:text-blue-600 hover:bg-gray-50`;
  };

  const mobileLinkClasses = (href: string, submenu?: SubmenuItem[]) => {
    const base = "px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 flex items-center justify-between";
    const active = isActive(href, submenu);
    return active
      ? `${base} text-blue-600 bg-blue-50 font-semibold`
      : `${base} text-gray-700 hover:text-blue-600 hover:bg-gray-50`;
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg py-2"
          : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-24 h-10 lg:w-48 lg:h-16 shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src={site.logo}
              fill
              className="object-contain"
              alt={site.logoAlt}
              priority
            />
          </div>
          <span className="text-sm sm:text-xl font-bold whitespace-nowrap">
            {(() => {
              const parts = site.name.split(" ");
              const city = parts[parts.length - 1];
              const brand = parts.slice(0, -1).join(" ");
              return <><span style={{ color: "#fe7c11" }}>{brand}</span>{" "}<span style={{ color: "#3282fd" }}>{city}</span></>;
            })()}
          </span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
          {navigation.map((item) => (
            <div 
              key={item.href} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.submenu ? (
                <>
                  <button className={`${linkClasses(item.href, item.submenu)} flex items-center gap-1`}>
                    {item.name}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className={`absolute top-full left-0 w-56 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 transform ${
                    activeDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                  }`}>
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`block px-4 py-3 transition-colors first:rounded-t-xl last:rounded-b-xl ${
                          pathname === subItem.href
                            ? "text-blue-600 bg-blue-50 font-semibold"
                            : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={item.href} className={linkClasses(item.href)}>
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Contact */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-700 bg-blue-50 px-6 py-3 rounded-xl hover:bg-blue-100 transition-all duration-300 group">
            <Phone className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
            <a
              href={site.phoneHref}
              className="font-semibold hover:text-blue-600 transition-colors text-lg"
            >
              {site.phone}
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors bg-gray-100 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={navData.mobileMenuAriaLabel}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-xl border-t border-gray-200 transition-all duration-300 ${
          mobileOpen 
            ? "max-h-screen opacity-100 visible" 
            : "max-h-0 opacity-0 invisible"
        }`}
        style={{
          height: mobileOpen ? 'auto' : '0',
          overflow: mobileOpen ? 'visible' : 'hidden'
        }}
      >
        <nav className="px-4 py-6 space-y-2">
          {navigation.map((item) => (
            <div key={item.href}>
              {item.submenu ? (
                <>
                  {/* Services dropdown trigger for mobile */}
                  <button
                    className={mobileLinkClasses(item.href, item.submenu)}
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform duration-300 ${
                        mobileServicesOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {/* Services dropdown content for mobile */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      mobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="ml-4 mt-2 space-y-1 border-l-2 border-gray-200 pl-4">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`flex items-center space-x-2 px-4 py-3 transition-colors rounded-lg group ${
                            pathname === subItem.href
                              ? "text-blue-600 bg-blue-50 font-semibold"
                              : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                          }`}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileServicesOpen(false);
                          }}
                        >
                          <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-blue-600 transition-colors" />
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={mobileLinkClasses(item.href)}
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{item.name}</span>
                </Link>
              )}
            </div>
          ))}

          {/* Mobile Contact */}
          <div className="pt-4 border-t border-gray-200 mt-4">
            <div className="flex items-center space-x-2 text-gray-700 bg-blue-50 p-4 rounded-lg">
              <Phone className="h-5 w-5 text-blue-600" />
              <a 
                href="tel:+442038343211" 
                className="font-semibold text-lg hover:text-blue-600 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {site.phone}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}