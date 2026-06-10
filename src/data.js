export const site = {
  name: "Airport Taxi Heathrow",
  shortName: "ATH Taxis",
  phone: "+44 203 834 3211",
  phoneHref: "tel:+442038343211",
  email: "info@busrentalbelgium.com",
  emailHref: "mailto:info@busrentalbelgium.com",
  whatsapp: "https://wa.me/442038343211",
  address: "1 Tilley Rd, Feltham TW13 4GH, UK",
  addressDisplay: "1 Tilley Rd,\n Feltham TW13 4GH, UK",
  url: "https://airporttaxiheathrow.com",
  logo: "/images/logo2.png",
  logoAlt: "Airport Taxi Heathrow - Heathrow airport transfer specialists",
  foundedYear: "2012",
};

// ============================================================
// SEO — per-page metadata
// ============================================================
export const seo = {
  layout: {
    titleDefault:
      "Heathrow Taxi | Reliable Transfers to and from Heathrow Airport",
    titleTemplate: "%s | Airport Taxi Heathrow",
    description:
      "Professional taxi and private hire services to and from Heathrow Airport. Terminal 2, 3, 4, 5 covered. Meet and greet, flight tracking, fixed prices. Serving Hounslow, Windsor, Slough, Reading, Central London and beyond.",
    keywords: [
      "Heathrow taxi",
      "Heathrow airport transfers",
      "Heathrow private hire",
      "terminal 2 taxi",
      "terminal 5 transfer",
      "Heathrow meet and greet",
      "taxi from Heathrow",
      "Heathrow minicab",
      "LHR taxi service",
      "Heathrow airport pickup",
    ],
    og: {
      title: "Heathrow Taxi | Airport Taxi Heathrow",
      description:
        "Reliable taxi transfers to and from all Heathrow terminals. Flight tracking, fixed prices, professional drivers.",
      type: "website",
      locale: "en_GB",
    },
  },
  corporate: {
    title: "Heathrow Executive Taxi | Corporate Transfers from Heathrow Airport",
    description:
      "Executive taxi service for business travel from Heathrow to Canary Wharf, City of London, Reading and Slough. Account billing, flight monitoring, WiFi, meet and greet. Professional chauffeurs.",
    keywords: [
      "Heathrow executive taxi",
      "corporate transfer Heathrow",
      "business taxi Heathrow",
      "VIP chauffeur Heathrow",
      "corporate account travel LHR",
    ],
    og: {
      title: "Heathrow Executive Taxi | Airport Taxi Heathrow",
      description:
        "Premium executive transfers from Heathrow to London business districts and the South East. Corporate accounts welcome.",
      type: "website",
      url: "/corporate",
    },
  },
  schoolTrips: {
    title: "School Transport Heathrow | Safe Taxi and Minibus for Student Groups",
    description:
      "Safe school run services and group transport from Heathrow area schools to educational visits in London, Windsor, Reading. DBS checked drivers, seat belts, door to door service.",
    keywords: [
      "school taxi Heathrow",
      "student transport Hounslow",
      "school run Slough",
      "educational group travel Windsor",
      "school minibus Heathrow",
    ],
    og: {
      title: "School Transport Heathrow | Airport Taxi Heathrow",
      description:
        "Dependable school transport with child safe vehicles and professional drivers for daily runs and field trips.",
      type: "website",
      url: "/school-trips",
    },
  },
  transfers: {
    title: "Heathrow Private Transfer | Door to Door Taxi from All Terminals",
    description:
      "Private door to door transfer from Heathrow to Central London, Canary Wharf, Reading, Oxford, Southampton. Meet and greet, flight tracking, fixed prices. Executive cars and minibuses.",
    keywords: [
      "private transfer Heathrow",
      "door to door taxi London",
      "Heathrow meet and greet service",
      "airport pickup LHR",
      "executive car Heathrow",
    ],
    og: {
      title: "Heathrow Private Transfer | Airport Taxi Heathrow",
      description:
        "Comfortable private transfers from any Heathrow terminal to any UK address. Professional drivers, fixed rates.",
      type: "website",
      url: "/transfers",
    },
  },
  shuttles: {
    title: "Heathrow Shuttle | Shared Airport Transfers to London and Hotels",
    description:
      "Economical shared shuttle service from Heathrow to Central London hotels, Windsor, Slough and Reading. Regular scheduled runs with comfortable vehicles. Professional drivers.",
    keywords: [
      "Heathrow shuttle",
      "shared taxi London Heathrow",
      "airport shuttle service",
      "budget airport transfer LHR",
      "hotel shuttle Heathrow",
    ],
    og: {
      title: "Heathrow Shuttle | Airport Taxi Heathrow",
      description:
        "Cost effective shared shuttle options from Heathrow to central London, Southampton Cruise Port, Windsor and the South East.",
      type: "website",
      url: "/shuttle-services",
    },
  },
  home: {
    title:
      "Heathrow Taxi and Transfers | Reliable Service from Terminal 2, 3, 4, 5",
    description:
      "Book your Heathrow taxi online. 24/7 transfers from all terminals. Flight tracking, meet and greet, fixed prices. Serving Hounslow, Windsor, Slough, Reading, Central London and the UK.",
    keywords: [
      "Heathrow taxi",
      "Heathrow airport transfers",
      "taxi from Heathrow Terminal 5",
      "private hire LHR",
      "minicab Heathrow",
      "executive transfer London",
      "meet and greet Heathrow Terminal 2",
    ],
    og: {
      title: "Heathrow Taxi | Airport Taxi Heathrow",
      description:
        "Professional taxi transfers to and from all Heathrow terminals. 24/7 availability, flight monitoring, fixed pricing.",
      type: "website",
      url: "https://airporttaxiheathrow.com",
    },
  },
};

// ============================================================
// NAVIGATION
// ============================================================
export const navigation = {
  items: [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      submenu: [
        { name: "Corporate Transfers", href: "/corporate-events" },
        { name: "School Runs", href: "/school-trips" },
        { name: "Airport Transfers", href: "/transfers" },
        { name: "Hotel & Cruise Transfers", href: "/shuttles" },
      ],
    },
    { name: "Fleet", href: "/fleet" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ],
  mobileMenuAriaLabel: "Toggle menu",
};

// ============================================================
// FOOTER
// ============================================================
export const footer = {
  logoAlt: "Airport Taxi Heathrow Logo",
  services: {
    heading: "Heathrow Transfer Services",
    links: [
      { label: "Airport Transfers", href: "/transfers" },
      { label: "Corporate Transfers", href: "/corporate-events" },
      { label: "School Runs", href: "/school-trips" },
      { label: "Hotel & Cruise Transfers", href: "/shuttles" },
    ],
  },
  menu: {
    heading: "Menu",
    links: [
      { label: "Fleet", href: "/fleet" },
      { label: "About Us", href: "/about-us" },
      { label: "Contact", href: "/contact" },
    ],
  },
  copyright: "Airport Taxi Heathrow. All rights reserved.",
};

