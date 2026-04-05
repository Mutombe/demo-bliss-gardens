export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Bliss Gardens",
    legalName: "Bliss Gardens Events Venue",
    tagline: "Where Dreams Find Their Garden.",
    description:
      "Bliss Gardens is Harare's most enchanting outdoor events venue. With manicured lawns, romantic garden settings, and versatile spaces, we provide the perfect backdrop for weddings, celebrations, and corporate functions.",
    phone: "+263 78 498 3189",
    phoneRaw: "+263784983189",
    whatsappNumber: "263784983189",
    email: "bookings@blissgardens.co.zw",
    address: "Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.2,
    ratingRounded: 4,
    reviewCount: 229,
    established: "2015",
    yearsExperience: "9+",
    projectsCompleted: "800+",
    employees: "25+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "bliss-gardens-cookie-consent",
    socialLinks: {
      facebook: "https://www.facebook.com/bliss.gardens.3/",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "Bliss",
    logoLine2: "Gardens",
  },

  hero: {
    badge: "Harare's Premier Garden Events Venue",
    titleParts: [
      { text: "WHERE DREAMS " },
      { text: "FIND", highlight: true },
      { text: " THEIR GARDEN." },
    ],
    subtitle:
      "Manicured lawns, romantic gazebos, and versatile spaces for 50 to 500 guests. Bliss Gardens transforms your vision into an unforgettable open-air experience.",
    ctaPrimary: "Book a Viewing",
    ctaSecondary: "See Our Spaces",
    trustBadge: "800+ Events Hosted",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85", alt: "Bliss Gardens professional image 1" },
      { url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=85", alt: "Bliss Gardens professional image 2" },
      { url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=85", alt: "Bliss Gardens professional image 3" },
    ],
  },

  stats: [
    { number: "800+", label: "Events Hosted" },
    { number: "9+", label: "Years of Magic" },
    { number: "500", label: "Max Capacity" },
    { number: "229", label: "Google Reviews" },
  ],

  servicesPreview: [
    {
      title: "Wedding Venues",
      desc: "Multiple garden settings for ceremonies and receptions. From intimate 50-guest gatherings to grand 500-guest celebrations under the stars.",
      icon: "Heart",
    },
    {
      title: "Corporate Functions",
      desc: "Professional outdoor spaces for team builds, product launches, and corporate dinners with full AV support.",
      icon: "Briefcase",
    },
    {
      title: "Birthday Celebrations",
      desc: "Themed party spaces for milestone birthdays, sweet sixteens, and children's parties with playground access.",
      icon: "Star",
    },
    {
      title: "Bridal Showers",
      desc: "Elegant garden alcoves perfect for intimate bridal showers, kitchen teas, and bachelorette gatherings.",
      icon: "Leaf",
    },
    {
      title: "Photography Venue",
      desc: "Stunning natural backdrops for maternity shoots, family portraits, and fashion photography.",
      icon: "Lightbulb",
    },
    {
      title: "Baby Showers",
      desc: "Charming garden settings with elegant decor options for welcoming your newest family member in style.",
      icon: "Buildings",
    },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Excellence across every discipline. Precision in every detail.",
    items: [
      {
        title: "Wedding Venues",
        slug: "wedding-venues",
        desc: "Multiple garden settings for ceremonies and receptions. From intimate 50-guest gatherings to grand 500-guest celebrations under the stars.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      },
      {
        title: "Corporate Functions",
        slug: "corporate-functions",
        desc: "Professional outdoor spaces for team builds, product launches, and corporate dinners with full AV support.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      },
      {
        title: "Birthday Celebrations",
        slug: "birthday-celebrations",
        desc: "Themed party spaces for milestone birthdays, sweet sixteens, and children's parties with playground access.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      },
      {
        title: "Bridal Showers",
        slug: "bridal-showers",
        desc: "Elegant garden alcoves perfect for intimate bridal showers, kitchen teas, and bachelorette gatherings.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      },
      {
        title: "Photography Venue",
        slug: "photography-venue",
        desc: "Stunning natural backdrops for maternity shoots, family portraits, and fashion photography.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      },
      {
        title: "Baby Showers",
        slug: "baby-showers",
        desc: "Charming garden settings with elegant decor options for welcoming your newest family member in style.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Work",
    heroSubtitle: "A selection of projects that showcase our commitment to quality.",
    items: [
      {
        title: "Project 01 - Commercial Bliss",
        slug: "project-01",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in wedding venues.",
        client: "Commercial Client",
        services: ["Wedding Venues", "Corporate Functions"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        ],
      },
      {
        title: "Project 02 - Residential Bliss",
        slug: "project-02",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in corporate functions.",
        client: "Residential Client",
        services: ["Corporate Functions", "Birthday Celebrations"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        ],
      },
      {
        title: "Project 03 - Industrial Bliss",
        slug: "project-03",
        category: "Industrial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in birthday celebrations.",
        client: "Industrial Client",
        services: ["Birthday Celebrations", "Bridal Showers"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        ],
      },
      {
        title: "Project 04 - Institutional Bliss",
        slug: "project-04",
        category: "Institutional",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in bridal showers.",
        client: "Institutional Client",
        services: ["Bridal Showers", "Photography Venue"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        ],
      },
      {
        title: "Project 05 - Commercial Bliss",
        slug: "project-05",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in photography venue.",
        client: "Commercial Client",
        services: ["Photography Venue", "Baby Showers"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        ],
      },
      {
        title: "Project 06 - Residential Bliss",
        slug: "project-06",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in baby showers.",
        client: "Residential Client",
        services: ["Baby Showers", "Wedding Venues"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        ],
      },
    ],
  },

  homeTestimonials: [
    {
      text: "Our wedding at Bliss Gardens was absolutely magical. The garden setting was so beautiful we barely needed any extra decor. Every photo looked like a fairytale.",
      name: "Rudo Chikwanha",
      role: "Bride, March 2024",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      text: "We hosted our company year-end function at Bliss Gardens and the team handled everything perfectly. The outdoor setting was a refreshing change from hotel ballrooms.",
      name: "Simon Mudzingwa",
      role: "HR Director, Delta Corporation",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      text: "The most beautiful venue in Harare. I have attended three events here and each time the gardens look even more stunning. Truly a special place.",
      name: "Tsitsi Mawere",
      role: "Event Planner, Harare",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    },
    {
      text: "My daughter's 21st birthday at Bliss Gardens was perfect. The fairy lights, the garden setting, and the attentive staff made it a night to remember.",
      name: "Joseph Kazembe",
      role: "Father of the Birthday Girl",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by excellence.",
    story: [
      "Bliss Gardens was born from a belief that Zimbabwe's beautiful climate deserves an equally beautiful venue. Since 2015, we have transformed our Harare property into a garden paradise that has hosted over 800 events.",
      "Every corner of Bliss Gardens has been designed with events in mind. From the rose-lined ceremony aisle to the fairy-lit reception lawn, every space tells a story. Our dedicated events team ensures seamless execution from setup to teardown.",
    ],
    values: [
      { title: "Natural Beauty", desc: "Manicured gardens, mature trees, and romantic landscaping provide a stunning backdrop without heavy decor." },
      { title: "Versatile Spaces", desc: "Multiple venues within one property. Intimate gazebos, open lawns, covered pavilions, and indoor backup options." },
      { title: "Full-Service Support", desc: "In-house catering partners, decor coordination, AV equipment, and a dedicated events manager for every booking." },
      { title: "Perfect Location", desc: "Centrally located in Harare with ample secure parking and easy access from all major routes." },
    ],
    team: [
      {
        name: "The Founder",
        role: "Managing Director",
        bio: "Bringing years of industry expertise and a passion for excellence to every project.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      },
      {
        name: "Operations Lead",
        role: "Operations Manager",
        bio: "Ensuring seamless execution and consistent quality across all our services.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      },
      {
        name: "Client Relations",
        role: "Client Success Manager",
        bio: "Dedicated to understanding client needs and delivering beyond expectations.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
      },
    ],
  },

  reviews: {
    heroTitle: "Client Reviews",
    heroSubtitle: "What our customers say about working with us.",
    items: [
      { text: "Our wedding at Bliss Gardens was absolutely magical. The garden setting was so beautiful we barely needed any extra decor. Every photo looked like a fairytale.", name: "Rudo Chikwanha", role: "Bride, March 2024", rating: 5 },
      { text: "We hosted our company year-end function at Bliss Gardens and the team handled everything perfectly. The outdoor setting was a refreshing change from hotel ballrooms.", name: "Simon Mudzingwa", role: "HR Director, Delta Corporation", rating: 5 },
      { text: "The most beautiful venue in Harare. I have attended three events here and each time the gardens look even more stunning. Truly a special place.", name: "Tsitsi Mawere", role: "Event Planner, Harare", rating: 5 },
      { text: "My daughter's 21st birthday at Bliss Gardens was perfect. The fairy lights, the garden setting, and the attentive staff made it a night to remember.", name: "Joseph Kazembe", role: "Father of the Birthday Girl", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "Help us deliver excellence. Every day.",
    positions: [
      {
        title: "Service Specialist",
        department: "Operations",
        location: "Harare",
        type: "Full-time",
        desc: "Join our team and help deliver outstanding service to our growing client base.",
      },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "We would love to hear from you. Reach out today.",
    branches: [
      {
        name: "Bliss Gardens",
        address: "Harare, Zimbabwe",
        phone: "+263 78 498 3189",
        email: "bookings@blissgardens.co.zw",
      },
    ],
  },

  homeCta: {
    title: "YOUR PERFECT GARDEN AWAITS",
    subtitle: "From intimate celebrations to grand affairs, Bliss Gardens provides the canvas for your most important moments. Book a viewing today.",
    ctaPrimary: "Book a Viewing",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Bliss Gardens! I would like to book a venue viewing.",
    backgroundImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85",
  },

  footer: {
    description: "Bliss Gardens is Harare's most enchanting outdoor events venue. With manicured lawns, romantic garden settings, and versatile spaces, we provide the p...",
    copyright: "Bliss Gardens",
  },
};

export default siteData;
