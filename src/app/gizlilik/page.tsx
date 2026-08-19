import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Gizlilik",
  description: "scoliva.ai tanıtım sitesinde verilerin nasıl işlendiği.",
  alternates: {
    canonical: "/gizlilik/",
    languages: { tr: "/gizlilik/", en: "/en/privacy/" },
  },
};

export default function GizlilikPage() {
  return <LegalPage locale="tr" />;
}
