import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollReveal } from "@/components/ScrollReveal";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ANM Accounting · Chartered accountants in Glasgow",
    template: "%s · ANM Accounting",
  },
  description:
    "Independent chartered accountants in Glasgow. Proactive tax planning, fixed transparent fees, and a partner who picks up the phone. Serving Scottish SMEs across the central belt.",
  metadataBase: new URL("https://anmaccounting.co.uk"),
  openGraph: {
    title: "ANM Accounting · Chartered accountants in Glasgow",
    description:
      "Independent chartered accountants for Glasgow's owner-managed businesses.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <ScrollReveal />
      </body>
    </html>
  );
}
