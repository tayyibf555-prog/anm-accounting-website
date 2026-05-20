"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Home page has a blue-drenched hero; other pages have a paper hero.
  // When at the top of the home page, header text is paper-coloured to sit
  // on the blue. Once scrolled past the hero, the header switches to its
  // solid paper appearance.
  const onBlueHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const baseTextColor = onBlueHero ? "var(--color-paper)" : "var(--color-ink)";
  const mutedTextColor = onBlueHero
    ? "oklch(0.90 0.04 250)"
    : "var(--color-ink-soft)";

  return (
    <header
      className="sticky top-0 z-50 transition-[background-color,border-color] duration-300"
      style={{
        backgroundColor: scrolled
          ? "color-mix(in oklch, var(--color-paper) 92%, transparent)"
          : "transparent",
        borderBottom: scrolled
          ? "1px solid var(--color-rule)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(8px) saturate(140%)" : undefined,
        WebkitBackdropFilter: scrolled ? "blur(8px) saturate(140%)" : undefined,
      }}
    >
      <div className="container-edit flex items-center justify-between h-[72px]">
        <Link
          href="/"
          className="font-display text-[1.0625rem] transition-colors duration-300"
          style={{
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: baseTextColor,
          }}
          aria-label="ANM Accounting home"
        >
          ANM Accounting
        </Link>

        <nav className="hidden md:flex items-center gap-10 shrink-0">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-[0.9375rem] transition-colors duration-300 hover:opacity-100"
              style={{ color: mutedTextColor, opacity: 0.9 }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[0.9375rem] font-medium transition-colors duration-300"
            style={{
              color: onBlueHero ? "var(--color-paper)" : "var(--color-blue-ink)",
            }}
          >
            30-min call <span className="text-amber">→</span>
          </Link>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="block w-6 relative h-3">
            <span
              className="block h-px w-6 absolute top-0 left-0 transition-[transform,background-color] duration-300"
              style={{
                backgroundColor: baseTextColor,
                transform: open ? "translateY(6px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-px w-6 absolute bottom-0 left-0 transition-[transform,background-color] duration-300"
              style={{
                backgroundColor: baseTextColor,
                transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
              }}
            />
          </span>
        </button>
      </div>

      {open && (
        <div
          className="md:hidden hairline-top"
          style={{ backgroundColor: "var(--color-paper)" }}
        >
          <div className="container-edit py-6 flex flex-col gap-5">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-lg text-ink"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 mt-2 text-blue-ink font-medium"
            >
              30-min call <span className="text-amber">→</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