// ============================================================
// HERO — homepage hero section
// ============================================================
export const hero = {
  badge: "Heathrow Airport Transfer Specialists",
  heading: {
    line1: "Heathrow Taxi",
    highlight: " Service ",
    line2: "All Terminals Covered",
  },
  description:
    "We provide reliable taxi and private hire transfers to and from every Heathrow terminal. Terminal 2, Terminal 3, Terminal 4 and Terminal 5. Our drivers monitor your flight and meet you in arrivals with a name board. Fixed prices with no hidden charges. Whether you need a taxi from Heathrow to Central London, Windsor, Slough, Reading or Oxford, we have you covered 24 hours a day.",
  features: [
    { iconName: "Shield", text: "Licensed & Insured" },
    { iconName: "Clock", text: "Flight Tracking" },
    { iconName: "Users", text: "Local Drivers" },
    { iconName: "Star", text: "5-Star Rated" },
  ],
  cta: {
    primary: "Get Free Quote",
    secondary: "Call +44 203 834 3211",
  },
  trustIndicators: [
    { iconName: "Users", text: "80,000+ Heathrow Passengers" },
    { iconName: "pulse", text: "24/7 at Heathrow" },
  ],
  floatingCards: [
    { value: "24/7", label: "Heathrow Service" },
    { value: "5", label: "Terminals" },
  ],
  image: {
    src: "/images/bus-hire-transparent.png",
    alt: "Luxury taxi at Heathrow Terminal 5 arrivals - Airport Taxi Heathrow",
  },
};

// ============================================================
// SERVICES — homepage services tabs
// ============================================================
export const services = {
  badge: "Heathrow Taxi Services",
  heading: "Heathrow Airport Transfer Options",
  description:
    "Choose from our range of private hire and taxi services tailored to your journey from Heathrow.",
  floatingBadge: {
    label: "24 Hour Service",
    sublabel: "At Heathrow Airport",
  },
  items: [
    {
      key: "transfers",
      title: "Heathrow Airport Transfers",
      description:
        "Book a direct taxi from any Heathrow terminal to your destination. We cover all five terminals with flight tracking and meet and greet. Perfect for journeys to Central London, Canary Wharf, Reading, Oxford or Southampton Cruise Port. Fixed prices with no surprise charges.",
      image: "/images/transfer21.png",
      iconName: "Plane",
      features: [
        "All Terminals",
        "Flight Tracking",
        "Meet & Greet",
        "Fixed Price",
      ],
    },
    {
      key: "corporate",
      title: "Heathrow Executive Transfers",
      description:
        "Premium taxi service for business travel from Heathrow to London offices, Slough trading estates, Reading business parks and Canary Wharf. Account billing available. Professional chauffeurs with WiFi and meet and greet service at the terminal.",
      image: "/images/corporate21.png",
      iconName: "Building2",
      features: [
        "Account Billing",
        "Meet & Greet",
        "WiFi Available",
        "Flight Monitoring",
      ],
    },
    {
      key: "school",
      title: "School Runs Near Heathrow",
      description:
        "Safe daily school transport for families in Hounslow, Hayes, Slough and Windsor. Also group trips for school visits to London museums and historic Windsor. DBS checked drivers and seat belts fitted in all vehicles.",
      image: "/images/school21.png",
      iconName: "GraduationCap",
      features: [
        "DBS Checked Drivers",
        "Seat Belts",
        "Door to Door",
        "Group Bookings",
      ],
    },
    {
      key: "shuttle",
      title: "Hotel & Cruise Transfers from Heathrow",
      description:
        "Comfortable transfers from Heathrow to London hotels, Windsor guest houses and Southampton Cruise Terminal. Ideal for holidaymakers and cruise passengers. Luggage assistance included. Also serving Slough and Reading hotels.",
      image: "/images/shuttle21.png",
      iconName: "Users",
      features: [
        "Hotel Drop off",
        "Cruise Ports",
        "Luggage Assistance",
        "UK Wide",
      ],
    },
  ],
};

// ============================================================
// WHY CHOOSE US
// ============================================================
export const whyChooseUs = {
  badge: "Why Heathrow Passengers Choose Us",
  heading: {
    line1: "The Heathrow Transfer",
    highlight: "Advantage",
  },
  description:
    "We focus on one thing: getting you from Heathrow to your destination safely, on time and at a fair price.",
  features: [
    {
      iconName: "DollarSign",
      title: "Best Price for Heathrow Trips",
      shortDesc:
        "We guarantee competitive rates for all journeys from Heathrow terminals.",
      content:
        "We know Heathrow transfers can be expensive. That is why we offer transparent fixed pricing with no meter. A taxi from Heathrow to Central London costs what we quote online. If you find a lower written quote from another licensed operator, we will match it. No hidden fees for luggage, waiting time or flight delays.",
      color: "text-green-600",
      bgColor: "bg-green-100",
      borderColor: "border-green-200",
    },
    {
      iconName: "User",
      title: "Local Heathrow Knowledge",
      shortDesc:
        "Our drivers know every route from Heathrow to Hounslow, Windsor, Slough and London.",
      content:
        "All our drivers have extensive local knowledge. They know the fastest routes from Terminal 2 to Richmond, the best way from Terminal 5 to Reading, and how to avoid traffic on the M4 or M25. You will arrive relaxed and on time, whether you are heading to a meeting in Canary Wharf or home to Windsor.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200",
    },
    {
      iconName: "Clock",
      title: "24 Hour Heathrow Operation",
      shortDesc:
        "We are available for every flight arrival and departure at Heathrow.",
      content:
        "Flights land at all hours. So do we. Our 24/7 service covers early morning departures from Terminal 3 and late night arrivals at Terminal 2. We monitor your flight time and adjust your pickup automatically. Need a last minute taxi from Heathrow to Slough at 3am? We will be there.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-200",
    },
    {
      iconName: "Headset",
      title: "Heathrow Dedicated Support",
      shortDesc:
        "Our team is based near Heathrow and understands the airport well.",
      content:
        "When you call us, you speak to people who know Heathrow inside out. We can advise you on the best pickup point for your terminal, estimated travel times to your destination, and any planned roadworks around the airport. We are always just a phone call or message away.",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      borderColor: "border-orange-200",
    },
  ],
  stats: [
    { value: "80K+", label: "Heathrow Trips", color: "text-blue-600" },
    { value: "50+", label: "Destinations", color: "text-green-600" },
    { value: "24/7", label: "Service", color: "text-purple-600" },
  ],
  image: {
    src: "/images/bus2.png",
    alt: "Modern taxi fleet waiting at Heathrow Airport",
  },
  floatingBadges: [
    { value: "5", label: "Terminals", iconName: "CheckCircle" },
    { value: "100%", label: "Licensed", iconName: "ShieldCheck" },
  ],
};

