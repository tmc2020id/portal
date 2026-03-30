import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy-page";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Return Policy | TMC SMART",
  description:
    "Review the TMC SMART return policy, including final-sale conditions, defective item handling, and support contact details.",
};

export default function ReturnPolicyPage() {
  return <PolicyPage />;
}
