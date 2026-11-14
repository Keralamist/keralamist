import type { IconName } from "@/components/FeatureIcon";

export type Feature = { label: string; icon: IconName };

export type Photo = {
  src: string;
  alt: string;
  /** Use "contain" for portrait photos so the gallery shows the whole picture. */
  fit?: "contain";
  /** CSS object-position used when the photo is cropped, e.g. "70% 60%". */
  position?: string;
};

export type Property = {
  slug: string;
  name: string;
  /** Destination shown on cards. Add new Kerala destinations by using a new value here. */
  location: string;
  description: string;
  features: [Feature, Feature, Feature, Feature];
  featured?: boolean;
  /** Shown in the homepage "Highlighted Properties" section. */
  highlighted?: boolean;
  cover: string;
  coverAlt: string;
  /** Longer text for the detail page (one entry per paragraph). Falls back to `description`. */
  overview?: string[];
  /** Highlights for the detail page. Falls back to the four card `features`. */
  highlights?: Feature[];
  /** Extra facts for the detail page, e.g. Type, Ideal For, Experience. */
  details?: { label: string; value: string }[];
  /** Extra photographs for the detail-page gallery (the cover is always first). */
  gallery?: Photo[];
  /** Set to false when the gallery already contains the full version of the cover photo. */
  coverInGallery?: boolean;
};

const img = (slug: string) => `/images/properties/${slug}/cover.jpg`;

