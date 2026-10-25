/**
 * Single source of truth for all business facts, contact details, services and operating hours.
 * GUARDRAIL: Only use verified facts from the client's existing website (https://www.shineauto.co.uk).
 * Never invent customer counts, star ratings, guarantees, years in business, or prices.
 */

export interface ServiceDetail {
  slug: string;
  title: string;
  category: "Bodywork & Cosmetic" | "Mechanical & Maintenance";
  shortDescription: string;
  heroSnippet: string;
  whatWeDo: string[];
  whenYouNeedIt: string[];
  howWeQuote: string;
  image: string;
  altText: string;
}

export const BUSINESS_CONFIG = {
  // Brand & Legal
  name: "Shine Auto Centre",
  legalName: "Shine Auto Bodyworks LTD",
  companyNumber: "TODO: Client to confirm", // Intentionally marked TODO as requested

  // Contact Information
  phoneLandline: "01784 694898",
  phoneLandlineRaw: "+441784694898",
  phoneMobile: "07412 895092",
  phoneMobileRaw: "+447412895092",
  whatsappNumber: "447412895092",
  whatsappLink: "https://wa.me/447412895092",
  whatsappPrefilledMessage: "Hello Shine Auto Centre, I would like to get a quote for a car repair.",
  email: "info@shineauto.co.uk",

  // Physical Location
  address: {
    line1: "540-542 London Rd",
    area: "Stanwell",
    town: "Ashford",
    postcode: "TW15 3AE",
    full: "540-542 London Rd, Stanwell, Ashford TW15 3AE",
    googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=540-542+London+Rd,+Stanwell,+Ashford+TW15+3AE",
    googleMapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Shine+Auto+Centre+540-542+London+Rd+Stanwell+Ashford+TW15+3AE",
  },

  // Operating Hours
  hoursSummary: "Monday to Saturday, 9am to 6pm (Closed Sundays)",
  hoursDetailed: [
    { day: "Monday", open: "09:00", close: "18:00", isClosed: false },
    { day: "Tuesday", open: "09:00", close: "18:00", isClosed: false },
    { day: "Wednesday", open: "09:00", close: "18:00", isClosed: false },
    { day: "Thursday", open: "09:00", close: "18:00", isClosed: false },
    { day: "Friday", open: "09:00", close: "18:00", isClosed: false },
    { day: "Saturday", open: "09:00", close: "18:00", isClosed: false },
    { day: "Sunday", open: "Closed", close: "Closed", isClosed: true },
  ],

  // Client's exact turnaround claim
  responseClaim: "We usually respond in under 2 hours during working hours.",
  responseClaimFull: "We usually respond in under 2 hours during working hours (Mon to Sat, 9 to 6). Outside those hours we'll reply when we open.",

  // Feature Flags
  prototypeMode: true,
  enableFormSubmission: false, // Disabled by default for prototype mode
} as const;

