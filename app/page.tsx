import Hero from "@/components/Hero";
import CodeList from "@/components/CodeList";
import Sidebar from "@/components/Sidebar";
import ContentSection from "@/components/ContentSection";

const HOME_URL = "https://animefinalquestcodes.com";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${HOME_URL}/#website`,
        url: `${HOME_URL}/`,
        name: "Anime Final Quest Codes",
        alternateName: "AFQ Codes",
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        "@id": `${HOME_URL}/#organization`,
        name: "Anime Final Quest Codes",
        url: `${HOME_URL}/`,
        email: "support@animefinalquestcodes.com",
        logo: {
          "@type": "ImageObject",
          url: `${HOME_URL}/logo.png`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${HOME_URL}/#webpage`,
        url: `${HOME_URL}/`,
        name: "Anime Final Quest Codes (Dec 2025) – New Working Codes",
        isPartOf: { "@id": `${HOME_URL}/#website` },
        publisher: { "@id": `${HOME_URL}/#organization` },
        about: {
          "@type": "VideoGame",
          name: "Anime Final Quest",
          gamePlatform: "Roblox",
        },
        description:
          "One-click copy the latest Anime Final Quest codes for free spins, cash, and runes. Updated daily with active and expired list, redeem steps, and FAQs.",
      },
      {
        "@type": "FAQPage",
        "@id": `${HOME_URL}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Why are my codes not working?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Codes in Anime Final Quest can expire quickly. Make sure you type them exactly as shown (they are case-sensitive). If a code is marked as expired, it is no longer valid.",
            },
          },
          {
            "@type": "Question",
            name: "How often is this page updated?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We try to update the Anime Final Quest Codes list as soon as new codes are released. If you notice a missing code, email support@animefinalquestcodes.com and we will review it.",
            },
          },
          {
            "@type": "Question",
            name: "Where can I find official announcements?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Official sources may include in-game announcements and the developers' public channels. We collect what is publicly shared and keep the code list organized for fast redemption.",
            },
          },
          {
            "@type": "Question",
            name: "How do I get more spins?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Besides using codes, you can earn spins by completing daily quests, defeating bosses, or staying in the AFK area for free rewards over time.",
            },
          },
          {
            "@type": "Question",
            name: "When is the next update?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The developers usually release updates every 2-3 weeks. Join the official Discord server for sneak peeks.",
            },
          },
          {
            "@type": "Question",
            name: "Can expired codes come back?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sometimes a similar code is re-released during a new event, but most expired codes stay expired. If a code returns, we move it back into the active list.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />

      <div className="container mx-auto px-4 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-12">
            <CodeList />

	            <ContentSection id="about-codes" title="What Are Anime Final Quest Codes?">
	              <p className="text-white/80 leading-relaxed">
	                <strong>Anime Final Quest Codes</strong> are free redeemable promo
	                codes released by the game creators to celebrate updates, events,
	                milestones, or fixes. When you redeem a code in
	                the game menu, you can receive rewards like spins, cash, runes, or
	                temporary boosts that help you progress faster.
	              </p>

	              <p className="text-white/80 leading-relaxed">
	                If you found this page by searching for <strong>anime final quest codes</strong>,
	                you are in the right place. We keep one clean, easy-to-copy list of
	                codes, split into active codes that currently work
	                and expired codes that no longer redeem. This makes it simple to avoid
	                trial and error and spend more time actually playing.
	              </p>

	              <h3>What rewards can these codes give?</h3>
	              <p className="text-white/80 leading-relaxed">
	                Rewards can change over time, but these Anime Final Quest codes commonly
	                grant items and currencies that are useful for both new and returning players.
	              </p>
	              <ul>
	                <li><strong>Spins</strong> (including special spins when available)</li>
	                <li><strong>Cash</strong> for upgrades and progression</li>
	                <li><strong>Runes</strong> or similar enhancement items</li>
	                <li><strong>Boosts</strong> that speed up grinding for a short time</li>
	              </ul>

	              <h3>Where do new codes come from?</h3>
	              <p className="text-white/80 leading-relaxed">
	                New Anime Final Quest codes are usually announced around game updates
	                or community events. Sources can include official social posts, in-game
	                announcements, or community channels. When a new code appears, it can
	                expire quickly, so it helps to redeem them as soon
	                as you see them.
	              </p>

	              <h3>How we maintain our code list</h3>
	              <p className="text-white/80 leading-relaxed">
	                We aim to keep this Anime Final Quest Codes page accurate and easy to use:
	              </p>
	              <ol className="list-decimal pl-5 space-y-3 text-white/80">
	                <li>We add newly released codes as soon as we find them.</li>
	                <li>We re-check older codes regularly for validity.</li>
	                <li>
	                  If a code stops working, we move it to the expired list so you do not waste time.
	                </li>
	              </ol>

              <p className="text-white/70 text-sm leading-relaxed">
                Want to report a new code or a mistake? Email us at{" "}
                <a href="mailto:support@animefinalquestcodes.com" className="text-primary hover:underline">
                  support@animefinalquestcodes.com
                </a>
                .
              </p>
            </ContentSection>

	            <ContentSection id="guides" title="How to Redeem Codes">
	              <p className="text-white/70 text-sm leading-relaxed mb-6">
	                This quick guide shows the usual steps to redeem Anime Final Quest codes in Roblox.
	                If the interface changes after an update, the location may look slightly different,
	                but the idea is the same: open the menu and enter the code exactly as shown.
	              </p>
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

	              <div className="mt-6 space-y-3 text-white/70 text-sm leading-relaxed">
	                <p>
	                  If a code does not work, double-check spelling and capitalization first. Many codes are
	                  case-sensitive and may stop working without warning.
	                </p>
	                <p>
	                  You can also compare with our expired list above to make sure you are not trying older codes.
	                </p>
	              </div>
	            </ContentSection>

	            <ContentSection id="code-tips" title="Tips to Use Codes Naturally (No Guesswork)">
	              <p className="text-white/80 leading-relaxed">
	                Redeeming Anime Final Quest codes is simple, but using them wisely can save time. Because codes can be limited
	                by date or event, the best strategy is to check for new codes regularly and redeem them early.
	              </p>

	              <h3>Redeem new codes quickly</h3>
	              <p className="text-white/80 leading-relaxed">
	                If you see new codes after a patch, redeem them before you start a long farming session.
	                That way, any boosts or bonuses apply while you play.
	              </p>

	              <h3>Troubleshooting: why codes might fail</h3>
	              <ul>
	                <li><strong>Typos:</strong> Copy and paste the code instead of typing.</li>
	                <li><strong>Case sensitivity:</strong> Match uppercase and lowercase exactly.</li>
	                <li><strong>Expiration:</strong> Some codes expire fast after updates.</li>
	                <li><strong>Server issues:</strong> If Roblox is lagging, try again after a short wait.</li>
	              </ul>

	              <h3>How to avoid keyword-stuffing style pages</h3>
	              <p className="text-white/80 leading-relaxed">
	                Many pages repeat the main keyword too aggressively and are hard to read. Our goal is to keep a clear list,
	                add helpful context, and update the page when new codes are released, without turning the content into spam.
	              </p>
	            </ContentSection>

	            <ContentSection id="tier-list" title="Weapon Tier List (Dec 2025)">
	              <p className="text-white/70 text-sm leading-relaxed mb-6">
	                This tier list is a quick reference for players who redeem Anime Final Quest codes and want to use their rewards efficiently.
	                If you pull a new weapon after using codes, this section helps you decide what to prioritize.
	              </p>
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
	                  <h3 className="text-lg font-bold text-white mb-2">How often is this page updated?</h3>
	                  <p className="text-white/70 text-sm leading-relaxed">
	                    We try to update the Anime Final Quest Codes list as soon as new codes are released. If you notice a missing code,
	                    send it to support@animefinalquestcodes.com and we will review it.
	                  </p>
	                </div>
                <div>
	                  <h3 className="text-lg font-bold text-white mb-2">Where can I find official announcements?</h3>
	                  <p className="text-white/70 text-sm leading-relaxed">
	                    Official sources may include in-game announcements and the developers&apos; public channels. We collect what is publicly shared
	                    and keep the code list organized for fast redemption.
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
                <div>
	                  <h3 className="text-lg font-bold text-white mb-2">Can expired codes come back?</h3>
	                  <p className="text-white/70 text-sm leading-relaxed">
	                    Sometimes a similar code is re-released during a new event, but most expired codes stay expired.
	                    If a code returns, we move it back into the active list.
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
