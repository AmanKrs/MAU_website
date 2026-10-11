/**
 * Portfolio data. Easy-update guide:
 *
 * 1. Copy a photo into public/images/<category>/ (e.g. public/images/bridal/look-01.jpg).
 * 2. Set `src` to "/images/bridal/look-01.jpg" and the real `width` / `height` in pixels.
 * 3. Write a descriptive `alt` (what the look is, not "image 1").
 * 4. Keep `label` honest: "Practice look" or "Model work" for work that was not a paid client booking.
 *
 * The shared bridal photo is temporary in each slot; replace each `src` and
 * matching `alt` with the intended photo. Only use photographs Pallavi owns
 * the rights to. Never use stock or AI-generated images as client work.
 */

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "bridal", label: "Bridal" },
  { id: "engagement", label: "Engagement" },
  { id: "party", label: "Party" },
  { id: "hairstyling", label: "Hairstyling" },
];

export const galleryItems = [
  {
    id: "bridal-01",
    category: "bridal",
    src: "/images/bridal/bridal-red.jpg",
    width: 505,
    height: 760,
    alt: "Bridal makeup look with a red veil and gold jewelry",
    label: "Temporary shared photo",
    featured: true,
  },
  {
    id: "party-01",
    category: "party",
    src: "/images/bridal/bridal-red.jpg",
    width: 505,
    height: 760,
    alt: "Bridal makeup look with a red veil and gold jewelry",
    label: "Temporary shared photo",
    featured: true,
  },
  {
    id: "engagement-01",
    category: "engagement",
    src: "/images/bridal/bridal-red.jpg",
    width: 505,
    height: 760,
    alt: "Bridal makeup look with a red veil and gold jewelry",
    label: "Temporary shared photo",
    featured: true,
  },
  {
    id: "hair-01",
    category: "hairstyling",
    src: "/images/bridal/bridal-red.jpg",
    width: 505,
    height: 760,
    alt: "Bridal makeup look with a red veil and gold jewelry",
    label: "Temporary shared photo",
    featured: true,
  },
  {
    id: "bridal-02",
    category: "bridal",
    src: "/images/bridal/bridal-red.jpg",
    width: 505,
    height: 760,
    alt: "Bridal makeup look with a red veil and gold jewelry",
    label: "Temporary shared photo",
    featured: true,
  },
  {
    id: "party-02",
    category: "party",
    src: "/images/bridal/bridal-red.jpg",
    width: 505,
    height: 760,
    alt: "Bridal makeup look with a red veil and gold jewelry",
    label: "Temporary shared photo",
    featured: true,
  },
  {
    id: "engagement-02",
    category: "engagement",
    src: "/images/bridal/bridal-red.jpg",
    width: 505,
    height: 760,
    alt: "Bridal makeup look with a red veil and gold jewelry",
    label: "Temporary shared photo",
    featured: true,
  },
  {
    id: "hair-02",
    category: "hairstyling",
    src: "/images/bridal/bridal-red.jpg",
    width: 505,
    height: 760,
    alt: "Bridal makeup look with a red veil and gold jewelry",
    label: "Temporary shared photo",
    featured: true,
  },
];
