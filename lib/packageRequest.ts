// Shared handoff between the Google Ads package builder (on the service detail
// page) and the multi-step Contact form (on the homepage). The builder writes
// a pending request to sessionStorage right before navigating to /#contact;
// Contact.tsx reads and clears it on mount to prefill the form.
export const PACKAGE_REQUEST_KEY = "gmhco_package_request";

export type PendingPackageRequest = {
  service: string;
  message: string;
};

export function buildPackageMessage(params: {
  basePrice: number;
  addons: { label: string; price: number }[];
  total: number;
  recommendedSpend: string;
}): string {
  const lines = [
    "I'd like to move forward with the following Google Ads package:",
    "",
    `Base Package — £${params.basePrice}/month`,
    ...params.addons.map((a) => `+ ${a.label} — £${a.price}/month`),
    "",
    `Total: £${params.total}/month`,
    "",
    `Recommended ad spend: ${params.recommendedSpend}`,
  ];
  return lines.join("\n");
}