// ============================================================
// HOW IT WORKS — 3-step process
// ============================================================
export const howItWorks = {
  badge: "Simple Heathrow Booking Process",
  heading: "How to Book Your Heathrow Taxi",
  description: "Book your Heathrow transfer in three simple steps",
  steps: [
    {
      iconName: "MapPin",
      title: "Set Your Terminal & Drop-off",
      desc: "Pick any Heathrow terminal or address as your starting point. Tell us your destination and we plot the fastest route to your door.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      details: [
        "Any Heathrow terminal",
        "50+ destinations covered",
        "Flexible pickup points",
      ],
    },
    {
      iconName: "Calendar",
      title: "Share Your Flight, We Watch the Gate",
      desc: "Give us your flight number and we handle the rest. Live tracking means your driver adjusts automatically for any delay or early landing.",
      color: "text-green-600",
      bgColor: "bg-green-100",
      details: [
        "Flight tracking included",
        "24 hour availability",
        "Free waiting time",
      ],
    },
    {
      iconName: "Bus",
      title: "Walk Out, Spot Your Name, Ride Easy",
      desc: "Your driver stands in arrivals with your name board and takes care of your bags. Just sit back and enjoy the ride to your destination.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      details: [
        "Modern fleet",
        "Name board service",
        "Luggage assistance",
      ],
    },
  ],
};

// ============================================================
// BIG NUMBERS — animated stats section
// ============================================================
export const bigNumbers = {
  heading: "Trusted by Thousands of Heathrow Passengers",
  description:
    "From daily commuters to holidaymakers, here is why passengers choose us for their Heathrow transfers.",
  stats: [
    {
      iconName: "Users",
      targetValue: 80000,
      suffix: "+",
      label: "Heathrow Passengers",
      format: "localeString",
      color: "text-blue-500",
      bgColor: "bg-blue-100",
    },
    {
      iconName: "MapPin",
      targetValue: 25000,
      suffix: "+",
      label: "Heathrow Journeys Completed",
      format: "integer",
      color: "text-green-500",
      bgColor: "bg-green-100",
    },
    {
      iconName: "Clock",
      targetValue: 50,
      suffix: "+",
      label: "Destinations from Heathrow",
      format: "integer",
      color: "text-purple-500",
      bgColor: "bg-purple-100",
    },
    {
      iconName: "Star",
      targetValue: 4.9,
      suffix: "",
      label: "Customer Rating",
      format: "decimal",
      color: "text-yellow-500",
      bgColor: "bg-yellow-100",
    },
  ],
  footer: "24/7 Customer Support for Heathrow Transfers",
};

// ============================================================
// PARTNERS — carousel
// ============================================================
export const partners = {
  badge: "Trusted Partners",
  heading: "Partnered with the Best",
  items: [
    { name: "UEFA", logo: "/images/partner/uefa.png" },
    { name: "Unilever", logo: "/images/partner/un.png" },
    { name: "Airbus", logo: "/images/partner/ab.png" },
    { name: "Education First", logo: "/images/partner/ef.png" },
    { name: "Shell", logo: "/images/partner/sh.png" },
    { name: "Eurowings", logo: "/images/partner/ew.png" },
    { name: "Renault", logo: "/images/partner/rn.png" },
    { name: "Marriott", logo: "/images/partner/mi.png" },
  ],
};

