"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Wait a frame so the new route's DOM is committed before we query for
    // .reveal elements. Without this, on client-side navigation the IO would
    // observe the old page's nodes and never see the incoming ones.
    const raf = requestAnimationFrame(() => {
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

      // Stash on the element so the outer cleanup can disconnect it
      (window as unknown as { __anmIO?: IntersectionObserver }).__anmIO = io;
    });

    return () => {
      cancelAnimationFrame(raf);
      const w = window as unknown as { __anmIO?: IntersectionObserver };
      if (w.__anmIO) {
        w.__anmIO.disconnect();
        w.__anmIO = undefined;
      }
    };
  }, [pathname]);

  return null;
}
