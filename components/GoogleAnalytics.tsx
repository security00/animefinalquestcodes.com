import Script from "next/script";
import GoogleAnalyticsPageView from "@/components/GoogleAnalyticsPageView";
import { Suspense } from "react";

const DEFAULT_GA_ID = "G-72XE2VVXBN";

export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || DEFAULT_GA_ID;

  if (!gaId) return null;

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', { send_page_view: false });
        `}
      </Script>
      <Suspense fallback={null}>
        <GoogleAnalyticsPageView gaId={gaId} />
      </Suspense>
    </>
  );
}