// ============================================================
// FINAL CTA
// ============================================================
export const finalCta = {
  badge: "Ready for Your Heathrow Transfer?",
  heading: {
    line1: "Book Your",
    highlight: "Heathrow Taxi",
    line2: "Online Today",
  },
  description: "Get an instant fixed price quote for your journey from any Heathrow terminal. No hidden fees. No surprises.",
  features: [
    {
      iconName: "MapPin",
      title: "All Heathrow Terminals",
      description: "Terminal 2, 3, 4 and 5 covered",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      iconName: "Clock",
      title: "24 Hour Service",
      description: "Available for every flight arrival",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      iconName: "Star",
      title: "4.9/5 Rating",
      description: "Trusted by Heathrow passengers",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ],
  cta: {
    secondary: "Call +44 203 834 3211",
  },
  trustIndicators: [
    { text: "Instant quotes" },
    { text: "No hidden fees" },
    { text: "24/7 support" },
  ],
  floatingCards: [
    { value: "5", label: "Terminals" },
    { value: "100%", label: "Licensed" },
  ],
  stats: [
    { value: "80K+", label: "Passengers", color: "text-blue-600" },
    { value: "25K+", label: "Journeys", color: "text-green-600" },
    { value: "50+", label: "Destinations", color: "text-purple-600" },
    { value: "12+", label: "Years", color: "text-orange-600" },
  ],
  image: {
    src: "/images/contact_support_transparent.png",
    alt: "Customer support team ready to help with your Heathrow taxi booking",
  },
};

// ============================================================
// TESTIMONIALS
// ============================================================
export const testimonials = {
  badge: "Real Heathrow Passenger Stories",
  heading: "What Our Customers Say About Their Heathrow Transfers",
  description:
    "From business travellers to families, here is what people say about their journeys with us from Heathrow.",
  categories: [
    { key: "passengers", label: "Everyday Travellers" },
    { key: "corporate", label: "Business Clients" },
    { key: "school", label: "Schools & Groups" },
  ],
  rating: {
    value: "4.9/5",
    label: "Average Rating",
    reviewCount: "1200+ Reviews",
    reviewLabel: "Trusted by Heathrow Passengers",
  },
  items: [
    {
      key: "passengers",
      name: "Sarah Mitchell",
      role: "Weekly Commuter, Heathrow to Reading",
      message:
        "I fly into Terminal 3 every Monday morning for work. Airport Taxi Heathrow has never let me down. The driver is always waiting in arrivals with my name board, even when my flight is delayed. The fixed price to Reading means I can claim expenses easily. Highly recommend.",
    },
    {
      key: "passengers",
      name: "James Patterson",
      role: "Family Traveller, Heathrow to Windsor",
      message:
        "We landed at Terminal 5 after a long flight from Florida with two tired children and six suitcases. Our driver met us at the baggage claim, helped with all the luggage, and had child seats ready. The journey to Windsor was smooth and stress free. We will use this service again.",
    },
    {
      key: "passengers",
      name: "Linda Cooper",
      role: "Senior Traveller, Heathrow to Richmond",
      message:
        "I was nervous about getting from Heathrow to my daughter's house in Richmond. The meet and greet service was wonderful. The driver held a sign with my name, took my bags, and drove carefully. He even pointed out landmarks on the way. A really lovely experience.",
    },
    {
      key: "corporate",
      name: "David Chen",
      role: "Travel Manager, Slough Trading Estate",
      message:
        "We use Airport Taxi Heathrow for all our executive transfers from Heathrow to our Slough office and London meetings. The account billing is seamless, the drivers are professional, and we have never had a late pickup. Their flight monitoring saves us time and money.",
    },
    {
      key: "corporate",
      name: "Emma Whitfield",
      role: "Events Coordinator, Canary Wharf",
      message:
        "We needed to transport 15 VIP clients from Heathrow Terminal 2 to a conference in Canary Wharf. The executive fleet was immaculate, the drivers were in suits, and everything ran exactly on time. Our guests commented on how seamless the transfer was.",
    },
    {
      key: "corporate",
      name: "Robert Shaw",
      role: "Sales Director, Reading",
      message:
        "Last minute client meeting near Heathrow? They had a car to me in 20 minutes. The driver knew the quickest route from Reading to Terminal 3, the WiFi worked perfectly, and I was able to prepare my presentation on the way. Outstanding service for business travel.",
    },
    {
      key: "school",
      name: "Mrs. Helen Barker",
      role: "Head Teacher, Hounslow Primary School",
      message:
        "Organising school trips to London museums used to be a nightmare. Now we use Airport Taxi Heathrow for everything. The DBS checked drivers are fantastic with the children, the minibuses have seat belts, and they always arrive on time at our Hounslow school. Parents are much happier too.",
    },
    {
      key: "school",
      name: "Mr. Andrew Foster",
      role: "PE Teacher, Slough Academy",
      message:
        "Getting 25 teenagers and all their sports kit to away matches is a logistical challenge. These guys have proper storage for our equipment, and the drivers understand we need to arrive focused and ready to play. The journey from Slough to fixtures across Berkshire is always smooth.",
    },
    {
      key: "school",
      name: "Mrs. Claire Edwards",
      role: "School Administrator, Windsor College",
      message:
        "We booked a last minute shuttle from Windsor to the Natural History Museum for a class of 30. The office team sorted it in under an hour, the driver was brilliant with the students, and we even got a discount because it was a school booking. Highly recommend for educational trips.",
    },
  ],
};

// ============================================================
// FLEET
// ============================================================
export const fleet = {
  badge: "Our Heathrow Fleet",
  heading: "Taxis, Minibuses and Coaches for Every Heathrow Journey",
  description:
    "Choose the right vehicle for your transfer from any Heathrow terminal. From executive cars to group minibuses.",
  categories: [
    { key: "cars", name: "Cars & MPVs", iconName: "Car" },
    { key: "minibuses", name: "Minibuses", iconName: "Bus" },
    { key: "coaches", name: "Coaches", iconName: "Bus" },
  ],
  stats: [
    { value: "50+", label: "Vehicles Total", color: "text-blue-600" },
    { value: "30%", label: "Wheelchair Accessible", color: "text-green-600" },
    { value: "24/7", label: "Maintenance", color: "text-purple-600" },
    { value: "All Types", label: "Vehicle Classes", color: "text-orange-600" },
  ],
  vehicleLabels: {
    wheelchairAccess: "Wheelchair Access",
    seats: "Seats",
    fuelType: "Fuel Type",
    transmission: "Transmission",
    classes: {
      standard: "Standard",
      executive: "Executive",
      luxury: "Luxury",
    },
  },
  vehicles: {
    cars: [
      {
        id: 1,
        name: "Toyota Prius",
        capacity: "4 passengers",
        wheelchairAccessible: false,
        vehicleClass: "standard",
        image: "/images/fleet/prius.png",
        specs: { seats: "4", fuel: "Hybrid", transmission: "Automatic" },
      },
      {
        id: 2,
        name: "Ford Mondeo",
        capacity: "4 passengers",
        wheelchairAccessible: false,
        vehicleClass: "standard",
        image: "/images/fleet/mondeo.png",
        specs: { seats: "4", fuel: "Petrol/Diesel", transmission: "Automatic" },
      },
      {
        id: 3,
        name: "Mercedes E-Class",
        capacity: "4 passengers",
        wheelchairAccessible: false,
        vehicleClass: "executive",
        image: "/images/fleet/eclass.png",
        specs: { seats: "4", fuel: "Petrol/Diesel", transmission: "Automatic" },
      },
      {
        id: 4,
        name: "BMW 5 Series",
        capacity: "4 passengers",
        wheelchairAccessible: false,
        vehicleClass: "executive",
        image: "/images/fleet/5series.jpg",
        specs: { seats: "4", fuel: "Petrol/Diesel", transmission: "Automatic" },
      },
      {
        id: 5,
        name: "Mercedes S-Class",
        capacity: "4 passengers",
        wheelchairAccessible: false,
        vehicleClass: "luxury",
        image: "/images/fleet/sclass.jpg",
        specs: { seats: "4", fuel: "Petrol/Diesel", transmission: "Automatic" },
      },
      {
        id: 7,
        name: "Ford Tourneo WAV",
        capacity: "4-6 passengers",
        wheelchairAccessible: true,
        vehicleClass: "standard",
        image: "/images/fleet/51.jpg",
        specs: { seats: "4-6", fuel: "Diesel", transmission: "Automatic" },
      },
      {
        id: 8,
        name: "Mercedes V-Class",
        capacity: "6-8 passengers",
        wheelchairAccessible: false,
        vehicleClass: "luxury",
        image: "/images/fleet/vclass.png",
        specs: { seats: "6-8", fuel: "Diesel", transmission: "Automatic" },
      },
    ],
    minibuses: [
      {
        id: 1,
        name: "Ford Transit Minibus",
        capacity: "9-16 passengers",
        wheelchairAccessible: true,
        vehicleClass: "standard",
        image: "/images/fleet/ftransit.jpg",
        specs: { seats: "9-16", fuel: "Diesel", transmission: "Manual" },
      },
      {
        id: 2,
        name: "Mercedes Sprinter Executive",
        capacity: "9-16 passengers",
        wheelchairAccessible: false,
        vehicleClass: "executive",
        image: "/images/fleet/bsprinter.png",
        specs: { seats: "9-16", fuel: "Diesel", transmission: "Automatic" },
      },
      {
        id: 3,
        name: "Mercedes Sprinter VIP",
        capacity: "9-16 passengers",
        wheelchairAccessible: false,
        vehicleClass: "luxury",
        image: "/images/fleet/sprintervip.png",
        specs: { seats: "9-16", fuel: "Diesel", transmission: "Automatic" },
      },
      {
        id: 4,
        name: "Mercedes Sprinter WAV",
        capacity: "9-16 passengers",
        wheelchairAccessible: true,
        vehicleClass: "executive",
        image: "/images/fleet/sprinterwav.png",
        specs: { seats: "9-16", fuel: "Diesel", transmission: "Automatic" },
      },
      {
        id: 5,
        name: "Iveco Daily Minibus",
        capacity: "17-24 passengers",
        wheelchairAccessible: false,
        vehicleClass: "standard",
        image: "/images/fleet/iveco.png",
        specs: { seats: "17-24", fuel: "Diesel", transmission: "Manual" },
      },
      {
        id: 6,
        name: "Mercedes Sprinter XL",
        capacity: "17-24 passengers",
        wheelchairAccessible: false,
        vehicleClass: "executive",
        image: "/images/fleet/sprinterxl.jpg",
        specs: { seats: "17-24", fuel: "Diesel", transmission: "Automatic" },
      },
      {
        id: 7,
        name: "VIP Custom Minibus",
        capacity: "1-4 passengers",
        wheelchairAccessible: false,
        vehicleClass: "luxury",
        image: "/images/fleet/vip.png",
        specs: { seats: "1-4", fuel: "Diesel", transmission: "Automatic" },
      },
      {
        id: 8,
        name: "Iveco Daily WAV",
        capacity: "17-24 passengers",
        wheelchairAccessible: true,
        vehicleClass: "standard",
        image: "/images/fleet/original.png",
        specs: { seats: "17-24", fuel: "Diesel", transmission: "Manual" },
      },
    ],
    coaches: [
      {
        id: 1,
        name: "Optare Solo Coach",
        capacity: "25-33 passengers",
        wheelchairAccessible: false,
        vehicleClass: "standard",
        image: "/images/fleet/17.jpg",
        specs: { seats: "25-33", fuel: "Diesel", transmission: "Automatic" },
      },
      {
        id: 2,
        name: "Irizar Midicoach",
        capacity: "25-33 passengers",
        wheelchairAccessible: false,
        vehicleClass: "executive",
        image: "/images/fleet/irizar.png",
        specs: { seats: "25-33", fuel: "Diesel", transmission: "Automatic" },
      },
      {
        id: 3,
        name: "Irizar i6 VIP",
        capacity: "25-33 passengers",
        wheelchairAccessible: false,
        vehicleClass: "luxury",
        image: "/images/fleet/vip1.png",
        specs: { seats: "25-33", fuel: "Diesel", transmission: "Automatic" },
      },
      {
        id: 4,
        name: "Plaxton Centro WAV",
        capacity: "25-33 passengers",
        wheelchairAccessible: true,
        vehicleClass: "standard",
        image: "/images/fleet/20.jpg",
        specs: { seats: "25-33", fuel: "Diesel", transmission: "Automatic" },
      },
      {
        id: 5,
        name: "Mercedes Tourismo",
        capacity: "34-49 passengers",
        wheelchairAccessible: false,
        vehicleClass: "executive",
        image: "/images/fleet/22.jpg",
        specs: { seats: "34-49", fuel: "Diesel", transmission: "Automatic" },
      },
      {
        id: 6,
        name: "Scania Touring VIP",
        capacity: "34-49 passengers",
        wheelchairAccessible: false,
        vehicleClass: "luxury",
        image: "/images/fleet/23.jpg",
        specs: { seats: "34-49", fuel: "Diesel", transmission: "Automatic" },
      },
      {
        id: 7,
        name: "MAN Lion's Coach WAV",
        capacity: "34-49 passengers",
        wheelchairAccessible: true,
        vehicleClass: "executive",
        image: "/images/fleet/24.jpg",
        specs: { seats: "34-49", fuel: "Diesel", transmission: "Automatic" },
      },
      {
        id: 8,
        name: "Bespoke Touring Coach",
        capacity: "50-87 passengers",
        wheelchairAccessible: true,
        vehicleClass: "luxury",
        image: "/images/fleet/26.jpg",
        specs: { seats: "50-87", fuel: "Diesel", transmission: "Automatic" },
      },
    ],
  },
};

// ============================================================
// ABOUT US
// ============================================================
export const aboutUs = {
  badge: "Heathrow Transfer Specialists Since 2012",
  heading: "Your Reliable Taxi Partner at Heathrow Airport",
  description:
    "Airport Taxi Heathrow was founded to solve a simple problem: reliable, fairly priced transfers from the UK's busiest airport. We are based near Heathrow and know every terminal, every car park, and every route to Hounslow, Slough, Windsor, Reading and Central London. Our drivers monitor your flight, meet you in arrivals, and get you where you need to go. No stress. No surprises.",
  features: [
    {
      iconName: "Users",
      title: "Local Heathrow Drivers",
      description:
        "All our drivers live and work near Heathrow. They know the shortcuts and the traffic patterns across West London and the M4 corridor.",
    },
    {
      iconName: "Shield",
      title: "Fully Licensed for Heathrow",
      description:
        "We hold all required licenses for private hire operations at Heathrow Airport. Comprehensive insurance and full compliance with Transport for London rules.",
    },
    {
      iconName: "Clock",
      title: "24 Hour Heathrow Service",
      description:
        "We operate around the clock to match every flight arrival and departure. Early morning or late night, we are there.",
    },
    {
      iconName: "Star",
      title: "Consistently High Rated",
      description:
        "Our 4.9 star rating comes from thousands of Heathrow passengers who value our punctuality, professionalism and fair prices.",
    },
  ],
  stats: [
    { value: "50+", label: "Modern Vehicles" },
    { value: "80K+", label: "Heathrow Passengers" },
    { value: "50+", label: "Destinations" },
  ],
  floatingCard: {
    value: "Since 2012",
    label: "Heathrow Specialists",
  },
  image: {
    src: "/images/abtus.png",
    alt: "Airport Taxi Heathrow team and fleet at Heathrow Airport",
  },
};

// ============================================================
// CORPORATE EVENTS PAGE
// ============================================================
export const corporatePage = {
  breadcrumb: "Corporate Transfers",
  heroBadge: "Heathrow Executive Travel",
  hero: {
    title: "Executive",
    span: "Heathrow Transfers",
    subTitle:
      "Professional taxi service for business travel from Heathrow to Canary Wharf, City of London, Slough Trading Estate, Reading business parks and beyond. Account billing and flight monitoring included.",
    image: "/images/corporate3.png",
    imageAlt:
      "Executive taxi at Heathrow Terminal 2 for corporate travel",
  },
  stats: [
    { value: "500+", label: "Companies Served", color: "text-blue-600" },
    { value: "99%", label: "On Time Rate", color: "text-green-600" },
    { value: "50+", label: "Business Destinations", color: "text-purple-600" },
  ],
  featuresSectionBadge: "Why Businesses Choose Our Heathrow Executive Taxi",
  featuresSectionHeading: {
    line1: "Designed for",
    highlight: "Business Efficiency",
  },
  featuresSectionDescription:
    "We provide executive taxi and corporate shuttle services from Heathrow to every major business destination in London and the South East.",
  features: [
    {
      iconName: "Building2",
      title: "Executive Service",
      description:
        "Premium vehicles with professional chauffeurs for VIP clients, board meetings, and high profile events",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      iconName: "Wifi",
      title: "Business Amenities",
      description:
        "Stay productive with onboard WiFi, charging ports, and comfortable seating designed for working on the move",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      iconName: "Target",
      title: "Punctual & Reliable",
      description:
        "Guaranteed on time arrivals for critical meetings and conferences. Flight monitoring ensures we adapt to delays",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      iconName: "Briefcase",
      title: "Account Management",
      description:
        "Dedicated account manager for seamless coordination, regular reporting, and personalised service",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ],
  floatingCards: [
    { value: "WiFi", label: "On Board", iconName: "Wifi" },
    { value: "99%", label: "On Time", iconName: "Target" },
  ],
  detailBadge: "Heathrow to Business Destinations",
  detailHeading: "Professional Executive Taxi from Heathrow",
  detailDescription:
    "We specialise in corporate transfers from every Heathrow terminal. Our executive fleet serves Canary Wharf, the City of London, Slough Trading Estate, Reading, Bracknell, and major conference venues. All journeys include flight monitoring, meet and greet, and fixed pricing.",
  detailFeatures: [
    "Dedicated account manager for seamless coordination",
    "Onboard WiFi and power outlets for productivity",
    "Real time flight tracking and traffic monitoring",
    "Professional uniformed chauffeurs with local knowledge",
    "Optional branded vehicles for corporate events",
    "Transparent all inclusive pricing with no hidden fees",
  ],
  detailImages: [
    { src: "/images/corporate2.png", alt: "Executive taxi service at Heathrow Terminal 3 for business travel" },
    { src: "/images/corporate1.png", alt: "Corporate shuttle from Heathrow to Canary Wharf" },
  ],
  floatingInfoCard: { value: "24/7", label: "Business Support" },
  destinationsHeading: "Popular Business Destinations from Heathrow",
  destinations: [
    "Canary Wharf and City of London",
    "Slough Trading Estate and Business Parks",
    "Reading Green Park and Thames Valley Park",
    "Bracknell and Wokingham Corporate Hubs",
    "Uxbridge and Stockley Park",
    "Staines upon Thames Business Centres",
    "Central London Hotels and Conference Venues",
    "Cross border Corporate Travel to Birmingham and Manchester",
  ],
  ctaBadge: "Need Reliable Corporate Taxi from Heathrow?",
  ctaHeading: {
    line1: "Partner for",
    highlight: "Business Travel",
  },
  ctaDescription:
    "Get a custom quote for executive taxi hire, event shuttles, and corporate transfers from any Heathrow terminal.",
  ctaSecondary: "Call for Corporate Quotes",
  trustBadges: [
    { iconName: "Shield", label: "Fully Licensed", color: "text-green-600" },
    { iconName: "Users", label: "Professional Drivers", color: "text-blue-600" },
    { iconName: "Star", label: "4.9/5 Rated", color: "text-yellow-600" },
  ],
};

// ============================================================
// SCHOOL TRIPS PAGE
// ============================================================
export const schoolTripsPage = {
  breadcrumb: "School Trips & Transport",
  heroBadge: "Heathrow Area School Transport",
  hero: {
    title: "Safe School",
    span: "Trips from Heathrow Area",
    subTitle:
      "Reliable taxi and minibus transport for schools in Hounslow, Slough, Windsor, Hayes and surrounding areas. Daily school runs, educational visits, and group travel.",
    image: "/images/scht4.png",
    imageAlt:
      "School minibus at a primary school near Heathrow Airport",
  },
  stats: [
    { value: "300+", label: "Schools Served", color: "text-blue-600" },
    { value: "100%", label: "Safety Record", color: "text-green-600" },
    { value: "30+", label: "Educational Destinations", color: "text-purple-600" },
  ],
  featuresSectionBadge: "Why Schools Near Heathrow Trust Us",
  featuresSectionHeading: {
    line1: "Designed for",
    highlight: "Safe Student Travel",
  },
  featuresSectionDescription:
    "We understand the needs of schools around Heathrow. Our drivers are DBS checked, our vehicles have full seat belts, and we know the best routes to museums, historic sites, and activity centres.",
  features: [
    {
      iconName: "Shield",
      title: "Enhanced Safety",
      description:
        "Full seat belts, DBS checked drivers, and child specific safety training for all school journeys",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      iconName: "BookOpen",
      title: "Educational Focus",
      description:
        "Ideal for museum visits in London, Windsor Castle, Legoland, and science centres across the South East",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      iconName: "Users",
      title: "Group Friendly",
      description:
        "Minibuses and coaches designed for student groups with ample storage for bags, lunch boxes, and equipment",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      iconName: "HeartHandshake",
      title: "Teacher Support",
      description:
        "Dedicated support for teachers including itinerary planning, risk assessment advice, and on trip assistance",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ],
  floatingCards: [
    { value: "100%", label: "DBS Checked", iconName: "Shield" },
    { value: "4.9/5", label: "School Rating", iconName: "Trophy" },
  ],
  detailBadge: "School Transport Across the Heathrow Region",
  detailHeading: "Reliable School Runs and Educational Trips",
  detailDescription:
    "We provide safe, punctual transport for schools in Hounslow, Slough, Windsor, Hayes, Staines, and surrounding areas. Services include daily home to school runs, after school club shuttles, and full day educational trips to London museums, Windsor Castle, Legoland, and the Natural History Museum.",
  detailFeatures: [
    "Professional DBS checked drivers with child safety training",
    "Custom itineraries tailored to your school's schedule",
    "Wide range of educational and recreational destinations",
    "Air conditioned minibuses with full seat belts",
    "Special group discounts for schools and colleges",
    "Live GPS tracking for peace of mind",
  ],
  detailImages: [
    { src: "/images/scht1.png", alt: "School minibus outside a museum in London for an educational trip" },
    { src: "/images/scht2.png", alt: "Students boarding a safe school taxi near Heathrow" },
  ],
  floatingInfoCard: { value: "24/7", label: "School Support" },
  destinationsHeading: "Popular School Trip Destinations from Heathrow Area",
  destinations: [
    "Natural History Museum and Science Museum London",
    "Windsor Castle and Legoland Windsor",
    "Kew Gardens and Richmond Park",
    "Thorpe Park and Chessington World of Adventures",
    "Harry Potter Studio Tour Leavesden",
    "Blenheim Palace Oxford",
    "Royal Air Force Museum London",
    "London Zoo and Sealife Aquarium",
  ],
  ctaBadge: "Planning a School Trip from the Heathrow Area?",
  ctaHeading: {
    line1: "Let's Create",
    highlight: "Safe Learning Journeys",
  },
  ctaDescription:
    "Get a personalised quote for your school's next educational trip or daily transport needs. We serve Hounslow, Slough, Windsor, Hayes, Staines and all surrounding areas.",
  ctaSecondary: "Call for School Quotes",
  trustBadges: [
    { iconName: "Shield", label: "Fully Licensed", color: "text-green-600" },
    { iconName: "Users", label: "DBS Checked", color: "text-blue-600" },
    { iconName: "Star", label: "4.9/5 Rated", color: "text-yellow-600" },
  ],
};

// ============================================================
// TRANSFERS PAGE
// ============================================================
export const transfersPage = {
  breadcrumb: "Private Transfers",
  heroBadge: "Door to Door Heathrow Service",
  hero: {
    title: "Private",
    span: "Heathrow Transfers",
    subTitle:
      "Direct door to door taxi service from any Heathrow terminal to your home, hotel or office. Meet and greet, flight tracking, fixed prices. No shared vehicles.",
    image: "/images/transfer1.png",
    imageAlt:
      "Private taxi waiting at Heathrow Terminal 4 arrivals",
  },
  stats: [
    { value: "1000+", label: "Weekly Transfers", color: "text-blue-600" },
    { value: "99%", label: "On Time Rate", color: "text-green-600" },
    { value: "60+", label: "Destinations", color: "text-purple-600" },
  ],
  featuresSectionBadge: "Why Choose Our Private Heathrow Taxi",
  featuresSectionHeading: {
    line1: "Designed for",
    highlight: "Personal Comfort",
  },
  featuresSectionDescription:
    "Your journey from Heathrow should be stress free. We offer fixed prices, door to door service, and professional drivers who know the best routes.",
  features: [
    {
      iconName: "DoorOpen",
      title: "Door to Door Service",
      description:
        "Direct private transfers from your exact terminal arrival point to your front door across the UK",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      iconName: "Wifi",
      title: "Premium Comfort",
      description:
        "Complimentary WiFi, bottled water, and luxury seating for a relaxed journey after your flight",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      iconName: "Target",
      title: "Punctual & Reliable",
      description:
        "Guaranteed on time arrivals for flights, with free waiting time and automatic flight tracking",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      iconName: "Users",
      title: "Meet & Greet",
      description:
        "Your driver waits in arrivals with a name board, helps with luggage, and escorts you to the vehicle",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ],
  floatingCards: [
    { value: "Refresh", label: "Included", iconName: "Coffee" },
    { value: "99%", label: "On Time", iconName: "Target" },
  ],
  detailBadge: "Private Door to Door from Any Heathrow Terminal",
  detailHeading: "Professional Private Transfer Service",
  detailDescription:
    "No waiting for shared shuttles. No navigating public transport. Your private driver meets you in the arrivals hall, takes your luggage, and drives you directly to your destination. We serve all Heathrow terminals, 24 hours a day. Fixed price quoted before you book, with no meter and no hidden charges.",
  detailFeatures: [
    "Personal meet and greet service included for all bookings",
    "Real time flight tracking and free waiting time",
    "Complimentary WiFi and bottled water onboard",
    "Fixed transparent pricing with no hidden costs",
    "Professional uniformed drivers with local knowledge",
    "Executive and luxury vehicle options available",
  ],
  detailImages: [
    { src: "/images/transfer2.png", alt: "Meet and greet service at Heathrow Terminal 2 arrivals" },
    { src: "/images/transfer3.png", alt: "Private taxi from Heathrow to Central London" },
  ],
  floatingInfoCard: { value: "24/7", label: "Private Hire" },
  destinationsHeading: "Popular Private Transfer Destinations from Heathrow",
  destinations: [
    "Central London Hotels and Residences",
    "Canary Wharf and Docklands",
    "Windsor and Eton",
    "Reading and Thames Valley",
    "Oxford and the Cotswolds",
    "Southampton Cruise Terminal",
    "Slough and Maidenhead",
    "Richmond, Twickenham and Kingston",
  ],
  ctaBadge: "Need a Private Taxi from Heathrow?",
  ctaHeading: {
    line1: "Let's Take You",
    highlight: "Where You Need to Go",
  },
  ctaDescription:
    "Get an instant fixed price quote for your private door to door transfer from any Heathrow terminal.",
  ctaSecondary: "Call for Transfer Quotes",
  trustBadges: [
    { iconName: "Shield", label: "Fully Licensed", color: "text-green-600" },
    { iconName: "Users", label: "Professional Drivers", color: "text-blue-600" },
    { iconName: "Star", label: "4.9/5 Rated", color: "text-yellow-600" },
  ],
};

// ============================================================
// SHUTTLE SERVICES PAGE
// ============================================================
export const shuttlesPage = {
  breadcrumb: "Shuttle Services",
  heroBadge: "Shared Heathrow Transfers",
  hero: {
    title: "Affordable",
    span: "Heathrow Shuttle",
    subTitle:
      "Economical shared shuttle service from Heathrow to Central London hotels, Windsor, Slough and Reading. Regular scheduled runs. Professional drivers.",
    image: "/images/shuttle3.png",
    imageAlt:
      "Shared shuttle bus at Heathrow Terminal 5 for affordable transfers",
  },
  stats: [
    { value: "500+", label: "Weekly Passengers", color: "text-blue-600" },
    { value: "98%", label: "On Time Rate", color: "text-green-600" },
    { value: "30+", label: "Regular Routes", color: "text-purple-600" },
  ],
  featuresSectionBadge: "Why Choose Our Heathrow Shuttle Service",
  featuresSectionHeading: {
    line1: "Designed for",
    highlight: "Affordable Group Travel",
  },
  featuresSectionDescription:
    "Our shared shuttle service offers a budget friendly way to travel from Heathrow to popular destinations. Regular schedules, comfortable vehicles, and professional drivers.",
  features: [
    {
      iconName: "Bus",
      title: "Scheduled Shuttle",
      description:
        "Regular daily shuttles from all Heathrow terminals to Central London, Windsor, Slough and Reading",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      iconName: "Wifi",
      title: "Travel Comfort",
      description:
        "Onboard WiFi, charging ports, and comfortable seating for a relaxed shared journey",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      iconName: "Target",
      title: "Punctual & Reliable",
      description:
        "Guaranteed departures on a fixed schedule. We know Heathrow traffic and plan accordingly",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      iconName: "Route",
      title: "Multiple Stops",
      description:
        "We serve major hotels, train stations, and town centres across our shuttle routes",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ],
  floatingCards: [
    { value: "WiFi", label: "On Board", iconName: "Wifi" },
    { value: "24/7", label: "Service", iconName: "Clock4" },
  ],
  detailBadge: "Heathrow to London and South East Shuttles",
  detailHeading: "Reliable Shared Shuttle from Heathrow",
  detailDescription:
    "Our shuttle service provides an economical alternative to private taxis without compromising on reliability. We operate regular routes from all Heathrow terminals to Central London hotels, Windsor town centre, Slough station, and Reading. Professional drivers, comfortable minibuses, and fixed low prices.",
  detailFeatures: [
    "Fixed schedule and on demand shuttle options",
    "Modern air conditioned minibuses with luggage space",
    "Professional uniformed drivers with local knowledge",
    "Real time tracking and service updates",
    "Regular routes to hotels, stations and town centres",
    "Competitive group and individual pricing",
  ],
  detailImages: [
    { src: "/images/shuttle1.png", alt: "Heathrow shuttle service arriving at a Central London hotel" },
    { src: "/images/shuttle2.png", alt: "Shared shuttle from Heathrow Terminal 3 to Windsor" },
  ],
  floatingInfoCard: { value: "24/7", label: "Shuttle Support" },
  destinationsHeading: "Regular Shuttle Routes from Heathrow",
  destinations: [
    "Heathrow to Central London Hotels (Kensington, Paddington, Victoria)",
    "Heathrow to Windsor Town Centre and Windsor Castle",
    "Heathrow to Slough Station and Trading Estate",
    "Heathrow to Reading Station and Town Centre",
    "Heathrow to Uxbridge and Hillingdon",
    "Heathrow to Staines upon Thames",
    "Heathrow to Richmond and Twickenham",
    "Heathrow to Southampton Cruise Port (seasonal)",
  ],
  ctaBadge: "Need a Budget Friendly Heathrow Shuttle?",
  ctaHeading: {
    line1: "Let's Get You",
    highlight: "Where You Need to Be",
  },
  ctaDescription:
    "Book our shared shuttle service from any Heathrow terminal. Fixed low prices, regular schedules, professional drivers.",
  ctaSecondary: "Call for Shuttle Quotes",
  trustBadges: [
    { iconName: "Shield", label: "Fully Licensed", color: "text-green-600" },
    { iconName: "Users", label: "Professional Drivers", color: "text-blue-600" },
    { iconName: "Star", label: "4.9/5 Rated", color: "text-yellow-600" },
  ],
};

// ============================================================
// CONTACT PAGE
// ============================================================
export const contactPage = {
  heroBadge: "Get a Heathrow Taxi Quote",
  heroHeading: {
    line1: "Ready to",
    highlight: "Book Your Heathrow Transfer?",
  },
  heroDescription:
    "Tell us your flight details and destination. We will respond within one hour with a fixed price quote for your journey from any Heathrow terminal.",
  heroStats: [
    { value: "24/7", label: "Heathrow Support", color: "text-blue-600" },
    { value: "1h", label: "Response Time", color: "text-green-600" },
    { value: "100%", label: "Satisfaction", color: "text-purple-600" },
  ],
  formTitle: "Get Your Heathrow Taxi Quote",
  formSubtitle: "We will get back to you within 1 hour",
  fields: {
    fullName: "Full Name *",
    email: "Email Address *",
    phone: "Phone Number",
    serviceNeeded: "Service Needed *",
    passengers: "Number of Passengers",
    travelDate: "Travel Date",
    pickupTime: "Pickup Time",
    returnDate: "Return Date",
    returnTime: "Return Time",
    returnTrip: "Return Trip",
    message: "Message *",
  },
  placeholders: {
    fullName: "Your full name",
    email: "your@email.com",
    phone: "Phone number",
    serviceSelect: "Select a service",
    passengers: "e.g., 2",
    message:
      "Tell us your terminal, flight number, destination address, and any special requirements...",
  },
  services: [
    "Airport Transfers",
    "Corporate Transfers",
    "School Runs",
    "Hotel & Cruise Transfers",
  ],
  submitButton: "Get Free Quote",
  submittingButton: "Submitting...",
  officeTitle: "Our Office",
  officeAddress: "Main Office",
  officeHoursLabel: "Business Hours",
  officeHours: "Monday - Sunday: 24/7",
  phoneLabel: "Phone Support",
  whyChooseTitle: "Why Choose Airport Taxi Heathrow?",
  whyChooseFeatures: [
    "24/7 Customer Support",
    "1 Hour Response Time",
    "Professional Drivers",
    "Fully Licensed Service",
    "Fixed Competitive Pricing",
    "Nationwide Coverage",
  ],
  contactMethods: [
    {
      iconName: "Phone",
      title: "Call Us",
      description: "Speak directly with our Heathrow team",
      details: "+44 203 834 3211",
      action: "tel:+442038343211",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      iconName: "Mail",
      title: "Email Us",
      description: "Send us your flight and destination details",
      details: "info@busrentalbelgium.com",
      action: "mailto:info@busrentalbelgium.com",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      iconName: "MessageCircle",
      title: "Live Chat",
      description: "Get instant answers about Heathrow transfers",
      details: "Available 24/7",
      action: "#chat",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      iconName: "MapPin",
      title: "Visit Us",
      description: "Our main office near Heathrow",
      details: site.address,
      action: "#map",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ],
  noCountriesFound: "No countries found",
  searchPlaceholder: "Search country or code...",
  toasts: {
    datePast: "Please select a future date for travel",
    returnDateBefore: "Return date must be after travel date",
    validationError: "Please fill in all required fields",
    emailInvalid: "Please enter a valid email address",
    captchaFail: "Security verification failed. Please try again.",
    success: "Thank you! We will get back to you within 1 hour.",
    serverError: "Something went wrong. Please try again.",
    networkError: "Network error. Please check your connection and try again.",
    connectionError: "Server connection failed. Please try again later.",
    unexpectedError: "An unexpected error occurred. Please try again.",
  },
};

// ============================================================
// QUOTE MODAL
// ============================================================
export const quoteModal = {
  triggerButton: "Get Free Quote",
  title: "Get Your Heathrow Taxi Quote",
  subtitle: "Fill out the form below. We will get back to you within 2 hours with a fixed price.",
  preferToCall: "Prefer to call?",
  callButton: "Call +44 203 834 3211",
};

// ============================================================
// QUOTE FORM (used inside QuoteModal / Quote.tsx)
// ============================================================
export const quoteForm = {
  travelReasonLabel: "Reason for Travel",
  travelReasons: [
    { value: "airport", label: "Airport Transfers", iconName: "Plane", color: "text-purple-600", bgColor: "bg-purple-100" },
    { value: "corporate", label: "Corporate Transfers", iconName: "Building2", color: "text-blue-600", bgColor: "bg-blue-100" },
    { value: "school", label: "School Runs", iconName: "GraduationCap", color: "text-green-600", bgColor: "bg-green-100" },
    { value: "home", label: "Hotel & Cruise Transfers", iconName: "Home", color: "text-orange-600", bgColor: "bg-orange-100" },
    { value: "private", label: "Private Hire", iconName: "Users", color: "text-indigo-600", bgColor: "bg-indigo-100" },
    { value: "other", label: "Other", iconName: "MapPin", color: "text-gray-600", bgColor: "bg-gray-100" },
  ],
  personalInfoTitle: "Personal Information",
  tripDetailsTitle: "Trip Details",
  fields: {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone Number",
    company: "Company/School",
    pickup: "Pickup Location",
    destination: "Destination",
    travelDate: "Travel Date",
    pickupTime: "Pickup Time",
    returnDate: "Return Date",
    returnTime: "Return Time",
    returnTrip: "Return Trip",
    passengers: "Number of Passengers",
    message: "Additional Message",
  },
  placeholders: {
    phone: "Enter phone number",
    pickup: "Enter Heathrow terminal or address",
    destination: "Enter destination address or postcode",
    passengers: "e.g., 2",
    message:
      "Tell us your flight number, terminal, destination, and any special requests...",
    countrySearch: "Search country or code...",
  },
  submitButton: "Get Instant Quote",
  submittingButton: "Submitting...",
  responseTime: "We respond within 2 hours",
  noCountriesFound: "No countries found",
  errors: {
    reasonRequired: "Please select a reason for travel",
    firstNameRequired: "First name is required",
    lastNameRequired: "Last name is required",
    emailRequired: "Email is required",
    emailInvalid: "Email is invalid",
    phoneRequired: "Phone number is required",
    companyRequired: "Company/School is required",
    datePast: "Please select today or a future date",
    dateInvalid: "Please select a valid date",
    returnDateBefore: "Return date must be after travel date",
  },
  toasts: {
    validationError: "Please fill in all required fields correctly",
    datePast: "Please select today or a future date for travel",
    returnDateBefore: "Return date must be after travel date",
    captchaFail: "Security verification failed. Please try again.",
    networkError:
      "Network error. Please check your connection and try again.",
    serverError: "Server connection failed. Please try again later.",
    unexpectedError: "An unexpected error occurred. Please try again.",
    success: "Thank you! We will get back to you within 2 hours.",
  },
};

// ============================================================
// WHATSAPP BUTTON
// ============================================================
export const whatsAppButton = {
  ariaLabel: "Chat with us on WhatsApp",
};

// ============================================================
// COUNTRIES — shared between Quote form and Contact page
// ============================================================
export const countries = [
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