// NOTE: amenities below are approved website copy but must be confirmed
// with each property before the site is published.
export const properties: Property[] = [
  {
    slug: "orange-valley",
    name: "Orange Valley",
    location: "Vagamon",
    description:
      "A premium hillside stay with scenic views, modern comforts and a peaceful atmosphere.",
    features: [
      { label: "Rooms & Villas", icon: "bed" },
      { label: "Swimming Pool", icon: "pool" },
      { label: "Hill View", icon: "mountain" },
      { label: "Dining", icon: "dining" },
    ],
    featured: true,
    highlighted: true,
    cover: img("orange-valley"),
    coverAlt: "Green-roofed hillside villas at Orange Valley in Vagamon",
    overview: [
      "A premium hillside stay in Vagamon, offering a perfect blend of comfort, nature and tranquillity. Surrounded by lush tea gardens and misty hills, Orange Valley is ideal for families, couples and groups looking for a refreshing getaway.",
    ],
    gallery: [
      { src: "/images/properties/orange-valley/pool.jpg", alt: "Infinity pool overlooking tea gardens at Orange Valley, Vagamon" },
      { src: "/images/properties/orange-valley/room-seating.jpg", alt: "Room seating area with television at Orange Valley, Vagamon" },
      { src: "/images/properties/orange-valley/grounds.jpg", alt: "Landscaped driveway and hill views at Orange Valley, Vagamon" },
    ],
  },
  {
    slug: "eagle-camp",
    name: "Eagle Camp",
    location: "Vagamon",
    description:
      "A nature camp experience surrounded by greenery, ideal for families and groups.",
    features: [
      { label: "Camping", icon: "tent" },
      { label: "Campfire", icon: "campfire" },
      { label: "Group Stays", icon: "group" },
      { label: "Nature Trails", icon: "sprout" },
    ],
    highlighted: true,
    cover: img("eagle-camp"),
    coverAlt: "Row of tents on a green hillside at Eagle Camp in Vagamon",
    overview: [
      "A nature camp experience surrounded by greenery, ideal for families and groups. Enjoy the outdoors, bonfire evenings and a refreshing stay in Vagamon.",
    ],
    details: [
      { label: "Type", value: "Camp Stay" },
      { label: "Ideal For", value: "Families, Groups & Friends" },
      { label: "Experience", value: "Nature Stay, Campfire & Outdoor Fun" },
    ],
    coverInGallery: false,
    gallery: [
      { src: "/images/properties/eagle-camp/tent-row.jpg", alt: "Row of tents on a green hillside at Eagle Camp, Vagamon", position: "60% 70%" },
      { src: "/images/properties/eagle-camp/tent-sunset.jpg", alt: "Tent on the lawn at sunset at Eagle Camp, Vagamon", position: "40% 70%" },
      { src: "/images/properties/eagle-camp/group-breakfast.jpg", alt: "Guests at an outdoor table beside the tents at Eagle Camp, Vagamon", position: "35% 60%" },
      { src: "/images/properties/eagle-camp/campsite.jpg", alt: "Tents among the trees at Eagle Camp, Vagamon", position: "60% 70%" },
    ],
  },
  {
    slug: "golden-meadows",
    name: "Golden Meadows",
    location: "Vagamon",
    description:
      "A spacious hill resort with beautiful landscapes, premium rooms and family-friendly amenities.",
    features: [
      { label: "Cottages", icon: "bed" },
      { label: "Swimming Pool", icon: "pool" },
      { label: "Family Stay", icon: "group" },
      { label: "Scenic View", icon: "binoculars" },
    ],
    highlighted: true,
    cover: img("golden-meadows"),
    coverAlt: "Villas and landscaped garden paths beside a tea garden at Golden Meadows in Vagamon",
    overview: [
      "A spacious hill resort in Vagamon with beautiful landscapes, well-appointed rooms and a peaceful environment, ideal for families and group stays amidst nature.",
    ],
    details: [
      { label: "Type", value: "Resort" },
    ],
    coverInGallery: false,
    gallery: [
      { src: "/images/properties/golden-meadows/villas.jpg", alt: "Villas and landscaped garden paths at Golden Meadows, Vagamon", position: "50% 45%" },
      { src: "/images/properties/golden-meadows/pool.jpg", alt: "Covered swimming pool at Golden Meadows, Vagamon" },
      { src: "/images/properties/golden-meadows/living-room.jpg", alt: "Living and dining room with hill view at Golden Meadows, Vagamon" },
      { src: "/images/properties/golden-meadows/bedroom.jpg", alt: "Bedroom at Golden Meadows, Vagamon" },
    ],
  },
  {
    slug: "rainforest",
    name: "Rain Forest",
    location: "Vagamon",
    description:
      "A serene stay by the forest, offering peace, comfort and a closer connection to nature.",
    features: [
      { label: "Premium Rooms", icon: "bed" },
      { label: "Forest View", icon: "forest" },
      { label: "Café / Dining", icon: "cafe" },
      { label: "Nature Stay", icon: "sprout" },
    ],
    highlighted: true,
    cover: img("rainforest"),
    coverAlt: "A-frame cabins above a tea garden at Rain Forest in Vagamon",
    overview: [
      "A serene stay by the forest, offering peace, comfort and a closer connection to nature. Ideal for travellers seeking a quiet and refreshing getaway in Vagamon.",
    ],
    details: [
      { label: "Type", value: "Resort / Nature Stay" },
      { label: "Ideal For", value: "Families, Couples and Nature Lovers" },
    ],
    coverInGallery: false,
    gallery: [
      { src: "/images/properties/rainforest/cabins.jpg", alt: "A-frame cabins above a tea garden at Rain Forest, Vagamon", position: "50% 70%" },
      { src: "/images/properties/rainforest/balcony.jpg", alt: "Balcony overlooking the trees at Rain Forest, Vagamon", fit: "contain", position: "50% 60%" },
      { src: "/images/properties/rainforest/bedroom.jpg", alt: "Bedroom at Rain Forest, Vagamon", fit: "contain", position: "50% 75%" },
    ],
  },
  {
    slug: "eden-thottam",
    name: "Eden Thottam",
    location: "Vagamon",
    description: "A tranquil property amidst greenery, perfect for a relaxing family getaway.",
    features: [
      { label: "Spacious Rooms", icon: "bed" },
      { label: "Garden Surroundings", icon: "garden" },
      { label: "Family Friendly", icon: "group" },
      { label: "Hill View", icon: "mountain" },
    ],
    highlighted: true,
    cover: img("eden-thottam"),
    coverAlt: "Stone cottage with outdoor seating at dusk at Eden Thottam in Vagamon",
    overview: [
      "A tranquil property amidst greenery, perfect for a relaxing family getaway. Enjoy the peaceful surroundings, open spaces and refreshing hill views at Eden Thottam in Vagamon.",
    ],
    highlights: [
      { label: "Nature Stay", icon: "forest" },
      { label: "Family Friendly", icon: "group" },
      { label: "Hill View", icon: "mountain" },
      { label: "Green Surroundings", icon: "sprout" },
      { label: "Spacious Rooms", icon: "bed" },
    ],
    details: [
      { label: "Type", value: "Resort / Holiday Stay" },
      { label: "Ideal For", value: "Families, Couples and Groups" },
      { label: "Experience", value: "A peaceful stay close to nature" },
    ],
    coverInGallery: false,
    gallery: [
      { src: "/images/properties/eden-thottam/exterior.jpg", alt: "Stone cottage with outdoor seating at dusk at Eden Thottam, Vagamon", fit: "contain", position: "70% 62%" },
      { src: "/images/properties/eden-thottam/living-room.jpg", alt: "Living room with sofa and brick wall at Eden Thottam, Vagamon", fit: "contain", position: "50% 65%" },
      { src: "/images/properties/eden-thottam/bedroom.jpg", alt: "Bedroom at Eden Thottam, Vagamon" },
    ],
  },
  {
    slug: "panheaven-couple-villa",
    name: "Panheaven Couple Villa",
    location: "Vagamon",
    description:
      "A private and romantic villa designed for couples, with modern comforts and breathtaking views.",
    features: [
      { label: "Couple Stay", icon: "heart" },
      { label: "Private & Peaceful", icon: "infinity" },
      { label: "Swimming Pool", icon: "pool" },
      { label: "Valley View", icon: "mountain" },
    ],
    highlighted: true,
    cover: img("panheaven-couple-villa"),
    coverAlt: "Stone villa among flowering gardens with a lamp-lit path at Panheaven Couple Villa in Vagamon",
    overview: [
      "A private and romantic villa designed for couples, with modern comforts and breathtaking views. Perfect for a peaceful and memorable getaway in Vagamon.",
      "Panheaven Couple Villa is a charming private villa in Vagamon, ideal for couples seeking comfort, privacy and a closer connection to nature. Surrounded by greenery and scenic hills, it offers a calm and refreshing atmosphere for a relaxing holiday.",
    ],
    details: [
      { label: "Type", value: "Private Villa" },
      { label: "Ideal For", value: "Couples" },
      { label: "Experience", value: "Peaceful Stay, Scenic Views" },
    ],
    coverInGallery: false,
    gallery: [
      { src: "/images/properties/panheaven-couple-villa/villa-path.jpg", alt: "Stone villa and lamp-lit garden path at Panheaven Couple Villa, Vagamon", fit: "contain", position: "50% 45%" },
      { src: "/images/properties/panheaven-couple-villa/villa-dusk.jpg", alt: "Villa balcony lit up at dusk at Panheaven Couple Villa, Vagamon", fit: "contain", position: "40% 45%" },
      { src: "/images/properties/panheaven-couple-villa/valley-view.jpg", alt: "Morning coffee with a valley view at Panheaven Couple Villa, Vagamon", fit: "contain", position: "50% 70%" },
    ],
  },
  {
    slug: "silver-oak-tent",
    name: "Silver Oak Tent",
    location: "Vagamon",
    description:
      "A unique tent stay amidst nature, perfect for adventure seekers and group getaways.",
    features: [
      { label: "Tent Stay", icon: "tent" },
      { label: "Campfire", icon: "campfire" },
      { label: "Group Friendly", icon: "group" },
      { label: "Nature Experience", icon: "pines" },
    ],
    cover: img("silver-oak-tent"),
    coverAlt: "Silver Oak tent accommodation on a wooded hillside in Vagamon",
    overview: [
      "Experience a unique camping getaway at Silver Oak Tent, Vagamon. Enjoy a spacious tent accommodation surrounded by lush greenery, scenic natural landscapes and peaceful outdoor surroundings. Perfect for nature lovers seeking a refreshing escape in the hills of Vagamon.",
    ],
    highlights: [
      { label: "Tent Stay Experience", icon: "tent" },
      { label: "Amidst Greenery", icon: "sprout" },
      { label: "Scenic Surroundings", icon: "mountain" },
      { label: "Ideal for Groups", icon: "group" },
      { label: "Nature Getaway", icon: "pines" },
    ],
    coverInGallery: false,
    gallery: [
      { src: "/images/properties/silver-oak-tent/tents.jpg", alt: "Tent accommodation on a wooded hillside at Silver Oak Tent, Vagamon", position: "50% 55%" },
      { src: "/images/properties/silver-oak-tent/tent-interior.jpg", alt: "Bed and writing desk inside a tent at Silver Oak Tent, Vagamon" },
      { src: "/images/properties/silver-oak-tent/tent-side.jpg", alt: "Tent with sit-out among the trees at Silver Oak Tent, Vagamon", fit: "contain", position: "50% 60%" },
    ],
  },
  {
    slug: "keralamist",
    name: "KeralaMist",
    location: "Vagamon",
    description:
      "A signature stay by KeralaMist, blending comfort, style and stunning hill views.",
    features: [
      { label: "Premium Stay", icon: "bed" },
      { label: "Swimming Pool", icon: "pool" },
      { label: "Dining", icon: "dining" },
      { label: "Hill View", icon: "mountain" },
    ],
    cover: img("keralamist"),
    coverAlt: "Traditional tiled-roof house with a stone path at KeralaMist in Vagamon",
    overview: [
      "Experience a peaceful nature stay surrounded by lush greenery, misty landscapes, and traditional Kerala-style architecture. Perfect for a relaxing getaway amidst nature.",
    ],
    highlights: [
      { label: "Lush Greenery", icon: "sprout" },
      { label: "Misty Landscapes", icon: "mountain" },
      { label: "Traditional Architecture", icon: "home" },
      { label: "Nature Stay", icon: "pines" },
    ],
    coverInGallery: false,
    gallery: [
      { src: "/images/properties/keralamist/house-path.jpg", alt: "Traditional tiled-roof house with a stone path at KeralaMist, Vagamon", fit: "contain", position: "50% 40%" },
      { src: "/images/properties/keralamist/house.jpg", alt: "Traditional tiled-roof house among the trees at KeralaMist, Vagamon" },
    ],
  },
];

export const getProperty = (slug: string) => properties.find((p) => p.slug === slug);

export const propertyImages = (p: Property): Photo[] =>
  p.coverInGallery === false && p.gallery?.length
    ? p.gallery
    : [{ src: p.cover, alt: p.coverAlt }, ...(p.gallery ?? [])];
