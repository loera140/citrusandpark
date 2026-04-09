"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#1B3A2D",
            "cal-brand-emphasis": "#2D5F4A",
          },
          dark: {
            "cal-brand": "#E8913A",
            "cal-brand-emphasis": "#F5B56A",
          },
        },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <Cal
      calLink="citrusandpark"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
