type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

const CALL_CONVERSION_ID = "AW-11289675218/S1EUCIr-2rodENKLq4cq";

export function reportCallConversion(url?: string): boolean {
  const navigate = () => {
    if (url) window.location.href = url;
  };

  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    navigate();
    return true;
  }

  let navigated = false;
  const callback = () => {
    if (navigated) return;
    navigated = true;
    navigate();
  };

  window.gtag("event", "conversion", {
    send_to: CALL_CONVERSION_ID,
    value: 1.0,
    currency: "INR",
    event_callback: callback,
  });

  if (url) {
    window.setTimeout(callback, 1500);
    return false;
  }
  return true;
}
