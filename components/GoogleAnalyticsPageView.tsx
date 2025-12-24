"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type GoogleAnalyticsPageViewProps = {
  gaId: string;
};

export default function GoogleAnalyticsPageView({ gaId }: GoogleAnalyticsPageViewProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useEffect(() => {
    if (!window.gtag) return;

    const url = search ? `${pathname}?${search}` : pathname;
    window.gtag("event", "page_view", { page_path: url });
  }, [gaId, pathname, search]);

  return null;
}
