import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anime Final Quest Codes (Dec 2025) – New Working Codes",
  description: "One-click copy the latest Anime Final Quest codes for free spins, cash, and runes. Updated daily with active and expired list, redeem steps, and FAQs.",
  metadataBase: new URL("https://animefinalquestcodes.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Anime Final Quest Codes – New Working Codes",
    description: "One-click copy working codes for free spins, cash, and runes. Updated daily.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased min-h-screen flex flex-col bg-[#0f0f12] text-white`}
      >
        <GoogleAnalytics />
        <MicrosoftClarity />
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
