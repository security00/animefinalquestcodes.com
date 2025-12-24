import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  title: "Anime Final Quest Codes (December 2025) - Active Codes & Guide",
  description: "Get the latest Anime Final Quest codes for free rewards. Complete guide, tier list, and tips for this popular Roblox anime RPG.",
  metadataBase: new URL("https://animefinalquestcodes.com"),
  openGraph: {
    title: "Anime Final Quest Codes - Daily Updated",
    description: "Claim your free spins, gems, and boosts now!",
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
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
