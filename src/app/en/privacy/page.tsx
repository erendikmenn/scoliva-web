import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How the scoliva.ai marketing site handles data.",
  alternates: {
    canonical: "/en/privacy/",
    languages: { tr: "/gizlilik/", en: "/en/privacy/" },
  },
};

export default function PrivacyPage() {
  return <LegalPage locale="en" />;
}
