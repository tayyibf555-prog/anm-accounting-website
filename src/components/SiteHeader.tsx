"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/95 backdrop-blur-[2px] transition-[border-color] duration-200`}
      style={{
        borderBottom: scrolled
          ? "1px solid var(--color-rule)"
          : "1px solid transparent",
      }}
    >
      <div className="container-edit flex items-center justify-between h-[72px]">
        <Link
          href="/"
          className="font-display text-[1.0625rem] text-ink"
          style={{ fontWeight: 600, letterSpacing: "-0.02em" }}
          aria-label="ANM Accounting home"
        >
          ANM Accounting
        </Link>

        <nav className="hidden md:flex items-center gap-10 shrink-0">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-[0.9375rem] text-ink-soft hover:text-ink transition-colors"
            >
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-secondary text-[0.9375rem]">
            30-min call <span className="arrow">→</span>
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
              className="block h-px w-6 bg-ink absolute top-0 left-0 transition-transform duration-200"
              style={{
                transform: open ? "translateY(6px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-px w-6 bg-ink absolute bottom-0 left-0 transition-transform duration-200"
              style={{
                transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
              }}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="md:hidden hairline-top bg-paper">
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
              className="btn-secondary mt-2"
            >
              30-min call <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
