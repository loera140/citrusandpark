"use client";

import { useEffect } from "react";

export function TawkToChat() {
  useEffect(() => {
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://embed.tawk.to/69d7fa059039251c39accd4f/1jlpqh937";
    s.setAttribute("charset", "UTF-8");
    s.setAttribute("crossorigin", "*");
    document.head.appendChild(s);

    return () => {
      if (document.head.contains(s)) {
        s.remove();
      }
    };
  }, []);

  return null;
}
