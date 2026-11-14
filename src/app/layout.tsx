import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

// Inter and Playfair Display (Google Fonts), self-hosted for speed and privacy.
const inter = localFont({
  src: "../fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});
const playfair = localFont({
  src: "../fonts/playfair-display-latin-wght-normal.woff2",
  variable: "--font-playfair",
  weight: "400 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Premium Holiday Stays in Vagamon, Kerala`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "KeralaMist.in connects travellers with carefully selected resorts, villas, camps and local experiences in Vagamon, Kerala.",
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_IN",
    images: ["/images/hero/vagamon-sunrise.jpg"],
  },
  icons: { icon: "/images/logo/keralamist-logo.png" },
};

export const viewport: Viewport = { themeColor: "#004f2c" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="flex min-h-screen flex-col overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-forest"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
