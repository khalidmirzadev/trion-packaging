import type { Metadata } from "next";
import { QuoteTemplate } from "@/components/quote/quote-template";

export const metadata: Metadata = {
  title: "Request a Custom Packaging Quote | Trion Packaging",
  description: "Configure custom dielines, board calipers, and finish coatings. Request a bulk volume B2B quote from our Newark structural packaging facility within 24 hours.",
};

export default function GetQuotePage() {
  return <QuoteTemplate />;
}
