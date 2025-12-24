"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Gamepad2 } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0f0f12]/80 backdrop-blur-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                            <Image
                                src="/logo.png"
                                alt="Anime Final Quest Codes"
                                width={40}
                                height={40}
                                className="object-cover w-full h-full"
                                onError={(e) => {
                                    // Fallback if image fails to load (client-side)
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement?.classList.add('fallback-icon');
                                }}
                            />
                            <Gamepad2 className="w-6 h-6 text-primary absolute opacity-0 icon-fallback transition-opacity" />
                        </div>
                        <span className="font-bold text-lg md:text-xl bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent group-hover:to-primary transition-all">
                            AFQ Codes
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {["Codes", "Guides", "Tier List", "FAQ"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase().replace(" ", "-")}`}
                                className="text-sm font-medium text-white/70 hover:text-primary transition-colors hover:text-glow"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-white/70 hover:text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-white/5 bg-[#0f0f12] animate-in slide-in-from-top-2">
                    <nav className="flex flex-col p-4 gap-4">
                        {["Codes", "Guides", "Tier List", "FAQ"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase().replace(" ", "-")}`}
                                className="text-base font-medium text-white/70 hover:text-primary py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
