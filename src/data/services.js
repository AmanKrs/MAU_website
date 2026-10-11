/**
 * Service catalogue.
 *
 * - `offered: false` hides a service everywhere until Pallavi confirms it.
 * - `startingPrice` stays null until a price is confirmed; it is only shown when set
 *   (e.g. startingPrice: "₹X,XXX").
 * - `page` is the dedicated route (only four services have one).
 */

export const services = [
  {
    slug: "bridal-makeup",
    page: "/services/bridal-makeup",
    name: "Bridal Makeup",
    offered: true,
    category: "bridal",
    short:
      "Wedding-day makeup shaped around your features, outfit and the way you want to feel.",
    startingPrice: null,
    hero: {
      eyebrow: "Bridal makeup",
      title: "Bridal makeup that feels like you, only more luminous.",
      intro:
        "Your wedding look should photograph beautifully and still feel comfortable from the first ritual to the last. Pallavi plans bridal makeup around your skin, your outfit and the finish you love, whether that is soft and radiant or richly defined.",
    },
    description: [
      "Every bridal booking begins with a conversation: your outfit, jewellery, the time of day and how you want to look in photographs and in person. From there Pallavi builds a look that suits your features instead of following a fixed formula.",
      "Skin preparation, base, eyes, lips and final finishing are all planned together so the look settles in evenly and stays refined through the celebrations.",
    ],
    occasions: [
      "Wedding day",
      "Haldi and mehendi",
      "Sangeet",
      "Pre-wedding shoot",
    ],
    styles: [
      "Soft glam",
      "Radiant natural-finish bridal",
      "Classic defined eyes",
      "Rich traditional bridal",
    ],
    galleryCategory: "bridal",
    travelNote:
      "Bridal bookings are based in Patna. Travel for selected locations can be discussed — confirm dates and charges directly with Pallavi.",
    faqs: [
      {
        q: "How early should I enquire about bridal makeup?",
        a: "Share your wedding date as soon as it is fixed. Pallavi can then confirm whether she is available and plan a time for your look.",
      },
      {
        q: "Can I share reference looks?",
        a: "Yes. Photos of makeup you love, along with your outfit and jewellery details, help Pallavi shape a look that suits you.",
      },
      {
        q: "Is hairstyling available with bridal makeup?",
        a: "Hairstyling is offered as a separate service and can be discussed together with your bridal makeup enquiry.",
      },
      {
        q: "How do I get pricing?",
        a: "Pricing depends on the look, the date and the location, so it is shared directly on WhatsApp once Pallavi knows your requirements.",
      },
    ],
  },
  {
    slug: "engagement-makeup",
    page: "/services/engagement-makeup",
    name: "Engagement Makeup",
    offered: true,
    category: "engagement",
    short:
      "A polished, camera-ready look for your ring ceremony, designed to complement your outfit.",
    startingPrice: null,
    hero: {
      eyebrow: "Engagement makeup",
      title: "A first milestone deserves a look you love.",
      intro:
        "An engagement is full of photographs and first impressions. Pallavi creates a refined look that works with your outfit and your style, so you can enjoy the day without thinking about your makeup.",
    },
    description: [
      "Engagement makeup sits between everyday polish and full bridal glamour. Pallavi balances a smooth, even base with eyes and lips chosen to complement your outfit colour and the lighting of your venue.",
      "Share your outfit, the time of the ceremony and the look you have in mind, and she will suggest options that suit your features.",
    ],
    occasions: [
      "Ring ceremony",
      "Roka and sagai",
      "Engagement photoshoot",
      "Family functions around the engagement",
    ],
    styles: [
      "Soft glam",
      "Dewy natural finish",
      "Defined eyes with a soft lip",
      "Statement lip with minimal eyes",
    ],
    galleryCategory: "engagement",
    travelNote:
      "Based in Patna. Enquire early if your engagement is in another city so travel can be discussed.",
    faqs: [
      {
        q: "What should I share when I enquire?",
        a: "Your event date, venue or city, the outfit colour and the kind of look you prefer. Reference photos are welcome.",
      },
      {
        q: "Can the look be adjusted for evening lighting?",
        a: "Yes. The finish and intensity can be planned around whether your ceremony is in daylight, indoors or at night.",
      },
      {
        q: "Can I book engagement and reception makeup together?",
        a: "You can ask about both in one enquiry. Pallavi will confirm availability and what can be arranged.",
      },
    ],
  },
  {
    slug: "party-makeup",
    page: "/services/party-makeup",
    name: "Party Makeup",
    offered: true,
    category: "party",
    short:
      "Occasion makeup for parties, festive evenings and celebrations, from soft glam to bold.",
    startingPrice: null,
    hero: {
      eyebrow: "Party & occasion makeup",
      title: "Celebrations, festive evenings and everything in between.",
      intro:
        "For birthdays, festive gatherings, receptions and nights out, Pallavi creates occasion makeup that is polished, comfortable and photo-ready, in the intensity that suits you.",
    },
    description: [
      "Party makeup is about matching the mood of the occasion. A cocktail evening, a festive family gathering and a reception each call for a different finish, and Pallavi plans yours around your outfit and preferences.",
      "Looks range from soft, glowing glam to bolder eyes and lips, always tailored to your features.",
    ],
    occasions: [
      "Reception and cocktail events",
      "Festive celebrations",
      "Birthdays and anniversaries",
      "Family functions and parties",
    ],
    styles: [
      "Soft glam",
      "Bold eyes",
      "Classic red lip",
      "Shimmer and glitter accents",
    ],
    galleryCategory: "party",
    travelNote:
      "Based in Patna. For occasions in other cities, please ask about travel availability before you plan your date.",
    faqs: [
      {
        q: "Do you do makeup for festive occasions?",
        a: "Festive and occasion makeup can be discussed through this service. Share the date, outfit and location to check availability.",
      },
      {
        q: "Can I ask for a specific look?",
        a: "Yes. Send reference photos or describe the finish you like, and Pallavi will guide you on what suits your features.",
      },
      {
        q: "How do I find out the price?",
        a: "Pricing is shared directly on WhatsApp after you send your date, look and location.",
      },
    ],
  },
  {
    slug: "hairstyling",
    page: "/services/hairstyling",
    name: "Hairstyling",
    offered: true,
    category: "hairstyling",
    short:
      "Hairstyles that complete your makeup, from soft waves to polished, secured updos.",
    startingPrice: null,
    hero: {
      eyebrow: "Hairstyling",
      title: "The finishing touch to a complete look.",
      intro:
        "Hair frames the face and finishes the outfit. Pallavi offers hairstyling that works with your makeup, dupatta, jewellery and the length of the event.",
    },
    description: [
      "Hairstyling can be booked alongside makeup so the whole look is planned together, from the neckline of your outfit to the placement of jewellery and accessories.",
      "Share your hair length, texture and the style you have in mind, and Pallavi will discuss what is possible for your occasion.",
    ],
    occasions: [
      "Bridal and pre-wedding events",
      "Engagement and reception",
      "Parties and festive occasions",
      "Photoshoots",
    ],
    styles: [
      "Soft waves and open styles",
      "Low and high buns",
      "Braided styles",
      "Styles planned around a dupatta or jewellery",
    ],
    galleryCategory: "hairstyling",
    travelNote:
      "Based in Patna. Travel for selected locations can be discussed when you enquire.",
    faqs: [
      {
        q: "Can I book hairstyling without makeup?",
        a: "Please ask when you enquire. Pallavi will confirm what can be arranged for your date.",
      },
      {
        q: "Should I wash my hair before the appointment?",
        a: "Pallavi will share any preparation advice for your style when your booking is confirmed.",
      },
      {
        q: "Can you style hair around heavy jewellery or a dupatta?",
        a: "Yes, mention your outfit and jewellery in your enquiry so the style can be planned around them.",
      },
    ],
  },
  {
    slug: "reception-makeup",
    page: null,
    name: "Reception Makeup",
    offered: true,
    category: "party",
    short:
      "Evening-ready makeup for your reception, with a polished finish for lights and photographs.",
    startingPrice: null,
  },
  {
    slug: "festive-makeup",
    page: null,
    name: "Festive Makeup",
    offered: true,
    category: "party",
    short:
      "Radiant makeup for festivals and family celebrations, planned around your outfit.",
    startingPrice: null,
  },
  {
    slug: "saree-draping",
    page: null,
    name: "Saree Draping",
    offered: false, // Set to true only if Pallavi confirms she offers this.
    category: "party",
    short: "Neat saree draping to complete your occasion look.",
    startingPrice: null,
  },
  {
    slug: "family-makeup",
    page: null,
    name: "Family Makeup",
    offered: false, // Set to true only if Pallavi confirms she offers this.
    category: "party",
    short: "Makeup for family members attending your celebration.",
    startingPrice: null,
  },
];

export const offeredServices = services.filter((s) => s.offered);
export const servicePages = services.filter((s) => s.page && s.offered);

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}

/** Options for the contact form, always ending with a catch-all. */
export const serviceOptions = [
  ...offeredServices.map((s) => s.name),
  "Other / not sure yet",
];
