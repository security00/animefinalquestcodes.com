import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#0a0a0c] mt-auto">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg text-white">Anime Final Quest Codes</h3>
                        <p className="text-sm text-white/50 leading-relaxed max-w-xs">
                            Your ultimate source for the latest codes, guides, and tier lists for Anime Final Quest on Roblox.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-white/90">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-white/60">
                            <li><Link href="#codes" className="hover:text-primary transition-colors">Active Codes</Link></li>
                            <li><Link href="#guides" className="hover:text-primary transition-colors">Game Guides</Link></li>
                            <li><Link href="#tier-list" className="hover:text-primary transition-colors">Weapon Tier List</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-white/90">Legal</h4>
                        <ul className="space-y-2 text-sm text-white/60">
                            <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li>
                                <a
                                    href="mailto:support@animefinalquestcodes.com"
                                    className="hover:text-white transition-colors"
                                >
                                    support@animefinalquestcodes.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
                    <p>&copy; {new Date().getFullYear()} Anime Final Quest Codes. All rights reserved.</p>
                    <p className="text-center md:text-right max-w-md">
                        Roblox is a registered trademark of Roblox Corporation. This site is not affiliated with, endorsed by, or sponsored by Roblox Corporation or the game developers.
                    </p>
                </div>
            </div>
        </footer>
    );
}
