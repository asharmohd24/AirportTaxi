"use client";

import { useState, useEffect, useRef } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  CheckCircle,
  Send,
  Building2,
  Star,
  Search,
  ChevronDown,
} from "lucide-react";
import { toast } from "sonner";
import { site, contactPage as cpData } from "../../data";

// Proper reCAPTCHA type declaration
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "1", // Set default to +1 initially
    service: "",
    passengers: "",
    date: "",
    time: "", // Added time field
    returnDate: "",
    returnTime: "", // Added return time field
    hasReturnDate: false,
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [, setIsDetecting] = useState(true); // Add loading state
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [minDate, setMinDate] = useState("");

  // Set minimum date to today on component mount
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  // Complete list of all country codes in the world
  const countryCodes = [
    { code: "93", name: "Afghanistan" },
    { code: "355", name: "Albania" },
    { code: "213", name: "Algeria" },
    { code: "376", name: "Andorra" },
    { code: "244", name: "Angola" },
    { code: "1", name: "Antigua and Barbuda" },
    { code: "54", name: "Argentina" },
    { code: "374", name: "Armenia" },
    { code: "61", name: "Australia" },
    { code: "43", name: "Austria" },
    { code: "994", name: "Azerbaijan" },
    { code: "1", name: "Bahamas" },
    { code: "973", name: "Bahrain" },
    { code: "880", name: "Bangladesh" },
    { code: "1", name: "Barbados" },
    { code: "375", name: "Belarus" },
    { code: "32", name: "Belgium" },
    { code: "501", name: "Belize" },
    { code: "229", name: "Benin" },
    { code: "975", name: "Bhutan" },
    { code: "591", name: "Bolivia" },
    { code: "387", name: "Bosnia and Herzegovina" },
    { code: "267", name: "Botswana" },
    { code: "55", name: "Brazil" },
    { code: "673", name: "Brunei" },
    { code: "359", name: "Bulgaria" },
    { code: "226", name: "Burkina Faso" },
    { code: "257", name: "Burundi" },
    { code: "238", name: "Cabo Verde" },
    { code: "855", name: "Cambodia" },
    { code: "237", name: "Cameroon" },
    { code: "1", name: "Canada" },
    { code: "236", name: "Central African Republic" },
    { code: "235", name: "Chad" },
    { code: "56", name: "Chile" },
    { code: "86", name: "China" },
    { code: "57", name: "Colombia" },
    { code: "269", name: "Comoros" },
    { code: "242", name: "Congo" },
    { code: "243", name: "Congo (Democratic Republic)" },
    { code: "506", name: "Costa Rica" },
    { code: "225", name: "Côte d'Ivoire" },
    { code: "385", name: "Croatia" },
    { code: "53", name: "Cuba" },
    { code: "357", name: "Cyprus" },
    { code: "420", name: "Czech Republic" },
    { code: "45", name: "Denmark" },
    { code: "253", name: "Djibouti" },
    { code: "1", name: "Dominica" },
    { code: "1", name: "Dominican Republic" },
    { code: "593", name: "Ecuador" },
    { code: "20", name: "Egypt" },
    { code: "503", name: "El Salvador" },
    { code: "240", name: "Equatorial Guinea" },
    { code: "291", name: "Eritrea" },
    { code: "372", name: "Estonia" },
    { code: "268", name: "Eswatini" },
    { code: "251", name: "Ethiopia" },
    { code: "679", name: "Fiji" },
    { code: "358", name: "Finland" },
    { code: "33", name: "France" },
    { code: "241", name: "Gabon" },
    { code: "220", name: "Gambia" },
    { code: "995", name: "Georgia" },
    { code: "49", name: "Germany" },
    { code: "233", name: "Ghana" },
    { code: "30", name: "Greece" },
    { code: "1", name: "Grenada" },
    { code: "502", name: "Guatemala" },
    { code: "224", name: "Guinea" },
    { code: "245", name: "Guinea-Bissau" },
    { code: "592", name: "Guyana" },
    { code: "509", name: "Haiti" },
    { code: "504", name: "Honduras" },
    { code: "36", name: "Hungary" },
    { code: "354", name: "Iceland" },
    { code: "91", name: "India" },
    { code: "62", name: "Indonesia" },
    { code: "98", name: "Iran" },
    { code: "964", name: "Iraq" },
    { code: "353", name: "Ireland" },
    { code: "972", name: "Israel" },
    { code: "39", name: "Italy" },
    { code: "1", name: "Jamaica" },
    { code: "81", name: "Japan" },
    { code: "962", name: "Jordan" },
    { code: "7", name: "Kazakhstan" },
    { code: "254", name: "Kenya" },
    { code: "686", name: "Kiribati" },
    { code: "850", name: "North Korea" },
    { code: "82", name: "South Korea" },
    { code: "965", name: "Kuwait" },
    { code: "996", name: "Kyrgyzstan" },
    { code: "856", name: "Laos" },
    { code: "371", name: "Latvia" },
    { code: "961", name: "Lebanon" },
    { code: "266", name: "Lesotho" },
    { code: "231", name: "Liberia" },
    { code: "218", name: "Libya" },
    { code: "423", name: "Liechtenstein" },
    { code: "370", name: "Lithuania" },
    { code: "352", name: "Luxembourg" },
    { code: "261", name: "Madagascar" },
    { code: "265", name: "Malawi" },
    { code: "60", name: "Malaysia" },
    { code: "960", name: "Maldives" },
    { code: "223", name: "Mali" },
    { code: "356", name: "Malta" },
    { code: "692", name: "Marshall Islands" },
    { code: "222", name: "Mauritania" },
    { code: "230", name: "Mauritius" },
    { code: "52", name: "Mexico" },
    { code: "691", name: "Micronesia" },
    { code: "373", name: "Moldova" },
    { code: "377", name: "Monaco" },
    { code: "976", name: "Mongolia" },
    { code: "382", name: "Montenegro" },
    { code: "212", name: "Morocco" },
    { code: "258", name: "Mozambique" },
    { code: "95", name: "Myanmar" },
    { code: "264", name: "Namibia" },
    { code: "674", name: "Nauru" },
    { code: "977", name: "Nepal" },
    { code: "31", name: "Netherlands" },
    { code: "64", name: "New Zealand" },
    { code: "505", name: "Nicaragua" },
    { code: "227", name: "Niger" },
    { code: "234", name: "Nigeria" },
    { code: "389", name: "North Macedonia" },
    { code: "47", name: "Norway" },
    { code: "968", name: "Oman" },
    { code: "92", name: "Pakistan" },
    { code: "680", name: "Palau" },
    { code: "970", name: "Palestine" },
    { code: "507", name: "Panama" },
    { code: "675", name: "Papua New Guinea" },
    { code: "595", name: "Paraguay" },
    { code: "51", name: "Peru" },
    { code: "63", name: "Philippines" },
    { code: "48", name: "Poland" },
    { code: "351", name: "Portugal" },
    { code: "974", name: "Qatar" },
    { code: "40", name: "Romania" },
    { code: "7", name: "Russia" },
    { code: "250", name: "Rwanda" },
    { code: "1", name: "Saint Kitts and Nevis" },
    { code: "1", name: "Saint Lucia" },
    { code: "1", name: "Saint Vincent and the Grenadines" },
    { code: "685", name: "Samoa" },
    { code: "378", name: "San Marino" },
    { code: "239", name: "Sao Tome and Principe" },
    { code: "966", name: "Saudi Arabia" },
    { code: "221", name: "Senegal" },
    { code: "381", name: "Serbia" },
    { code: "248", name: "Seychelles" },
    { code: "232", name: "Sierra Leone" },
    { code: "65", name: "Singapore" },
    { code: "421", name: "Slovakia" },
    { code: "386", name: "Slovenia" },
    { code: "677", name: "Solomon Islands" },
    { code: "252", name: "Somalia" },
    { code: "27", name: "South Africa" },
    { code: "211", name: "South Sudan" },
    { code: "34", name: "Spain" },
    { code: "94", name: "Sri Lanka" },
    { code: "249", name: "Sudan" },
    { code: "597", name: "Suriname" },
    { code: "46", name: "Sweden" },
    { code: "41", name: "Switzerland" },
    { code: "963", name: "Syria" },
    { code: "886", name: "Taiwan" },
    { code: "992", name: "Tajikistan" },
    { code: "255", name: "Tanzania" },
    { code: "66", name: "Thailand" },
    { code: "670", name: "Timor-Leste" },
    { code: "228", name: "Togo" },
    { code: "676", name: "Tonga" },
    { code: "1", name: "Trinidad and Tobago" },
    { code: "216", name: "Tunisia" },
    { code: "90", name: "Turkey" },
    { code: "993", name: "Turkmenistan" },
    { code: "688", name: "Tuvalu" },
    { code: "256", name: "Uganda" },
    { code: "380", name: "Ukraine" },
    { code: "971", name: "United Arab Emirates" },
    { code: "44", name: "United Kingdom" },
    { code: "1", name: "United States" },
    { code: "598", name: "Uruguay" },
    { code: "998", name: "Uzbekistan" },
    { code: "678", name: "Vanuatu" },
    { code: "379", name: "Vatican City" },
    { code: "58", name: "Venezuela" },
    { code: "84", name: "Vietnam" },
    { code: "967", name: "Yemen" },
    { code: "260", name: "Zambia" },
    { code: "263", name: "Zimbabwe" },
  ];

    // Filtered countries based on search
  const filteredCountries = countryCodes.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.code.includes(searchQuery)
  );

  // Load reCAPTCHA - REPLACE WITH YOUR ACTUAL SITE KEY
  useEffect(() => {
    const loadRecaptcha = () => {
      if (window.grecaptcha) {
        setRecaptchaLoaded(true);
        return;
      }

      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=site_key`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setRecaptchaLoaded(true);
      };
      script.onerror = () => {
        console.error("Failed to load reCAPTCHA");
        setRecaptchaLoaded(false);
      };
      document.head.appendChild(script);
    };

    loadRecaptcha();
  }, []);

  // Detect user's country on component mount (works in background)
  useEffect(() => {
    detectUserCountry();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const detectUserCountry = async () => {
    setIsDetecting(true);
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();

      console.log("IP Detection Result:", data); // Debug log

      if (data.country_calling_code) {
        // Auto-set the country code in the form silently
        setFormData((prev) => ({
          ...prev,
          countryCode: data.country_calling_code,
        }));
        console.log("Auto-filled country code:", data.country_calling_code); // Debug log
      } else {
        console.log("No country calling code found in response"); // Debug log
      }
    } catch (error) {
      console.error("IP detection failed:", error); // Debug log
      // Keep the default +1 if detection fails
    } finally {
      setIsDetecting(false);
    }
  };

  const handleCountrySelect = (code: string) => {
    setFormData((prev) => ({
      ...prev,
      countryCode: code,
    }));
    setIsDropdownOpen(false);
    setSearchQuery("");
  };

  const getRecaptchaToken = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha) {
        reject(new Error("reCAPTCHA not loaded"));
        return;
      }

      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute("site_key", {
            action: "submit",
          })
          .then((token: string) => {
            resolve(token);
          })
          .catch((error: unknown) => {
            reject(error);
          });
      });
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Date validation
    if (formData.date) {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset time part for accurate comparison

      if (selectedDate < today) {
        toast.error(cpData.toasts.datePast);
        return;
      }
    }

    // Return date validation
    if (formData.hasReturnDate && formData.returnDate) {
      const returnDate = new Date(formData.returnDate);
      const travelDate = new Date(formData.date);
      
      if (returnDate < travelDate) {
        toast.error(cpData.toasts.returnDateBefore);
        return;
      }
    }

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.service ||
      !formData.message
    ) {
      toast.error(cpData.toasts.validationError);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error(cpData.toasts.emailInvalid);
      return;
    }

    setSubmitting(true);

    try {
      // Get reCAPTCHA token
      let recaptchaToken = "";
      if (recaptchaLoaded) {
        try {
          recaptchaToken = await getRecaptchaToken();
        } catch (error) {
          console.error("reCAPTCHA error:", error);
          toast.error(cpData.toasts.captchaFail);
          setSubmitting(false);
          return;
        }
      }

      // Prepare form data for PHP submission - FIXED: Include countryCode explicitly
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("countryCode", formData.countryCode); // This was missing!
      formDataToSend.append("service", formData.service);
      formDataToSend.append("passengers", formData.passengers);
      formDataToSend.append("date", formData.date);
      formDataToSend.append("time", formData.time); // Added time
      formDataToSend.append("returnDate", formData.returnDate);
      formDataToSend.append("returnTime", formData.returnTime); // Added return time
      formDataToSend.append("hasReturnDate", formData.hasReturnDate.toString());
      formDataToSend.append("message", formData.message);
      formDataToSend.append("recaptcha_token", recaptchaToken);
      formDataToSend.append("form_type", "contact_page");
      formDataToSend.append("_subject", `New Contact Form Submission - ${site.name}`);

      // Submit to PHP endpoint with better error handling
      const response = await fetch("/contact.php", {
        method: "POST",
        body: formDataToSend,
      });

      // Check if response is OK
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        toast.success(cpData.toasts.success);

        // Reset form but keep country code
        setFormData({
          name: "",
          email: "",
          phone: "",
          countryCode: formData.countryCode, // Keep the country code
          service: "",
          passengers: "",
          date: "",
          time: "", // Reset time
          returnDate: "",
          returnTime: "", // Reset return time
          hasReturnDate: false,
          message: "",
        });
      } else {
        toast.error(
          result.message || cpData.toasts.serverError
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // More specific error messages
      if (error instanceof TypeError) {
        if (error.message.includes("Failed to fetch")) {
          toast.error(
            cpData.toasts.networkError
          );
        } else {
          toast.error(cpData.toasts.connectionError);
        }
      } else {
        toast.error(cpData.toasts.unexpectedError);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const methodIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Phone, Mail, MessageCircle, MapPin,
  };

  const contactMethods = cpData.contactMethods.map((m) => ({
    ...m,
    icon: methodIconMap[m.iconName] || MapPin,
  }));

  const services = cpData.services;

  return (
    <>
      <Breadcrumbs
        crumbs={[{ name: "Home", href: "/" }, { name: "Contact" }]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20 -translate-x-48 translate-y-48"></div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold shadow-sm animate-fade-in">
              <MessageCircle className="h-4 w-4 mr-2" />
              {cpData.heroBadge}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight animate-slide-up">
              {cpData.heroHeading.line1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {cpData.heroHeading.highlight}
              </span>
            </h1>
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              {cpData.heroDescription}
            </p>

            {/* Quick Stats */}
            <div
              className="grid grid-cols-3 gap-4 max-w-md mx-auto animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              {cpData.heroStats.map((stat, i) => (
                <div key={i} className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
                  <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section - Original Layout */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form - Left Side */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 animate-slide-up">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Send className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {cpData.formTitle}
                  </h2>
                  <p className="text-gray-600">
                    {cpData.formSubtitle}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Add reCAPTCHA badge */}
                <div
                  className="g-recaptcha"
                  data-sitekey="site_key"
                  data-size="invisible"
                ></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {cpData.fields.fullName}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder={cpData.placeholders.fullName}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {cpData.fields.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder={cpData.placeholders.email}
                    />
                  </div>
                </div>

                {/* Phone Number - Single Column */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {cpData.fields.phone}
                  </label>
                  <div className="flex space-x-2">
                    {/* Custom Country Code Dropdown */}
                    <div className="relative w-32" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 flex items-center justify-between bg-white hover:bg-gray-50 h-[52px]"
                      >
                        <span className="text-gray-700 font-medium">
                          {formData.countryCode
                            ? `+${formData.countryCode.replace("+", "")}`
                            : "+1"}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 text-gray-400 transition-transform ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-xl shadow-lg z-50 max-h-80 overflow-hidden w-80">
                          {/* Search Input */}
                          <div className="p-3 border-b border-gray-200">
                            <div className="relative">
                              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                              <input
                                type="text"
                                placeholder={cpData.searchPlaceholder}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                autoFocus
                              />
                            </div>
                          </div>

                          {/* Country List */}
                          <div className="max-h-60 overflow-y-auto">
                            {filteredCountries.length > 0 ? (
                              filteredCountries.map((country) => (
                                <button
                                  key={`${country.code}-${country.name}`}
                                  type="button"
                                  onClick={() =>
                                    handleCountrySelect(country.code)
                                  }
                                  className={`w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors flex items-center justify-between border-b border-gray-100 last:border-b-0 ${
                                    formData.countryCode === country.code
                                      ? "bg-blue-50 text-blue-600"
                                      : "text-gray-700"
                                  }`}
                                >
                                  <div className="flex items-center space-x-3">
                                    <span className="font-medium text-gray-900">
                                      +{country.code}
                                    </span>
                                    <span className="text-gray-600">
                                      {country.name}
                                    </span>
                                  </div>
                                  {formData.countryCode === country.code && (
                                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                                  )}
                                </button>
                              ))
                            ) : (
                              <div className="px-4 py-3 text-gray-500 text-center">
                                {cpData.noCountriesFound}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder={cpData.placeholders.phone}
                    />
                  </div>
                </div>

                {/* Service Needed - Single Column */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {cpData.fields.serviceNeeded}
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  >
                    <option value="">{cpData.placeholders.serviceSelect}</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {cpData.fields.passengers}
                    </label>
                    <input
                      type="number"
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder={cpData.placeholders.passengers}
                      min="1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {cpData.fields.travelDate}
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={minDate} // This prevents past date selection
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Added Time Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {cpData.fields.pickupTime}
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  />
                </div>

                {/* Return Date Section */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="hasReturnDate"
                      checked={formData.hasReturnDate}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          hasReturnDate: e.target.checked,
                          returnDate: e.target.checked ? formData.returnDate : "",
                          returnTime: e.target.checked ? formData.returnTime : "",
                        });
                      }}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="hasReturnDate" className="text-sm font-medium text-gray-700">
                      {cpData.fields.returnTrip}
                    </label>
                  </div>

                  {formData.hasReturnDate && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {cpData.fields.returnDate}
                        </label>
                        <input
                          type="date"
                          name="returnDate"
                          value={formData.returnDate}
                          onChange={handleChange}
                          min={formData.date || minDate}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {cpData.fields.returnTime}
                        </label>
                        <input
                          type="time"
                          name="returnTime"
                          value={formData.returnTime}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {cpData.fields.message}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                    placeholder={cpData.placeholders.message}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting || !recaptchaLoaded}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      {cpData.submittingButton}
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>{cpData.submitButton}</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info & Features - Right Side */}
            <div
              className="space-y-8 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              {/* Office Info */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {cpData.officeTitle}
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">{cpData.officeAddress}</p>
                      <p className="text-gray-600 leading-tight">
                        {site.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {cpData.officeHoursLabel}
                      </p>
                      <p className="text-gray-600">{cpData.officeHours}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {cpData.phoneLabel}
                      </p>
                      <p className="text-gray-600">{site.phone}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl shadow-xl p-8 text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <Star className="h-6 w-6 text-yellow-300" />
                  <h3 className="text-2xl font-bold">
                    {cpData.whyChooseTitle}
                  </h3>
                </div>
                <div className="space-y-4">
                  {cpData.whyChooseFeatures.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                      <span className="text-blue-50">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={method.title}
                href={method.action}
                className="group p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                    className={`p-4 ${method.bgColor} rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <method.icon className={`h-8 w-8 ${method.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                      {method.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {method.description}
                    </p>
                    <p className="text-sm font-semibold text-gray-900 leading-tight break-words">
                      {method.details}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}