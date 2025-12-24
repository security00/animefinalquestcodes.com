import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
            {/* Hero Background Image */}
            <div className="absolute inset-0 z-0 select-none">
                <Image
                    src="/background/hero.png"
                    alt="Anime Final Quest Hero Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                {/* Gradient to blend image into the page background at the bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0f0f12] to-transparent" />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10 opacity-20" />

            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 animate-in fade-in zoom-in duration-500">
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-medium text-white/80">Updated: December 2025</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-white to-white/50 bg-clip-text text-transparent drop-shadow-lg">
                    Anime Final Quest <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block">
                        Codes & Guides
                        <Sparkles className="absolute -top-6 -right-8 text-yellow-400 w-8 h-8 animate-bounce" />
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
                    The ultimate resource for <strong className="text-white">Active Codes</strong>,
                    tier lists, and strategies to dominate the game.
                    Claim your free gems and boosts now!
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="#codes"
                        className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)] flex items-center justify-center gap-2"
                    >
                        Get Latest Codes
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                    <Link
                        href="#guides"
                        className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl backdrop-blur-sm transition-all hover:border-white/20"
                    >
                        Read Guides
                    </Link>
                </div>
            </div>
        </section>
    );
}
