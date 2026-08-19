import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
  title: "AI for personalized learning, for every exam",
  description:
    "An adaptive learning system that knows the student. Personal videos, notes, questions, assistant and plan. We begin with YKS in Türkiye and grow toward LGS, SAT, IB and beyond.",
  alternates: { canonical: "/en/", languages: { tr: "/", en: "/en/" } },
  openGraph: {
    locale: "en_US",
    title: "Scoliva — AI for personalized learning, for every exam.",
  },
};

export default function EnglishPage() {
  return <HomePage locale="en" />;
}