export const SERVICES: ServiceDetail[] = [
  {
    slug: "accident-repair",
    title: "Accident Repair",
    category: "Bodywork & Cosmetic",
    shortDescription: "Complete structural alignment, panel restoration, and paint refinishing for vehicles involved in minor or major collisions.",
    heroSnippet: "Professional collision repair in Stanwell & Ashford restoring your vehicle to its pre-accident condition.",
    whatWeDo: [
      "Precision structural and chassis realignment",
      "Impact panel repairs, replacements, and welding",
      "Original manufacturer paint matching with high-grade automotive finishes",
      "Assistance with insurance paperwork and direct accident claims"
    ],
    whenYouNeedIt: [
      "Following a road traffic collision or impact",
      "When structural panels, bumpers, or wings have sustained deformities",
      "If vehicle alignment or panel gaps are distorted"
    ],
    howWeQuote: "Upload photos of the damaged panels or bring your vehicle by our Stanwell workshop for a comprehensive assessment.",
    image: "/images/gallery/pair-11-after.webp",
    altText: "Accident repair before and after completed at Shine Auto Centre"
  },
  {
    slug: "dent-and-scratch-repair",
    title: "Dent & Scratch Repair",
    category: "Bodywork & Cosmetic",
    shortDescription: "Fast, precision removal of car door dings, crease dents, stone chips, and deep paint key scratches.",
    heroSnippet: "Seamless dent and scratch repairs in Ashford with flawless factory color blending.",
    whatWeDo: [
      "Paintless dent removal (PDR) for minor creases and parking dings",
      "Surface scratch sanding, primer filling, and computerised color-match painting",
      "Clearcoat blending to ensure zero visible repair edges",
      "Restoration of protective weatherproofing seals"
    ],
    whenYouNeedIt: [
      "Car park door dings, supermarket trolley dents, or hail damage",
      "Deep scratches that penetrate below the clearcoat into the primer or metal",
      "Vandalism or key scratches across side panels"
    ],
    howWeQuote: "Send a quick photo of the scratch or dent on WhatsApp (07412 895092) or via our 3-step quote form.",
    image: "/images/gallery/pair-2-after.webp",
    altText: "Dent and scratch repair completed at Shine Auto Centre"
  },
  {
    slug: "bumper-repair",
    title: "Bumper Repair",
    category: "Bodywork & Cosmetic",
    shortDescription: "Specialised plastic welding, crack repairs, scuff removal, and clip realignment for front and rear bumpers.",
    heroSnippet: "Restore scuffed, cracked, or misaligned bumpers without expensive full replacements.",
    whatWeDo: [
      "Specialised thermoplastic bumper welding for structural splits",
      "Corner scuff and stone chip respraying",
      "Re-clipping and realignment of dislodged front or rear bumpers",
      "Parking sensor recalibration and bracket realignment"
    ],
    whenYouNeedIt: [
      "Low-speed parking impact scuffs or corner scrapes",
      "Cracked plastic following kerb or bollard strikes",
      "Bumper sagging or loose bumper clips"
    ],
    howWeQuote: "Snap a photo of the bumper damage and get an accurate repair estimate in under 2 hours during shop hours.",
    image: "/images/gallery/pair-6-after.webp",
    altText: "Rear bumper impact and scuff repair completed at Shine Auto Centre"
  },
  {
    slug: "re-spray",
    title: "Full & Partial Re-Spray",
    category: "Bodywork & Cosmetic",
    shortDescription: "Advanced color-matching technology and temperature-controlled spray booth painting for single panels or full vehicles.",
    heroSnippet: "Showroom-grade automotive spray painting and color matching in Stanwell, Ashford.",
    whatWeDo: [
      "Digital spectrophotometer computerised color formulation",
      "Single panel resprays (bonnet, roof, door, wing, tailgate)",
      "Full vehicle resprays and custom paint refinishing",
      "Multi-stage high-gloss clearcoat application with UV protection"
    ],
    whenYouNeedIt: [
      "Faded or peeling lacquer coats from sun or weather exposure",
      "Following panel replacements or major bodywork",
      "Mismatched paint shades from previous sub-standard repairs"
    ],
    howWeQuote: "Tell us your vehicle make, model and the panels requiring paintwork for a rapid quote.",
    image: "/images/gallery/pair-4-after.webp",
    altText: "Automotive paint respray and color matching completed at Shine Auto Centre"
  },
  {
    slug: "alloy-wheel-refurb",
    title: "Alloy Wheel Refurbishment",
    category: "Bodywork & Cosmetic",
    shortDescription: "Restoration of kerb-damaged, corroded, or scuffed alloy wheels to showroom condition.",
    heroSnippet: "Complete alloy wheel restoration and refinishing in Stanwell, Ashford.",
    whatWeDo: [
      "Kerb scrape and gouge metal filling and reprofiling",
      "Chemical strip, sandblasting, and corrosion removal",
      "Powder coat and wet-paint finishes in OEM or custom colors",
      "Protective diamond-cut or high-gloss clear sealing"
    ],
    whenYouNeedIt: [
      "Kerb damage on wheel rims and spokes",
      "Brake dust etching or winter salt corrosion",
      "Peeling paint or dull finish on alloys"
    ],
    howWeQuote: "Send photos of the wheels needing repair or note how many wheels require attention.",
    image: "/images/gallery/pair-7-after.webp",
    altText: "Refurbished alloy wheels and scuff repair completed at Shine Auto Centre"
  },
  {
    slug: "polishing-and-ceramic-wax",
    title: "Polishing & Ceramic Wax",
    category: "Bodywork & Cosmetic",
    shortDescription: "Multi-stage machine paint correction, swirl mark elimination, and durable ceramic wax protection.",
    heroSnippet: "Deep gloss paint correction and protective ceramic treatment for a radiant shine.",
    whatWeDo: [
      "Safe de-ironising wash and clay bar decontamination",
      "Machine rotary & dual-action polishing to remove micro-swirls and oxidisation",
      "High-grade ceramic wax coating providing hydrophobic water-beading",
      "Deep paint gloss enhancement with lasting UV defense"
    ],
    whenYouNeedIt: [
      "Swirl marks and spiderwebbing visible under sunlight",
      "Dull, oxidised paintwork lacking depth and reflection",
      "Vehicle preparation for sale or long-term preservation"
    ],
    howWeQuote: "Select polishing on our quote form or chat with our team on WhatsApp.",
    image: "/images/gallery/pair-12-after.webp",
    altText: "Ceramic waxing and machine polish finish completed at Shine Auto Centre"
  },
  {
    slug: "servicing-and-diagnostics",
    title: "General Maintenance & Diagnostics",
    category: "Mechanical & Maintenance",
    shortDescription: "Routine vehicle servicing, computerised fault diagnostics, clutch replacements, and cooling system maintenance.",
    heroSnippet: "Trusted car servicing and advanced diagnostics in Ashford for all makes and models.",
    whatWeDo: [
      "Full engine servicing, oil changes, and filter replacements",
      "Computerised OBD-II diagnostics to read warning lights and sensor faults",
      "Clutch replacements, exhaust repairs, and cooling system checks",
      "Battery health testing and alternator assessments"
    ],
    whenYouNeedIt: [
      "Engine management or dashboard warning light illuminated",
      "Unusual engine noises, loss of power, or rough idling",
      "Annual or mileage-based maintenance interval due"
    ],
    howWeQuote: "Provide your vehicle registration and describe the symptoms or service required.",
    image: "/images/gallery/pair-1-after.webp",
    altText: "Car engine maintenance and diagnostics completed at Shine Auto Centre"
  },
  {
    slug: "brakes-and-suspension",
    title: "Brakes & Suspension",
    category: "Mechanical & Maintenance",
    shortDescription: "Brake pad and disc renewals, fluid flushes, suspension arm replacements, and shock absorber repairs.",
    heroSnippet: "Expert brake inspection and suspension repairs ensuring safe, responsive handling.",
    whatWeDo: [
      "Brake pad, disc, and caliper inspection and replacement",
      "Brake fluid testing and pressure bleeding",
      "Shock absorber, strut, and coil spring replacements",
      "Suspension bush and anti-roll bar linkage repairs"
    ],
    whenYouNeedIt: [
      "Squealing, grinding, or soft brake pedal feel",
      "Knocking or clunking sounds over road bumps",
      "Uneven tyre wear or vehicle pulling to one side"
    ],
    howWeQuote: "Provide your vehicle registration for an exact parts and labor quotation.",
    image: "/images/gallery/pair-3-after.webp",
    altText: "Brakes and suspension repairs completed at Shine Auto Centre"
  }
];

