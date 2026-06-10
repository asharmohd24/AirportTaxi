"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { toast } from "sonner";
import {
  MapPin,
  Calendar,
  Users,
  Building2,
  GraduationCap,
  Plane,
  Home,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Search,
  Clock,
} from "lucide-react";
import { quoteForm as qfContent, site } from "../data";

// reCAPTCHA type declaration
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

interface ContactFormProps {
  onSuccess?: () => void;
}

// Country data with codes
const countries = [
  { code: "AF", name: "Afghanistan", dialCode: "+93" },
  { code: "AL", name: "Albania", dialCode: "+355" },
  { code: "DZ", name: "Algeria", dialCode: "+213" },
  { code: "AD", name: "Andorra", dialCode: "+376" },
  { code: "AO", name: "Angola", dialCode: "+244" },
  { code: "AG", name: "Antigua and Barbuda", dialCode: "+1" },
  { code: "AR", name: "Argentina", dialCode: "+54" },
  { code: "AM", name: "Armenia", dialCode: "+374" },
  { code: "AU", name: "Australia", dialCode: "+61" },
  { code: "AT", name: "Austria", dialCode: "+43" },
  { code: "AZ", name: "Azerbaijan", dialCode: "+994" },
  { code: "BS", name: "Bahamas", dialCode: "+1" },
  { code: "BH", name: "Bahrain", dialCode: "+973" },
  { code: "BD", name: "Bangladesh", dialCode: "+880" },
  { code: "BB", name: "Barbados", dialCode: "+1" },
  { code: "BY", name: "Belarus", dialCode: "+375" },
  { code: "BE", name: "Belgium", dialCode: "+32" },
  { code: "BZ", name: "Belize", dialCode: "+501" },
  { code: "BJ", name: "Benin", dialCode: "+229" },
  { code: "BT", name: "Bhutan", dialCode: "+975" },
  { code: "BO", name: "Bolivia", dialCode: "+591" },
  { code: "BA", name: "Bosnia and Herzegovina", dialCode: "+387" },
  { code: "BW", name: "Botswana", dialCode: "+267" },
  { code: "BR", name: "Brazil", dialCode: "+55" },
  { code: "BN", name: "Brunei", dialCode: "+673" },
  { code: "BG", name: "Bulgaria", dialCode: "+359" },
  { code: "BF", name: "Burkina Faso", dialCode: "+226" },
  { code: "BI", name: "Burundi", dialCode: "+257" },
  { code: "CV", name: "Cabo Verde", dialCode: "+238" },
  { code: "KH", name: "Cambodia", dialCode: "+855" },
  { code: "CM", name: "Cameroon", dialCode: "+237" },
  { code: "CA", name: "Canada", dialCode: "+1" },
  { code: "CF", name: "Central African Republic", dialCode: "+236" },
  { code: "TD", name: "Chad", dialCode: "+235" },
  { code: "CL", name: "Chile", dialCode: "+56" },
  { code: "CN", name: "China", dialCode: "+86" },
  { code: "CO", name: "Colombia", dialCode: "+57" },
  { code: "KM", name: "Comoros", dialCode: "+269" },
  { code: "CG", name: "Congo", dialCode: "+242" },
  { code: "CD", name: "Congo (Democratic Republic)", dialCode: "+243" },
  { code: "CR", name: "Costa Rica", dialCode: "+506" },
  { code: "CI", name: "Côte d'Ivoire", dialCode: "+225" },
  { code: "HR", name: "Croatia", dialCode: "+385" },
  { code: "CU", name: "Cuba", dialCode: "+53" },
  { code: "CY", name: "Cyprus", dialCode: "+357" },
  { code: "CZ", name: "Czech Republic", dialCode: "+420" },
  { code: "DK", name: "Denmark", dialCode: "+45" },
  { code: "DJ", name: "Djibouti", dialCode: "+253" },
  { code: "DM", name: "Dominica", dialCode: "+1" },
  { code: "DO", name: "Dominican Republic", dialCode: "+1" },
  { code: "EC", name: "Ecuador", dialCode: "+593" },
  { code: "EG", name: "Egypt", dialCode: "+20" },
  { code: "SV", name: "El Salvador", dialCode: "+503" },
  { code: "GQ", name: "Equatorial Guinea", dialCode: "+240" },
  { code: "ER", name: "Eritrea", dialCode: "+291" },
  { code: "EE", name: "Estonia", dialCode: "+372" },
  { code: "SZ", name: "Eswatini", dialCode: "+268" },
  { code: "ET", name: "Ethiopia", dialCode: "+251" },
  { code: "FJ", name: "Fiji", dialCode: "+679" },
  { code: "FI", name: "Finland", dialCode: "+358" },
  { code: "FR", name: "France", dialCode: "+33" },
  { code: "GA", name: "Gabon", dialCode: "+241" },
  { code: "GM", name: "Gambia", dialCode: "+220" },
  { code: "GE", name: "Georgia", dialCode: "+995" },
  { code: "DE", name: "Germany", dialCode: "+49" },
  { code: "GH", name: "Ghana", dialCode: "+233" },
  { code: "GR", name: "Greece", dialCode: "+30" },
  { code: "GD", name: "Grenada", dialCode: "+1" },
  { code: "GT", name: "Guatemala", dialCode: "+502" },
  { code: "GN", name: "Guinea", dialCode: "+224" },
  { code: "GW", name: "Guinea-Bissau", dialCode: "+245" },
  { code: "GY", name: "Guyana", dialCode: "+592" },
  { code: "HT", name: "Haiti", dialCode: "+509" },
  { code: "HN", name: "Honduras", dialCode: "+504" },
  { code: "HU", name: "Hungary", dialCode: "+36" },
  { code: "IS", name: "Iceland", dialCode: "+354" },
  { code: "IN", name: "India", dialCode: "+91" },
  { code: "ID", name: "Indonesia", dialCode: "+62" },
  { code: "IR", name: "Iran", dialCode: "+98" },
  { code: "IQ", name: "Iraq", dialCode: "+964" },
  { code: "IE", name: "Ireland", dialCode: "+353" },
  { code: "IL", name: "Israel", dialCode: "+972" },
  { code: "IT", name: "Italy", dialCode: "+39" },
  { code: "JM", name: "Jamaica", dialCode: "+1" },
  { code: "JP", name: "Japan", dialCode: "+81" },
  { code: "JO", name: "Jordan", dialCode: "+962" },
  { code: "KZ", name: "Kazakhstan", dialCode: "+7" },
  { code: "KE", name: "Kenya", dialCode: "+254" },
  { code: "KI", name: "Kiribati", dialCode: "+686" },
  { code: "KP", name: "North Korea", dialCode: "+850" },
  { code: "KR", name: "South Korea", dialCode: "+82" },
  { code: "KW", name: "Kuwait", dialCode: "+965" },
  { code: "KG", name: "Kyrgyzstan", dialCode: "+996" },
  { code: "LA", name: "Laos", dialCode: "+856" },
  { code: "LV", name: "Latvia", dialCode: "+371" },
  { code: "LB", name: "Lebanon", dialCode: "+961" },
  { code: "LS", name: "Lesotho", dialCode: "+266" },
  { code: "LR", name: "Liberia", dialCode: "+231" },
  { code: "LY", name: "Libya", dialCode: "+218" },
  { code: "LI", name: "Liechtenstein", dialCode: "+423" },
  { code: "LT", name: "Lithuania", dialCode: "+370" },
  { code: "LU", name: "Luxembourg", dialCode: "+352" },
  { code: "MG", name: "Madagascar", dialCode: "+261" },
  { code: "MW", name: "Malawi", dialCode: "+265" },
  { code: "MY", name: "Malaysia", dialCode: "+60" },
  { code: "MV", name: "Maldives", dialCode: "+960" },
  { code: "ML", name: "Mali", dialCode: "+223" },
  { code: "MT", name: "Malta", dialCode: "+356" },
  { code: "MH", name: "Marshall Islands", dialCode: "+692" },
  { code: "MR", name: "Mauritania", dialCode: "+222" },
  { code: "MU", name: "Mauritius", dialCode: "+230" },
  { code: "MX", name: "Mexico", dialCode: "+52" },
  { code: "FM", name: "Micronesia", dialCode: "+691" },
  { code: "MD", name: "Moldova", dialCode: "+373" },
  { code: "MC", name: "Monaco", dialCode: "+377" },
  { code: "MN", name: "Mongolia", dialCode: "+976" },
  { code: "ME", name: "Montenegro", dialCode: "+382" },
  { code: "MA", name: "Morocco", dialCode: "+212" },
  { code: "MZ", name: "Mozambique", dialCode: "+258" },
  { code: "MM", name: "Myanmar", dialCode: "+95" },
  { code: "NA", name: "Namibia", dialCode: "+264" },
  { code: "NR", name: "Nauru", dialCode: "+674" },
  { code: "NP", name: "Nepal", dialCode: "+977" },
  { code: "NL", name: "Netherlands", dialCode: "+31" },
  { code: "NZ", name: "New Zealand", dialCode: "+64" },
  { code: "NI", name: "Nicaragua", dialCode: "+505" },
  { code: "NE", name: "Niger", dialCode: "+227" },
  { code: "NG", name: "Nigeria", dialCode: "+234" },
  { code: "MK", name: "North Macedonia", dialCode: "+389" },
  { code: "NO", name: "Norway", dialCode: "+47" },
  { code: "OM", name: "Oman", dialCode: "+968" },
  { code: "PK", name: "Pakistan", dialCode: "+92" },
  { code: "PW", name: "Palau", dialCode: "+680" },
  { code: "PS", name: "Palestine", dialCode: "+970" },
  { code: "PA", name: "Panama", dialCode: "+507" },
  { code: "PG", name: "Papua New Guinea", dialCode: "+675" },
  { code: "PY", name: "Paraguay", dialCode: "+595" },
  { code: "PE", name: "Peru", dialCode: "+51" },
  { code: "PH", name: "Philippines", dialCode: "+63" },
  { code: "PL", name: "Poland", dialCode: "+48" },
  { code: "PT", name: "Portugal", dialCode: "+351" },
  { code: "QA", name: "Qatar", dialCode: "+974" },
  { code: "RO", name: "Romania", dialCode: "+40" },
  { code: "RU", name: "Russia", dialCode: "+7" },
  { code: "RW", name: "Rwanda", dialCode: "+250" },
  { code: "KN", name: "Saint Kitts and Nevis", dialCode: "+1" },
  { code: "LC", name: "Saint Lucia", dialCode: "+1" },
  { code: "VC", name: "Saint Vincent and the Grenadines", dialCode: "+1" },
  { code: "WS", name: "Samoa", dialCode: "+685" },
  { code: "SM", name: "San Marino", dialCode: "+378" },
  { code: "ST", name: "Sao Tome and Principe", dialCode: "+239" },
  { code: "SA", name: "Saudi Arabia", dialCode: "+966" },
  { code: "SN", name: "Senegal", dialCode: "+221" },
  { code: "RS", name: "Serbia", dialCode: "+381" },
  { code: "SC", name: "Seychelles", dialCode: "+248" },
  { code: "SL", name: "Sierra Leone", dialCode: "+232" },
  { code: "SG", name: "Singapore", dialCode: "+65" },
  { code: "SK", name: "Slovakia", dialCode: "+421" },
  { code: "SI", name: "Slovenia", dialCode: "+386" },
  { code: "SB", name: "Solomon Islands", dialCode: "+677" },
  { code: "SO", name: "Somalia", dialCode: "+252" },
  { code: "ZA", name: "South Africa", dialCode: "+27" },
  { code: "SS", name: "South Sudan", dialCode: "+211" },
  { code: "ES", name: "Spain", dialCode: "+34" },
  { code: "LK", name: "Sri Lanka", dialCode: "+94" },
  { code: "SD", name: "Sudan", dialCode: "+249" },
  { code: "SR", name: "Suriname", dialCode: "+597" },
  { code: "SE", name: "Sweden", dialCode: "+46" },
  { code: "CH", name: "Switzerland", dialCode: "+41" },
  { code: "SY", name: "Syria", dialCode: "+963" },
  { code: "TW", name: "Taiwan", dialCode: "+886" },
  { code: "TJ", name: "Tajikistan", dialCode: "+992" },
  { code: "TZ", name: "Tanzania", dialCode: "+255" },
  { code: "TH", name: "Thailand", dialCode: "+66" },
  { code: "TL", name: "Timor-Leste", dialCode: "+670" },
  { code: "TG", name: "Togo", dialCode: "+228" },
  { code: "TO", name: "Tonga", dialCode: "+676" },
  { code: "TT", name: "Trinidad and Tobago", dialCode: "+1" },
  { code: "TN", name: "Tunisia", dialCode: "+216" },
  { code: "TR", name: "Turkey", dialCode: "+90" },
  { code: "TM", name: "Turkmenistan", dialCode: "+993" },
  { code: "TV", name: "Tuvalu", dialCode: "+688" },
  { code: "UG", name: "Uganda", dialCode: "+256" },
  { code: "UA", name: "Ukraine", dialCode: "+380" },
  { code: "AE", name: "United Arab Emirates", dialCode: "+971" },
  { code: "GB", name: "United Kingdom", dialCode: "+44" },
  { code: "US", name: "United States", dialCode: "+1" },
  { code: "UY", name: "Uruguay", dialCode: "+598" },
  { code: "UZ", name: "Uzbekistan", dialCode: "+998" },
  { code: "VU", name: "Vanuatu", dialCode: "+678" },
  { code: "VA", name: "Vatican City", dialCode: "+379" },
  { code: "VE", name: "Venezuela", dialCode: "+58" },
  { code: "VN", name: "Vietnam", dialCode: "+84" },
  { code: "YE", name: "Yemen", dialCode: "+967" },
  { code: "ZM", name: "Zambia", dialCode: "+260" },
  { code: "ZW", name: "Zimbabwe", dialCode: "+263" },
];

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    reason_for_travel: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    pickup: "",
    destination: "",
    date: "",
    time: "",
    returnDate: "",
    returnTime: "",
    hasReturnDate: false,
    passengers: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Date/time picker refs and open state
  const dateInputRef = useRef<HTMLInputElement>(null);
  const timeInputRef = useRef<HTMLInputElement>(null);
  const returnDateInputRef = useRef<HTMLInputElement>(null);
  const returnTimeInputRef = useRef<HTMLInputElement>(null);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [timePickerOpen, setTimePickerOpen] = useState(false);
  const [returnDatePickerOpen, setReturnDatePickerOpen] = useState(false);
  const [returnTimePickerOpen, setReturnTimePickerOpen] = useState(false);

  const togglePicker = (
    ref: React.RefObject<HTMLInputElement | null>,
    isOpen: boolean,
    setOpen: (v: boolean) => void
  ) => {
    if (!ref.current) return;
    if (isOpen) {
      ref.current.blur();
      setOpen(false);
    } else {
      ref.current.showPicker();
      setOpen(true);
    }
  };

  // Refs for location inputs and suggestions
  const pickupInputRef = useRef<HTMLInputElement>(null);
  const destinationInputRef = useRef<HTMLInputElement>(null);
  const pickupContainerRef = useRef<HTMLDivElement>(null);
  const destinationContainerRef = useRef<HTMLDivElement>(null);
  const autocompleteServiceRef = useRef<google.maps.places.AutocompleteService | null>(null);
  const suggestionsDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [pickupSuggestions, setPickupSuggestions] = useState<google.maps.places.AutocompletePrediction[]>([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState<google.maps.places.AutocompletePrediction[]>([]);
  const [showPickupSuggestions, setShowPickupSuggestions] = useState(false);
  const [showDestinationSuggestions, setShowDestinationSuggestions] = useState(false);

  const initializeAutocomplete = useCallback(() => {
    if (!window.google?.maps?.places) return;
    autocompleteServiceRef.current = new google.maps.places.AutocompleteService();
  }, []);

  const fetchSuggestions = useCallback((input: string, field: "pickup" | "destination") => {
    if (!autocompleteServiceRef.current || input.length < 3) return;
    autocompleteServiceRef.current.getPlacePredictions(
      { input, types: ["establishment", "geocode"] },
      (predictions, status) => {
        const ok = status === google.maps.places.PlacesServiceStatus.OK && !!predictions;
        if (field === "pickup") {
          setPickupSuggestions(ok ? predictions! : []);
          setShowPickupSuggestions(ok);
        } else {
          setDestinationSuggestions(ok ? predictions! : []);
          setShowDestinationSuggestions(ok);
        }
      }
    );
  }, []);

  const handleSuggestionSelect = useCallback((
    prediction: google.maps.places.AutocompletePrediction,
    field: "pickup" | "destination"
  ) => {
    setFormData((prev) => ({ ...prev, [field]: prediction.description }));
    if (field === "pickup") {
      setPickupSuggestions([]);
      setShowPickupSuggestions(false);
    } else {
      setDestinationSuggestions([]);
      setShowDestinationSuggestions(false);
    }
  }, []);

  // Load Google Maps Places API - COMPLETELY REWRITTEN for Safari
  useEffect(() => {
    let script: HTMLScriptElement | null = null;

    const loadGoogleMaps = () => {
      // Check if Google Maps is already loaded globally
      if (window.google && window.google.maps && window.google.maps.places) {
        console.log("Google Maps already loaded");
        initializeAutocomplete();
        return;
      }

      // Check if script is already in the document
      const existingScript = document.querySelector(
        'script[src*="maps.googleapis.com"]'
      ) as HTMLScriptElement;

      if (existingScript) {
        console.log("Google Maps script already exists");
        // If script exists but Google isn't loaded, wait for it
        if (!window.google?.maps?.places) {
          const waitForLoad = setInterval(() => {
            if (window.google?.maps?.places) {
              clearInterval(waitForLoad);
              initializeAutocomplete();
            }
          }, 100);

          setTimeout(() => {
            clearInterval(waitForLoad);
            if (!window.google?.maps?.places) {
              console.warn("Google Maps failed to load from existing script");
            }
          }, 10000);
        } else {
          initializeAutocomplete();
        }
        return;
      }

      // Load fresh script with better error handling
      console.log("Loading Google Maps API...");
      script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=google_api_key&libraries=places&loading=async`;
      script.async = true;
      script.defer = true;
      script.id = "google-maps-script";
      script.crossOrigin = "anonymous";

      const loadTimeout = setTimeout(() => {
        if (!window.google?.maps?.places) {
          console.error("Google Maps loading timeout");
          toast.error(
            "Location services taking too long to load. You can still type addresses manually."
          );
        }
      }, 15000);

      script.onload = () => {
        clearTimeout(loadTimeout);
        console.log("Google Maps Places API loaded successfully");
        // Double check and initialize
        if (window.google?.maps?.places) {
          initializeAutocomplete();
        }
      };

      script.onerror = () => {
        clearTimeout(loadTimeout);
        console.error("Failed to load Google Maps Places API");
        toast.error(
          "Location services unavailable. You can still type addresses manually."
        );
      };

      document.head.appendChild(script);
    };

    loadGoogleMaps();

    return () => {};
  }, [initializeAutocomplete]);

  // Load reCAPTCHA
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

  // Close location suggestion dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (pickupContainerRef.current && !pickupContainerRef.current.contains(e.target as Node)) {
        setShowPickupSuggestions(false);
      }
      if (destinationContainerRef.current && !destinationContainerRef.current.contains(e.target as Node)) {
        setShowDestinationSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto-detect user's country - IMPROVED for Safari
  useEffect(() => {
    const detectUserCountry = async () => {
      let detectedCountryCode = "";

      try {
        // Method 1: Try IP-based geolocation with timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const ipResponse = await fetch("https://ipapi.co/json/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (ipResponse.ok) {
          const ipData = await ipResponse.json();
          detectedCountryCode = ipData.country_code;
          console.log(
            "IP-based detection:",
            ipData.country_code,
            ipData.country_name
          );
        }
      } catch {
        console.log("IP geolocation failed, using fallback methods");
      }

      // Method 2: Browser timezone (reliable in Safari)
      if (!detectedCountryCode) {
        try {
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          if (timezone) {
            // Enhanced timezone to country mapping
            const timezoneToCountry: { [key: string]: string } = {
              // UAE timezones
              "Asia/Dubai": "AE",
              "Asia/Abu_Dhabi": "AE",
              "Asia/Sharjah": "AE",
              // Other Middle East
              "Asia/Qatar": "QA",
              "Asia/Riyadh": "SA",
              "Asia/Kuwait": "KW",
              "Asia/Bahrain": "BH",
              "Asia/Muscat": "OM",
              // Europe
              "Europe/London": "GB",
              "Europe/Paris": "FR",
              "Europe/Berlin": "DE",
              "Europe/Madrid": "ES",
              "Europe/Rome": "IT",
              // Americas
              "America/New_York": "US",
              "America/Los_Angeles": "US",
              "America/Toronto": "CA",
              // Asia
              "Asia/Tokyo": "JP",
              "Asia/Singapore": "SG",
              "Asia/Shanghai": "CN",
              "Asia/Kolkata": "IN",
            };

            detectedCountryCode = timezoneToCountry[timezone] || "";
            if (detectedCountryCode) {
              console.log(
                "Timezone detection:",
                timezone,
                "->",
                detectedCountryCode
              );
            }
          }
        } catch {
          console.log("Timezone detection failed");
        }
      }

      // Method 3: Browser language
      if (!detectedCountryCode) {
        try {
          const languages = navigator.languages || [navigator.language];
          for (const lang of languages) {
            const countryCode = lang.split("-")[1]?.toUpperCase();
            if (countryCode && countries.some((c) => c.code === countryCode)) {
              detectedCountryCode = countryCode;
              console.log("Language detection:", lang, "->", countryCode);
              break;
            }
          }
        } catch {
          console.log("Language detection failed");
        }
      }

      // Find and set the country
      if (detectedCountryCode) {
        const detectedCountry = countries.find(
          (country) => country.code === detectedCountryCode
        );

        if (detectedCountry) {
          console.log("Setting detected country:", detectedCountry.name);
          setSelectedCountry(detectedCountry);
          return;
        }
      }

      // Final fallback based on timezone hint for Middle East
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const isMiddleEast =
        timezone?.includes("Dubai") ||
        timezone?.includes("Abu_Dhabi") ||
        timezone?.includes("Qatar") ||
        timezone?.includes("Riyadh");

      if (isMiddleEast) {
        const uaeCountry = countries.find((country) => country.code === "AE");
        if (uaeCountry) {
          console.log("Middle East timezone detected, defaulting to UAE");
          setSelectedCountry(uaeCountry);
        }
      }
    };

    detectUserCountry();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {

      const phoneInput = document.querySelector('input[name="phone"]');
      if (phoneInput && phoneInput.contains(event.target as Node)) {
      setShowCountryDropdown(false);
      setSearchQuery("");
      return;
      }

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowCountryDropdown(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (showCountryDropdown && searchInputRef.current) {
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 100);
    }
  }, [showCountryDropdown]);

  // COMPLETELY REWRITTEN DATE VALIDATION
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.reason_for_travel) {
      newErrors.reason_for_travel = "Please select a reason for travel";
    }
    if (!formData.firstname) {
      newErrors.firstname = "First name is required";
    }
    if (!formData.lastname) {
      newErrors.lastname = "Last name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.company) {
      newErrors.company = "Company/School is required";
    }

    // FIXED DATE VALIDATION: Only validate if date is provided
    if (formData.date) {
      const selectedDate = new Date(formData.date + "T00:00:00");
      const today = new Date();

      // Reset both dates to start of day for accurate comparison
      const selectedDateStart = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate()
      );
      const todayStart = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      );

      // Compare timestamps - only show error if selected date is BEFORE today
      if (selectedDateStart.getTime() < todayStart.getTime()) {
        newErrors.date = "Please select today or a future date";
      }
    }

    // Return date validation
    if (formData.hasReturnDate && formData.returnDate) {
      const returnDate = new Date(formData.returnDate + "T00:00:00");
      const travelDate = new Date(formData.date + "T00:00:00");

      if (returnDate < travelDate) {
        newErrors.returnDate = "Return date must be after travel date";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleLocationInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "pickup" | "destination"
  ) => {
    handleInputChange(e);
    const value = e.target.value;
    if (!value) {
      setFormData((prev) => ({ ...prev, [field]: "" }));
      if (field === "pickup") { setPickupSuggestions([]); setShowPickupSuggestions(false); }
      else { setDestinationSuggestions([]); setShowDestinationSuggestions(false); }
      return;
    }
    if (suggestionsDebounceRef.current) clearTimeout(suggestionsDebounceRef.current);
    suggestionsDebounceRef.current = setTimeout(() => fetchSuggestions(value, field), 300);
  };

  // COMPLETELY REWRITTEN DATE HANDLING
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDateString = e.target.value;

    if (!selectedDateString) {
      handleInputChange(e);
      return;
    }

    // Parse the date using the input value directly (YYYY-MM-DD format)
    const selectedDate = new Date(selectedDateString + "T00:00:00"); // Add time to avoid timezone issues
    const today = new Date();

    // Reset both to start of day for comparison
    const selectedDateStart = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate()
    );
    const todayStart = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    // Check if date is valid
    if (isNaN(selectedDate.getTime())) {
      setErrors((prev) => ({
        ...prev,
        date: "Please select a valid date",
      }));
      return;
    }

    // Only show error if date is BEFORE today
    if (selectedDateStart.getTime() < todayStart.getTime()) {
      setErrors((prev) => ({
        ...prev,
        date: "Please select today or a future date",
      }));
    } else {
      // Clear error if date is valid (today or future)
      if (errors.date) {
        setErrors((prev) => ({
          ...prev,
          date: "",
        }));
      }
      handleInputChange(e);
    }
  };

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));

    if (errors.phone) {
      setErrors((prev) => ({
        ...prev,
        phone: "",
      }));
    }
  };

  const handleReasonSelect = (reason: string) => {
    setFormData((prev) => ({ ...prev, reason_for_travel: reason }));
    if (errors.reason_for_travel) {
      setErrors((prev) => ({
        ...prev,
        reason_for_travel: "",
      }));
    }
  };

  const handleCountrySelect = (country: (typeof countries)[0]) => {
    setSelectedCountry(country);
    setShowCountryDropdown(false);
    setSearchQuery("");
  };

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.dialCode.includes(searchQuery) ||
      country.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRecaptchaToken = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha) {
        reject(new Error("reCAPTCHA not loaded"));
        return;
      }

      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute("site_key", { action: "submit" })
          .then((token: string) => {
            resolve(token);
          })
          .catch(() => {
            reject(new Error("reCAPTCHA execution failed"));
          });
      });
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error(qfContent.toasts.validationError);
      return;
    }

    // Additional date validation
    if (formData.date) {
      const selectedDate = new Date(formData.date + "T00:00:00");
      const today = new Date();

      const selectedDateStart = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate()
      );
      const todayStart = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      );

      if (selectedDateStart.getTime() < todayStart.getTime()) {
        toast.error(qfContent.toasts.datePast);
        return;
      }
    }

    // Return date validation
    if (formData.hasReturnDate && formData.returnDate) {
      const returnDate = new Date(formData.returnDate + "T00:00:00");
      const travelDate = new Date(formData.date + "T00:00:00");

      if (returnDate < travelDate) {
        toast.error(qfContent.toasts.returnDateBefore);
        return;
      }
    }

    setSubmitting(true);

    try {
      let recaptchaToken = "";
      if (recaptchaLoaded) {
        try {
          recaptchaToken = await getRecaptchaToken();
        } catch {
          toast.error(qfContent.toasts.captchaFail);
          setSubmitting(false);
          return;
        }
      }

      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        // Convert boolean values to strings
        if (typeof value === "boolean") {
          formDataToSend.append(key, value.toString());
        } else {
          formDataToSend.append(key, value);
        }
      });
      formDataToSend.append(
        "phone_with_code",
        `${selectedCountry.dialCode}${formData.phone}`
      );
      formDataToSend.append(
        "countryCode",
        selectedCountry.dialCode.replace("+", "")
      );
      formDataToSend.append("recaptcha_token", recaptchaToken);
      formDataToSend.append("form_type", "quote_form");
      formDataToSend.append(
        "_subject",
        `New Quote Request - ${site.name}`
      );

      const response = await fetch("/contact.php", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        toast.success(qfContent.toasts.success);

        setFormData({
          reason_for_travel: "",
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          company: "",
          pickup: "",
          destination: "",
          date: "",
          time: "",
          returnDate: "",
          returnTime: "",
          hasReturnDate: false,
          passengers: "",
          message: "",
        });

        onSuccess?.();
      } else {
        toast.error(
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      if (error instanceof TypeError) {
        if (error.message.includes("Failed to fetch")) {
          toast.error(qfContent.toasts.networkError);
        } else {
          toast.error(qfContent.toasts.serverError);
        }
      } else {
        toast.error(qfContent.toasts.unexpectedError);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const reasonIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Building2, GraduationCap, Plane, Users, Home, MapPin,
  };

  const travelReasons = qfContent.travelReasons.map((r) => ({
    ...r,
    icon: reasonIconMap[r.iconName] || MapPin,
  }));

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Add reCAPTCHA badge */}
      <div
        className="g-recaptcha"
        data-sitekey="site_key"
        data-size="invisible"
      ></div>

      {/* Travel Reason */}
      <div>
        <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-3">
          <MapPin className="h-4 w-4 text-blue-600" />
          <span>{qfContent.travelReasonLabel}</span>
          <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {travelReasons.map((reason) => {
            const IconComponent = reason.icon;
            const isSelected = formData.reason_for_travel === reason.value;

            return (
              <div
                key={reason.value}
                onClick={() => handleReasonSelect(reason.value)}
                className={`p-3 rounded-xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  isSelected
                    ? "border-blue-600 bg-blue-50 shadow-md"
                    : "border-gray-300 hover:border-blue-400 bg-white"
                } ${errors.reason_for_travel ? "border-red-500" : ""}`}
              >
                <div className="flex flex-col items-center space-y-2 relative">
                  <div
                    className={`p-2 rounded-lg ${
                      isSelected ? reason.bgColor : "bg-gray-100"
                    }`}
                  >
                    <IconComponent
                      className={`h-5 w-5 ${
                        isSelected ? reason.color : "text-gray-400"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-xs font-medium text-center ${
                      isSelected ? "text-gray-900" : "text-gray-600"
                    }`}
                  >
                    {reason.label}
                  </span>
                  {isSelected && (
                    <CheckCircle className="h-4 w-4 text-green-500 absolute top-0 right-0" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {errors.reason_for_travel && (
          <p className="text-red-500 text-sm mt-2">
            {errors.reason_for_travel}
          </p>
        )}
        <input
          type="hidden"
          name="reason_for_travel"
          value={formData.reason_for_travel}
          required
        />
      </div>

      {/* Personal Information */}
      <div className="space-y-4 p-4 bg-blue-50 rounded-xl">
        <h4 className="font-semibold text-gray-900 flex items-center">
          <Users className="h-4 w-4 mr-2 text-blue-600" />
          {qfContent.personalInfoTitle}
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
              {qfContent.fields.firstName} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                errors.firstname
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              } focus:ring-2 focus:ring-blue-200`}
              required
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
              {qfContent.fields.lastName} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                errors.lastname
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              } focus:ring-2 focus:ring-blue-200`}
              required
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
            {qfContent.fields.email} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
              errors.email
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-blue-500"
            } focus:ring-2 focus:ring-blue-200`}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
            {qfContent.fields.phone} <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-3" ref={dropdownRef}>
            {/* Updated Country Code Dropdown - matching Contact form style */}
            <div className="relative w-32">
              <button
                type="button"
                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 flex items-center justify-between hover:bg-gray-50 h-[52px]"
              >
                <span className="text-gray-700 font-medium">
                  {selectedCountry.dialCode}
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-gray-400 transition-transform ${
                    showCountryDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu - matching Contact form style */}
              {showCountryDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-xl shadow-lg z-50 max-h-80 overflow-hidden w-80">
                  {/* Search Input */}
                  <div className="p-3 border-b border-gray-200">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        ref={searchInputRef}
                        type="text"
                        placeholder={qfContent.placeholders.countrySearch}
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
                          onClick={() => handleCountrySelect(country)}
                          className={`w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors flex items-center justify-between border-b border-gray-100 last:border-b-0 ${
                            selectedCountry.code === country.code
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-700"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="font-medium text-gray-900">
                              {country.dialCode}
                            </span>
                            <span className="text-gray-600">
                              {country.name}
                            </span>
                          </div>
                          {selectedCountry.code === country.code && (
                            <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          )}
                        </button>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-gray-500 text-center">
                        {qfContent.noCountriesFound}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Phone Input */}
            <div className="flex-1">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder={qfContent.placeholders.phone}
                className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                  errors.phone
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-blue-500"
                } focus:ring-2 focus:ring-blue-200`}
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
            {qfContent.fields.company} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
              errors.company
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-blue-500"
            } focus:ring-2 focus:ring-blue-200`}
            required
          />
          {errors.company && (
            <p className="text-red-500 text-sm mt-1">{errors.company}</p>
          )}
        </div>
      </div>

      {/* Trip Details - FIXED ALIGNMENT */}
      <div className="space-y-4 p-4 bg-green-50 rounded-xl">
        <h4 className="font-semibold text-gray-900 flex items-center">
          <MapPin className="h-4 w-4 mr-2 text-green-600" />
          {qfContent.tripDetailsTitle}
        </h4>

        <div ref={pickupContainerRef} className="relative">
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <MapPin className="h-4 w-4 text-blue-600" />
            <span>{qfContent.fields.pickup}</span>
          </label>
          <input
            ref={pickupInputRef}
            type="text"
            name="pickup"
            value={formData.pickup}
            onChange={(e) => handleLocationInputChange(e, "pickup")}
            onFocus={() => { if (pickupSuggestions.length > 0) setShowPickupSuggestions(true); }}
            placeholder={qfContent.placeholders.pickup}
            autoComplete="off"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
          />
          {showPickupSuggestions && pickupSuggestions.length > 0 && (
            <ul className="absolute z-50 w-full mt-1 bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden max-h-60 overflow-y-auto">
              {pickupSuggestions.map((s, i) => (
                <li key={i}>
                  <button
                    type="button"
                    onMouseDown={(e) => { e.preventDefault(); handleSuggestionSelect(s, "pickup"); }}
                    className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-blue-50 flex items-start gap-2"
                  >
                    <MapPin className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
                    <span>
                      <span className="font-medium">{s.structured_formatting.main_text}</span>
                      {s.structured_formatting.secondary_text && (
                        <span className="text-gray-500 ml-1">{s.structured_formatting.secondary_text}</span>
                      )}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div ref={destinationContainerRef} className="relative">
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <MapPin className="h-4 w-4 text-green-600" />
            <span>{qfContent.fields.destination}</span>
          </label>
          <input
            ref={destinationInputRef}
            type="text"
            name="destination"
            value={formData.destination}
            onChange={(e) => handleLocationInputChange(e, "destination")}
            onFocus={() => { if (destinationSuggestions.length > 0) setShowDestinationSuggestions(true); }}
            placeholder={qfContent.placeholders.destination}
            autoComplete="off"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
          />
          {showDestinationSuggestions && destinationSuggestions.length > 0 && (
            <ul className="absolute z-50 w-full mt-1 bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden max-h-60 overflow-y-auto">
              {destinationSuggestions.map((s, i) => (
                <li key={i}>
                  <button
                    type="button"
                    onMouseDown={(e) => { e.preventDefault(); handleSuggestionSelect(s, "destination"); }}
                    className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-blue-50 flex items-start gap-2"
                  >
                    <MapPin className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
                    <span>
                      <span className="font-medium">{s.structured_formatting.main_text}</span>
                      {s.structured_formatting.secondary_text && (
                        <span className="text-gray-500 ml-1">{s.structured_formatting.secondary_text}</span>
                      )}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Date and Time Section with Return Date and Time */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                <button
                  type="button"
                  onClick={() => togglePicker(dateInputRef, datePickerOpen, setDatePickerOpen)}
                  className="text-purple-600 hover:text-purple-800 transition-colors"
                  aria-label="Toggle date picker"
                >
                  <Calendar className="h-4 w-4" />
                </button>
                <span>{qfContent.fields.travelDate}</span>
              </label>
              <input
                ref={dateInputRef}
                type="date"
                name="date"
                value={formData.date}
                onChange={handleDateChange}
                onFocus={() => setDatePickerOpen(true)}
                onBlur={() => setDatePickerOpen(false)}
                min={getTodayDate()}
                className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                  errors.date
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-blue-500"
                } focus:ring-2 focus:ring-blue-200`}
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {errors.date}
                </p>
              )}
            </div>
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                <button
                  type="button"
                  onClick={() => togglePicker(timeInputRef, timePickerOpen, setTimePickerOpen)}
                  className="text-purple-600 hover:text-purple-800 transition-colors"
                  aria-label="Toggle time picker"
                >
                  <Clock className="h-4 w-4" />
                </button>
                <span>{qfContent.fields.pickupTime}</span>
              </label>
              <input
                ref={timeInputRef}
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                onFocus={() => setTimePickerOpen(true)}
                onBlur={() => setTimePickerOpen(false)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              />
            </div>
          </div>

          {/* Return Date Checkbox and Fields */}
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
            <label
              htmlFor="hasReturnDate"
              className="text-sm font-medium text-gray-700"
            >
              {qfContent.fields.returnTrip}
            </label>
          </div>

          {formData.hasReturnDate && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                  <button
                    type="button"
                    onClick={() => togglePicker(returnDateInputRef, returnDatePickerOpen, setReturnDatePickerOpen)}
                    className="text-purple-600 hover:text-purple-800 transition-colors"
                    aria-label="Toggle return date picker"
                  >
                    <Calendar className="h-4 w-4" />
                  </button>
                  <span>{qfContent.fields.returnDate}</span>
                </label>
                <input
                  ref={returnDateInputRef}
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onFocus={() => setReturnDatePickerOpen(true)}
                  onBlur={() => setReturnDatePickerOpen(false)}
                  onChange={(e) => {
                    const selectedDateString = e.target.value;
                    if (!selectedDateString) {
                      handleInputChange(e);
                      return;
                    }

                    const returnDate = new Date(selectedDateString + "T00:00:00");
                    const travelDate = new Date(formData.date + "T00:00:00");

                    if (returnDate < travelDate) {
                      setErrors((prev) => ({
                        ...prev,
                        returnDate: "Return date must be after travel date",
                      }));
                    } else {
                      if (errors.returnDate) {
                        setErrors((prev) => ({
                          ...prev,
                          returnDate: "",
                        }));
                      }
                      handleInputChange(e);
                    }
                  }}
                  min={formData.date || getTodayDate()}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                    errors.returnDate
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-blue-500"
                  } focus:ring-2 focus:ring-blue-200`}
                />
                {errors.returnDate && (
                  <p className="text-red-500 text-sm mt-1 text-left">
                    {errors.returnDate}
                  </p>
                )}
              </div>
              <div>
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                  <button
                    type="button"
                    onClick={() => togglePicker(returnTimeInputRef, returnTimePickerOpen, setReturnTimePickerOpen)}
                    className="text-purple-600 hover:text-purple-800 transition-colors"
                    aria-label="Toggle return time picker"
                  >
                    <Clock className="h-4 w-4" />
                  </button>
                  <span>{qfContent.fields.returnTime}</span>
                </label>
                <input
                  ref={returnTimeInputRef}
                  type="time"
                  name="returnTime"
                  value={formData.returnTime}
                  onChange={handleInputChange}
                  onFocus={() => setReturnTimePickerOpen(true)}
                  onBlur={() => setReturnTimePickerOpen(false)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                />
              </div>
            </div>
          )}
        </div>

        {/* MODIFIED: Changed passengers from select to number input */}
        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <Users className="h-4 w-4 text-orange-600" />
            <span>{qfContent.fields.passengers}</span>
          </label>
          <input
            type="number"
            name="passengers"
            value={formData.passengers}
            onChange={handleInputChange}
            placeholder={qfContent.placeholders.passengers}
            min="1"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
          />
        </div>
      </div>

      {/* Additional Message */}
      <div>
        <label className="text-sm font-semibold text-gray-700 mb-2 block">
          {qfContent.fields.message}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder={qfContent.placeholders.message}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submitting || !recaptchaLoaded}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        <span className="relative flex items-center justify-center">
          {submitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              {qfContent.submittingButton}
            </>
          ) : (
            <>
              {qfContent.submitButton}
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </span>
      </button>

      {/* Trust Badge */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-600 font-medium">
            {qfContent.responseTime}
          </span>
        </div>
      </div>
    </form>
  );
}