import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Anime Final Quest Codes",
  description:
    "Learn how Anime Final Quest Codes handles cookies, analytics, ads, and emails. See what data we collect, how it's used, and how to contact support.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const LAST_UPDATED = "December 24, 2025";
const SUPPORT_EMAIL = "support@animefinalquestcodes.com";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <article className="glass-card rounded-2xl p-8 md:p-10 border border-white/5 max-w-4xl mx-auto prose prose-invert prose-headings:text-white prose-a:text-primary hover:prose-a:text-primary/80">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-white/60">Last updated: {LAST_UPDATED}</p>

        <p>
          This Privacy Policy explains how Anime Final Quest Codes (the
          &quot;Site&quot;) collects, uses, and shares information when you visit
          or interact with the Site.
        </p>

        <h2>Information We Collect</h2>
        <p>We collect information in the following ways:</p>
        <ul>
          <li>
            <strong>Information you provide:</strong> If you contact us by email,
            we receive the information you include in your message (such as your
            email address and message content).
          </li>
          <li>
            <strong>Information collected automatically:</strong> When you use
            the Site, our servers may automatically log information such as your
            IP address, device type, browser type, pages visited, and
            approximate location (derived from IP).
          </li>
          <li>
            <strong>Cookies and similar technologies:</strong> We and our
            partners may use cookies or similar technologies to operate the
            Site, remember preferences, measure performance, and support
            advertising.
          </li>
        </ul>

        <h2>Cookies</h2>
        <p>
          Cookies are small text files stored on your device. You can control
          cookies through your browser settings, including blocking or deleting
          cookies. If you disable cookies, some features of the Site may not
          work properly.
        </p>

        <h2>Advertising and Analytics</h2>
        <p>
          We may work with third-party service providers to display ads or
          measure Site usage. These providers may use cookies or similar
          technologies to collect information about your visits to this and
          other websites in order to provide ads and analytics.
        </p>
        <p>
          If we use Google services (such as Google AdSense), Google and its
          partners may use cookies to serve ads based on your prior visits to
          this Site and other sites. You can learn more about how Google uses
          data and your choices in Google settings and policies.
        </p>

        <h2>How We Use Information</h2>
        <p>We may use information to:</p>
        <ul>
          <li>Operate and maintain the Site.</li>
          <li>Improve content quality, layout, and performance.</li>
          <li>Respond to emails and support requests.</li>
          <li>Detect, prevent, and address technical issues or abuse.</li>
          <li>Display ads and measure advertising performance (if enabled).</li>
        </ul>

        <h2>How We Share Information</h2>
        <p>We may share information in limited circumstances, including:</p>
        <ul>
          <li>
            <strong>Service providers:</strong> Vendors that help us run the Site
            (hosting, analytics, advertising) may process information on our
            behalf.
          </li>
          <li>
            <strong>Legal and safety:</strong> If required by law or to protect
            the rights, safety, and security of users and the Site.
          </li>
          <li>
            <strong>Business transfers:</strong> In connection with a merger,
            acquisition, or sale of assets (if applicable).
          </li>
        </ul>
        <p>We do not sell your personal information.</p>

        <h2>Data Retention</h2>
        <p>
          We retain information only as long as necessary for the purposes
          described in this policy, unless a longer retention period is required
          or permitted by law. Emails you send to us may be retained to address
          your request and for recordkeeping.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          The Site is not intended for children under 13. We do not knowingly
          collect personal information from children under 13. If you believe a
          child has provided personal information to us, contact us and we will
          take steps to delete it.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          The Site may contain links to third-party websites (for example,
          Roblox). We are not responsible for the privacy practices of third
          parties. Please review their policies separately.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we
          will update the &quot;Last updated&quot; date at the top of this page.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this Privacy Policy, contact us at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
      </article>
    </div>
  );
}
