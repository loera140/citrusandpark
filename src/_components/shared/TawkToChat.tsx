"use client";

import { useEffect } from "react";

export function TawkToChat() {
  useEffect(() => {
    // Tawk.to integration
    // Replace PROPERTY_ID and WIDGET_ID with actual values from tawk.to dashboard
    const propertyId = process.env.NEXT_PUBLIC_TAWKTO_PROPERTY_ID;
    const widgetId = process.env.NEXT_PUBLIC_TAWKTO_WIDGET_ID;

    if (!propertyId || !widgetId) return;

    const s = document.createElement("script");
    s.async = true;
    s.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    s.setAttribute("crossorigin", "*");
    document.head.appendChild(s);

    return () => {
      document.head.removeChild(s);
    };
  }, []);

  return null;
}
