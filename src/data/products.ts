/**
 * Product portfolio data.
 *
 * v1 ships with an empty public list — products are not yet live.
 * When ready, append a Product object and add assets under:
 *   public/products/{slug}/icon.webp
 *   public/products/{slug}/screenshots/...
 *
 * Status meanings:
 * - building        Active development; not publicly available
 * - launching_soon  Near release; detail page OK, no store CTA yet
 * - available       Public — requires a real primaryAction.href
 * - retired         No longer offered
 *
 * Example entry (do not publish until accurate):
 *
 * {
 *   slug: "example-app",
 *   name: "Example App",
 *   tagline: "One-line benefit for the user.",
 *   description: "A short paragraph explaining what the product does.",
 *   category: "Productivity",
 *   status: "launching_soon",
 *   icon: "/products/example-app/icon.webp",
 *   screenshots: ["/products/example-app/screenshots/home.webp"],
 *   platforms: ["Android"],
 *   problem: "The pain this product solves.",
 *   steps: [
 *     { title: "Step one", body: "What the user does first." },
 *     { title: "Step two", body: "What happens next." },
 *   ],
 *   features: [
 *     { title: "Feature", body: "Why it matters." },
 *   ],
 *   privacyNotes: "How this product handles data.",
 *   faqs: [{ q: "Useful question?", a: "Clear answer." }],
 *   primaryAction: { label: "Download", href: "https://play.google.com/...", external: true },
 *   accentColor: "#2DD4BF",
 *   seo: { title: "Example App — Visify Apps", description: "..." },
 * }
 */

export type ProductStatus =
  | "building"
  | "launching_soon"
  | "available"
  | "retired";

export type ProductAction = {
  label: string;
  href: string;
  external?: boolean;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  status: ProductStatus;
  icon?: string;
  screenshots?: string[];
  primaryAction?: ProductAction;
  platforms?: string[];
  problem?: string;
  steps?: { title: string; body: string }[];
  features?: { title: string; body: string }[];
  privacyNotes?: string;
  faqs?: { q: string; a: string }[];
  /** Optional per-product accent (hex); company chrome still applies */
  accentColor?: string;
  seo?: { title?: string; description?: string };
};

export const statusLabels: Record<ProductStatus, string> = {
  building: "Building",
  launching_soon: "Launching soon",
  available: "Available",
  retired: "Retired",
};

export const statusDescriptions: Record<ProductStatus, string> = {
  building: "Active development — not publicly available yet.",
  launching_soon: "Near release — details may appear before download links.",
  available: "Publicly available with a download or launch link.",
  retired: "No longer offered.",
};

/**
 * Public product entries. Keep empty until a product is ready to list honestly.
 * Do not add unpublished app names as if they were shipped products.
 */
export const products: Product[] = [];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getListedProducts(): Product[] {
  return products.filter((p) => p.status !== "retired");
}

/** Only available products with a real action href get Download/Open CTAs */
export function canShowPrimaryAction(product: Product): boolean {
  return (
    product.status === "available" &&
    Boolean(product.primaryAction?.href) &&
    product.primaryAction!.href !== "#"
  );
}