export interface FaqItem {
  question: string;
  answer: string;
  category: "Quotes & Process" | "Repairs & Paint" | "Booking & Practical";
}

export const FAQS: FaqItem[] = [
  {
    question: "How long does it take to get a repair quote?",
    answer: "We usually respond in under 2 hours during working hours (Monday to Saturday, 9am to 6pm). If you submit your request outside our working hours, we will reply promptly when we open the next morning.",
    category: "Quotes & Process"
  },
  {
    question: "Do you provide free estimates or quotes?",
    answer: "Yes, we provide free, no-obligation quotes to help you understand the repair requirements and timeline upfront.",
    category: "Quotes & Process"
  },
  {
    question: "What information should I provide to get a quote?",
    answer: "Only your name, phone number, and the service you require are needed to start. If you have photos of the damage or know your vehicle make and registration, sharing them helps us provide the most accurate estimate faster.",
    category: "Quotes & Process"
  },
  {
    question: "Are there any hidden fees in your pricing?",
    answer: "No. Our pricing is completely transparent. We discuss all work, parts, and labor with you before commencing any repair.",
    category: "Quotes & Process"
  },
  {
    question: "Do you work on all car makes and models?",
    answer: "Yes, our workshop repairs, services, and paints vehicles of all makes and models, from family hatchbacks to premium vehicles.",
    category: "Repairs & Paint"
  },
  {
    question: "Do you offer color matching for paint jobs?",
    answer: "Absolutely! We use advanced computerised color-matching technology to precisely replicate your vehicle's factory shade for a seamless, unnoticeable blend.",
    category: "Repairs & Paint"
  },
  {
    question: "What types of car body repairs do you offer?",
    answer: "We offer a full range of bodywork services, including dent and scratch repair, collision damage repair, bumper restoration, alloy wheel refurb, panel re-sprays, and rust rectification.",
    category: "Repairs & Paint"
  },
  {
    question: "What kind of paint do you use and is it durable?",
    answer: "We use high-grade automotive coatings and durable clearcoats engineered to withstand road debris, UV sunlight, and weather extremes.",
    category: "Repairs & Paint"
  },
  {
    question: "How long does a repair or paint job take to complete?",
    answer: "Minor repairs and dent removals may take just a few hours to a single day, while extensive collision repairs or full panel re-sprays typically take 2 to 5 working days. We provide a clear timeline during your initial quote.",
    category: "Booking & Practical"
  },
  {
    question: "Do I need an appointment or do you accept walk-ins?",
    answer: "Walk-ins are always welcome during our open hours (Mon-Sat, 9am-6pm) at 540-542 London Rd, Stanwell. Scheduling in advance or requesting a quote online ensures faster turnaround.",
    category: "Booking & Practical"
  },
  {
    question: "Where are you located?",
    answer: "Our workshop is conveniently located at 540-542 London Rd, Stanwell, Ashford TW15 3AE, with easy access across the local Ashford and Heathrow area.",
    category: "Booking & Practical"
  },
  {
    question: "Can I send photos of the damage over WhatsApp?",
    answer: "Yes! You can message our workshop mobile directly on 07412 895092 (WhatsApp link: wa.me/447412895092) with photos or videos for a swift assessment.",
    category: "Booking & Practical"
  }
];

