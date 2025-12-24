import Hero from "@/components/Hero";
import CodeList from "@/components/CodeList";
import Sidebar from "@/components/Sidebar";
import ContentSection from "@/components/ContentSection";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="container mx-auto px-4 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-12">
            <CodeList />

            <ContentSection id="guides" title="How to Redeem Codes">
              <ol className="list-decimal pl-5 space-y-4 text-white/80">
                <li>
                  <strong className="text-white">Launch the Game:</strong> Open <a href="https://www.roblox.com/games/100744519298647/Anime-Final-Quest" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Anime Final Quest</a> in Roblox.
                </li>
                <li>
                  <strong className="text-white">Find the Menu:</strong> Look for the <strong>Menu</strong> button or icon on the left side of your screen.
                </li>
                <li>
                  <strong className="text-white">Open Settings:</strong> Click on the Settings (Gear icon) or Twitter Bird icon depending on the interface.
                </li>
                <li>
                  <strong className="text-white">Enter Code:</strong> Copy a code from our list above and paste it into the text box.
                </li>
                <li>
                  <strong className="text-white">Claim Rewards:</strong> Hit the Redeem button to instantly get your Spins, Cash, and Runes!
                </li>
              </ol>
            </ContentSection>

            <ContentSection id="tier-list" title="Weapon Tier List (Dec 2025)">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="p-4 text-primary">Tier</th>
                      <th className="p-4 text-white">Weapons</th>
                      <th className="p-4 text-white/60">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="bg-white/5">
                      <td className="p-4 font-bold text-red-500">S+</td>
                      <td className="p-4 font-bold">Escanor's Axe (Rhitta), Shadow's Dagger</td>
                      <td className="p-4 text-sm text-white/50">New Update Weapons. Insane DPS.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-orange-400">S</td>
                      <td className="p-4">Dragon Slayer, Dark Repulser</td>
                      <td className="p-4 text-sm text-white/50">Great for boss farming.</td>
                    </tr>
                    <tr className="bg-white/5">
                      <td className="p-4 font-bold text-purple-400">A</td>
                      <td className="p-4">Elucidator, Zangetsu</td>
                      <td className="p-4 text-sm text-white/50">Solid starter legendaries.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-blue-400">B</td>
                      <td className="p-4">Standard Katanas, Scythe</td>
                      <td className="p-4 text-sm text-white/50">Good for early game grinding.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ContentSection>

            <ContentSection id="faq" title="Frequently Asked Questions">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Why are my codes not working?</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Codes in Anime Final Quest can expire quickly. Make sure you are typing them exactly as shown (they are case-sensitive). If a code says "Expired" in our list, it is no longer valid.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">How do I get more spins?</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Besides using codes, you can earn spins by completing daily quests, defeating bosses, or staying in the AFK area for free rewards over time.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">When is the next update?</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    The developers usually release updates every 2-3 weeks. Join the official Discord server for sneak peeks!
                  </p>
                </div>
              </div>
            </ContentSection>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
