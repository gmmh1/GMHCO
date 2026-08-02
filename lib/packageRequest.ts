// Shared handoff between a service page's package builder and the multi-step
// Contact form (on the homepage). The builder writes a pending request to
// sessionStorage right before navigating to /#contact; Contact.tsx reads and
// clears it on mount to prefill the form.
export const PACKAGE_REQUEST_KEY = "gmhco_package_request";

export type PendingPackageRequest = {
  service: string;
  message: string;
};

export function buildPackageMessage(params: {
  serviceTitle: string;
  currency: "£" | "$";
  unit: "month" | "one-time";
  basePrice: number;
  addons: { label: string; price: number }[];
  total: number;
  note?: string;
}): string {
  const suffix = params.unit === "month" ? "/month" : "";
  const lines = [
    `I'd like to move forward with the following ${params.serviceTitle} package:`,
    "",
    `Base Package — ${params.currency}${params.basePrice}${suffix}`,
    ...params.addons.map((a) => `+ ${a.label} — ${params.currency}${a.price}${suffix}`),
    "",
    `Total: ${params.currency}${params.total}${suffix}`,
  ];
  if (params.note) {
    lines.push("", params.note);
  }
  return lines.join("\n");
}
