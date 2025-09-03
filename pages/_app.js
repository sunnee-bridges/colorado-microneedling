import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXX"; // ok to hardcode for MVP

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Pageview on route change (keep whatever you already have)
  useEffect(() => {
    if (!GA_ID) return;
    const onRoute = (url) => window.gtag?.("config", GA_ID, { page_path: url });
    router.events.on("routeChangeComplete", onRoute);
    return () => router.events.off("routeChangeComplete", onRoute);
  }, [router.events]);

  // ↓↓↓ CLICK / CTA tracking (event delegation) ↓↓↓
  useEffect(() => {
    if (!GA_ID) return;

    // Helper: prefer a clean, meaningful label
    function labelFor(el) {
      return (
        el.dataset.cta ||                   // e.g. data-cta="hero-signup"
        el.getAttribute("aria-label") ||
        (el.textContent || "").trim().slice(0, 100) ||
        "(no label)"
      );
    }

    function handleClick(e) {
      // Find the nearest clickable thing we care about
      const target = e.target.closest('a, button, [role="button"], [data-track="click"]');
      if (!target) return;
      if (target.closest('[data-ga-ignore="true"]')) return; // opt-out area

      const isLink = target.tagName === "A" && target.href;
      const href = isLink ? target.href : target.dataset.href || "";
      const domain = isLink ? new URL(href).hostname : "";
      const isOutbound = isLink && domain && domain !== location.hostname;

      const params = {
        // GA4 custom event params (you'll see these in DebugView / Realtime)
        link_url: href || undefined,
        link_domain: domain || undefined,
        link_text: labelFor(target),
      };

      // If outbound in the same tab, ensure the hit is sent before navigation
      const modified = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
      const sameTab = !isLink || target.target !== "_blank";
      if (isOutbound && sameTab && !modified) {
        e.preventDefault();

        let navigated = false;
        window.gtag?.("event", "outbound_click", {
          ...params,
          transport_type: "beacon",
          event_callback: () => {
            if (!navigated) {
              navigated = true;
              location.href = href;
            }
          },
        });

        // Fallback in case callback doesn’t fire in time
        setTimeout(() => {
          if (!navigated) location.href = href;
        }, 350);

        return;
      }

      // Internal links or outbound opened in a new tab → just fire the event
      window.gtag?.("event", isOutbound ? "outbound_click" : "cta_click", params);
    }

    // Use capture so we run before default navigation
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return (
    <>
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}</Script>
        </>
      )}
      <Component {...pageProps} />
    </>
  );
}
