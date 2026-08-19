import type { Metadata, Viewport } from "next";
import { Fraunces, Sora } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f4eb",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Scoliva",
    template: "%s · Scoliva",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=9", type: "image/x-icon", sizes: "48x48" },
      { url: "/favicon-32.png?v=9", type: "image/png", sizes: "32x32" },
      { url: "/icon.png?v=9", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=9", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico?v=9",
  },
  description:
    "Scoliva, öğrenciyi tanıyan adaptif öğrenme sistemi. Kişiye özel ders videoları, notlar, sorular, asistan ve çalışma planı. YKS ile başlar.",
  alternates: {
    canonical: "/",
    languages: {
      tr: "/",
      en: "/en/",
    },
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Scoliva — Personalized learning, for every exam.",
    description:
      "An adaptive learning system that knows the student — personal videos, notes, questions, assistant and plan. Starting with YKS in Türkiye.",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scoliva",
    description: site.tagline.en,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${sora.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <div className="flex min-h-full flex-1 flex-col overflow-x-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
