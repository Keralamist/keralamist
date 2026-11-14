export const SITE = {
  name: "KeralaMist.in",
  url: "https://www.keralamist.in",
  slogan: "Partnering to connect you with pure nature",
  positioning: "Where Every Stay Begins with Trust",
  whatsappNumber: "917907601572",
  phones: [
    { display: "+91 79076 01572", tel: "+917907601572" },
    { display: "+91 9025821379", tel: "+919025821379" },
  ],
  email: "info@keralamist.in",
  instagram: { handle: "@keralamist.in", url: "https://www.instagram.com/keralamist.in/" },
  facebook: "https://www.facebook.com/share/1KWpjm8kzS/",
  youtube: "https://youtube.com/@keralamistin",
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Properties", href: "/properties" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Contact Us", href: "/contact-us" },
] as const;

/** Builds a wa.me link with a pre-filled, URL-encoded message. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const GENERAL_ENQUIRY =
  "Hello KeralaMist, I'd like to enquire about stays in Vagamon. Could you please share availability, pricing and booking details?";

export function propertyEnquiry(propertyName: string, location = "Vagamon"): string {
  return `Hello KeralaMist, I'm interested in ${propertyName} in ${location}. Could you please share availability, pricing and booking details?`;
}
