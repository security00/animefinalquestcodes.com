import Link from "next/link";
import { ExternalLink, TrendingUp, Gamepad } from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="space-y-8 sticky top-24">
            {/* Popular Games */}
            <div className="glass-card rounded-xl p-6 border border-white/5">
                <div className="flex items-center gap-2 mb-4 text-primary">
                    <Gamepad className="w-5 h-5" />
                    <h3 className="font-bold text-lg text-white">Top Codex</h3>
                </div>
                <div className="space-y-3">
                    {[
                        { name: "Blox Fruits", url: "#" },
                        { name: "Anime Defenders", url: "#" },
                        { name: "Sol's RNG", url: "#" },
                        { name: "Anime Vanguards", url: "#" },
                    ].map((game) => (
                        <Link
                            key={game.name}
                            href={game.url}
                            className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm text-white/80 hover:text-white group"
                        >
                            <span className="flex items-center justify-between">
                                {game.name}
                                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Trending Updates */}
            <div className="glass-card rounded-xl p-6 border border-white/5">
                <div className="flex items-center gap-2 mb-4 text-accent">
                    <TrendingUp className="w-5 h-5" />
                    <h3 className="font-bold text-lg text-white">Trending</h3>
                </div>
                <ul className="space-y-4">
                    <li className="text-sm">
                        <Link href="#" className="hover:text-primary transition-colors block">
                            <span className="text-xs text-white/40 block mb-1">New Update</span>
                            Escanor & Shadow Update - New Weapons!
                        </Link>
                    </li>
                    <li className="text-sm">
                        <Link href="#" className="hover:text-primary transition-colors block">
                            <span className="text-xs text-white/40 block mb-1">Guide</span>
                            Best Weapon Tier List for December
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
