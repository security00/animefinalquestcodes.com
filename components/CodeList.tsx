"use client";

import { Check, Copy, XCircle, Gift } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Code = {
    code: string;
    reward: string;
    isNew?: boolean;
};

const ACTIVE_CODES: Code[] = [
    { code: "MERRYCHRISTMAS", reward: "25k Cash & 5 Weapon Spins", isNew: true },
    { code: "SUPPORT", reward: "15 Lucky Weapon Spins & 10 Weapon Spins" },
    { code: "CHILDOFSUN", reward: "15 Lucky Weapon Spins & 10 Weapon Spins" },
    { code: "PATCHES", reward: "3 Runes & 15k Cash" },
];

const EXPIRED_CODES = [
    "ESCANORSOON",
    "SHADOW",
    "BOSS",
    "UPDATE1",
    "THXFOR1MVISIT",
    "RELEASE2",
    "AFQPEAK",
    "AGRIS",
    "RELEASE"
];

export default function CodeList() {
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const copyToClipboard = (code: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    return (
        <section id="codes" className="py-20 relative z-10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block mb-4">
                        Active Anime Final Quest Codes
                    </h2>
                    <p className="text-white/60">
                        Redeem these codes for free spins, cash, and runes. Updated daily!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Active Codes List */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="glass-card rounded-2xl p-6 border-l-4 border-l-green-500">
                            <div className="flex items-center gap-3 mb-6">
                                <Gift className="text-green-500 w-6 h-6" />
                                <h3 className="text-xl font-bold text-white">Working Codes</h3>
                            </div>

                            <div className="space-y-4">
                                {ACTIVE_CODES.map((item) => (
                                    <div key={item.code} className="group relative bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl p-4 transition-all hover:border-primary/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className="font-mono text-xl font-bold text-primary tracking-wider">{item.code}</span>
                                                {item.isNew && (
                                                    <span className="bg-red-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full animate-pulse">
                                                        New
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-400">{item.reward}</p>
                                        </div>

                                        <button
                                            onClick={() => copyToClipboard(item.code)}
                                            className={cn(
                                                "flex items-center justify-center gap-2 px-6 py-2 rounded-lg font-semibold transition-all min-w-[120px]",
                                                copiedCode === item.code
                                                    ? "bg-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                                                    : "bg-primary/20 text-primary hover:bg-primary hover:text-white"
                                            )}
                                        >
                                            {copiedCode === item.code ? (
                                                <>
                                                    <Check size={18} /> Copied
                                                </>
                                            ) : (
                                                <>
                                                    <Copy size={18} /> Copy
                                                </>
                                            )}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Expired Codes List */}
                    <div className="lg:col-span-1">
                        <div className="glass-card rounded-2xl p-6 border-l-4 border-l-red-500/50 h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <XCircle className="text-red-500/70 w-6 h-6" />
                                <h3 className="text-xl font-bold text-white/80">Expired Codes</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {EXPIRED_CODES.map((code) => (
                                    <div key={code} className="bg-white/5 rounded-lg px-3 py-2 text-center border border-white/5">
                                        <span className="font-mono text-sm text-white/40 line-through select-none">
                                            {code}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-6 text-xs text-center text-white/30">
                                These codes no longer work. Don't waste your time!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
