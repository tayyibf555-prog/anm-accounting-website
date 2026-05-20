"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const selector = ".reveal, .stagger";
    const elements = document.querySelectorAll<HTMLElement>(selector);
    if (elements.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
