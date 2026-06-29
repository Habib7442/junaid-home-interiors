import { Metadata } from "next";
import ProcessPageClient from "@/components/process/ProcessPageClient";

export const metadata: Metadata = {
  title: "Our Process | 45-Day Interior Delivery Guarantee in Silchar",
  description:
    "Learn about Junaid Home Interiors' structured 4-stage process. From free site measurements and realistic 3D designs to precision factory fabrication and flawless 45-day handover.",
  keywords: [
    "interior design process Silchar",
    "home interior timeline Assam",
    "3D interior design step by step",
    "Junaid Home Interiors workflow",
  ],
  alternates: {
    canonical: "/process",
  },
};

export default function ProcessPage() {
  return <ProcessPageClient />;
}