/**
 * Calculates whether the garage is currently open based on UK Europe/London time.
 * Hours: Mon-Sat 09:00 - 18:00 (Sunday closed)
 */
export function getGarageStatus(date: Date = new Date()): {
  isOpen: boolean;
  statusText: string;
  statusBadge: string;
  nextOpenText: string;
} {
  // Convert date to Europe/London time string
  const londonDateStr = date.toLocaleString("en-GB", { timeZone: "Europe/London" });
  // Format: "DD/MM/YYYY, HH:MM:SS"
  const [datePart, timePart] = londonDateStr.split(", ");
  const [day, month, year] = datePart.split("/").map(Number);
  const [hour, minute] = timePart.split(":").map(Number);

  // Construct local London Date object
  const londonDate = new Date(year, month - 1, day, hour, minute);
  const dayOfWeek = londonDate.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  const currentMinutes = hour * 60 + minute;
  const openMinutes = 9 * 60; // 09:00
  const closeMinutes = 18 * 60; // 18:00

  const isWorkDay = dayOfWeek >= 1 && dayOfWeek <= 6; // Mon - Sat
  const isOpen = isWorkDay && currentMinutes >= openMinutes && currentMinutes < closeMinutes;

  if (isOpen) {
    const closesInHours = Math.floor((closeMinutes - currentMinutes) / 60);
    const closesInMins = (closeMinutes - currentMinutes) % 60;
    const timeRemainingStr = closesInHours > 0 
      ? `Closes at 6:00pm (${closesInHours}h ${closesInMins}m remaining)`
      : `Closes soon at 6:00pm (${closesInMins}m remaining)`;

    return {
      isOpen: true,
      statusText: "Open Now",
      statusBadge: "Open today until 6:00pm",
      nextOpenText: timeRemainingStr,
    };
  }

  // If closed, figure out when it opens next
  if (dayOfWeek === 0) {
    // Sunday -> opens Monday 9am
    return {
      isOpen: false,
      statusText: "Closed Today (Sunday)",
      statusBadge: "Opens Monday at 9:00am",
      nextOpenText: "Opens tomorrow at 9:00am",
    };
  }

  if (currentMinutes < openMinutes) {
    return {
      isOpen: false,
      statusText: "Opens at 9:00am",
      statusBadge: "Opens today at 9:00am",
      nextOpenText: "Opens this morning at 9:00am",
    };
  }

  // After 18:00 Mon-Sat
  if (dayOfWeek === 6) {
    // Saturday evening -> opens Monday 9am
    return {
      isOpen: false,
      statusText: "Closed for the evening",
      statusBadge: "Opens Monday at 9:00am",
      nextOpenText: "Opens Monday morning at 9:00am",
    };
  }

  return {
    isOpen: false,
    statusText: "Closed for the evening",
    statusBadge: "Opens tomorrow at 9:00am",
    nextOpenText: "Opens tomorrow morning at 9:00am",
  };
}
