import type { Metadata } from "next";
import { ContactClient } from "@/components/contact/contact-client";

export const metadata: Metadata = {
  title: "Contact Us | Trion Packaging",
  description:
    "Contact Trion Packaging's B2B sales and structural engineering team. Get custom packaging quotes, CAD dielines, and expert design support within 24 hours. Located in Newark, NJ.",
  openGraph: {
    title: "Contact Us | Trion Packaging",
    description:
      "Reach our B2B packaging specialists for custom quotes, dieline support, and manufacturing consultation. 24-hour response guaranteed.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="flex-1 flex flex-col">
      <ContactClient />
    </main>
  );
}
