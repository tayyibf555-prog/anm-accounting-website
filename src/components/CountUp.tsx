"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
}

export function CountUp({
  to,
  duration = 1600,
  prefix = "",
  suffix = "",
  className = "",
  decimals = 0,
}: CountUpProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true;
            const start = performance.now();
            const animate = (now: number) => {
              const elapsed = now - start;
              const t = Math.min(1, elapsed / duration);
              // ease-out-quart
              const eased = 1 - Math.pow(1 - t, 4);
              setValue(to * eased);
              if (t < 1) {
                requestAnimationFrame(animate);
              } else {
                setValue(to);
              }
            };
            requestAnimationFrame(animate);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  const formatted =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString("en-GB");

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
