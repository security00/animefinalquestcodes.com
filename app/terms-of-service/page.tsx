import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Anime Final Quest Codes",
  description:
    "Review the Terms of Service for Anime Final Quest Codes: acceptable use, disclaimers, third-party links, liability limits, and how to contact support.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

const LAST_UPDATED = "December 24, 2025";
const SUPPORT_EMAIL = "support@animefinalquestcodes.com";

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <article className="glass-card rounded-2xl p-8 md:p-10 border border-white/5 max-w-4xl mx-auto prose prose-invert prose-headings:text-white prose-a:text-primary hover:prose-a:text-primary/80">
        <h1>Terms of Service</h1>
        <p className="text-sm text-white/60">Last updated: {LAST_UPDATED}</p>

        <p>
          These Terms of Service (the &quot;Terms&quot;) govern your access to and
          use of Anime Final Quest Codes (the &quot;Site&quot;). By accessing or
          using the Site, you agree to these Terms.
        </p>

        <h2>About the Site</h2>
        <p>
          The Site provides informational content, including game codes, guides,
          and tier lists related to the Roblox game Anime Final Quest. The Site
          is not affiliated with, endorsed by, or sponsored by Roblox
          Corporation or the game developers.
        </p>

        <h2>Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Site for unlawful purposes.</li>
          <li>
            Attempt to disrupt, damage, or gain unauthorized access to the Site
            or its infrastructure.
          </li>
          <li>
            Scrape, harvest, or collect information from the Site at scale in a
            way that degrades performance or violates applicable law.
          </li>
          <li>
            Misrepresent the Site or its content as official or affiliated with
            Roblox or any game developer.
          </li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          Unless otherwise noted, the Site and its original content (including
          text, layout, and design) are owned by the Site operator and are
          protected by applicable intellectual property laws.
        </p>
        <p>
          Roblox and related trademarks are the property of Roblox Corporation.
          All third-party names and trademarks are the property of their
          respective owners.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          The Site may link to third-party websites (such as Roblox). We do not
          control and are not responsible for third-party content, policies, or
          practices.
        </p>

        <h2>Disclaimers</h2>
        <p>
          The Site is provided on an &quot;as is&quot; and &quot;as available&quot;
          basis. We make no warranties of any kind, express or implied,
          including warranties of accuracy, reliability, availability, or
          fitness for a particular purpose.
        </p>
        <p>
          Game codes can expire or change at any time. We do not guarantee that
          any code will be valid, available, or work for your account.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, the Site operator will not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages, or any loss of profits or revenues, arising from or
          related to your use of the Site.
        </p>

        <h2>Changes to the Site and Terms</h2>
        <p>
          We may update the Site and these Terms at any time. Continued use of
          the Site after changes become effective constitutes acceptance of the
          updated Terms. We will update the &quot;Last updated&quot; date at the
          top of this page when we change these Terms.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about these Terms, contact us at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
      </article>
    </div>
  );
}
