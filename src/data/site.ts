/**
 * Site-wide brand copy and config.
 * Update siteUrl when the custom domain is ready.
 */
export const site = {
  name: "VISIFY APPS",
  shortName: "Visify Apps",
  tagline: "Build · Create · Grow",
  description:
    "Visify Apps — a software studio building practical digital products. Simple tools, thoughtfully built.",
  email: "visifyapps@gmail.com",
  /** Production origin (no trailing slash). GitHub Pages until custom domain. */
  siteUrl: "https://visify-apps.github.io",
  ogImage: "/og/default.svg",
  copyrightYear: new Date().getFullYear(),
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const approachPoints = [
  {
    title: "Practical",
    body: "Solve a defined problem instead of adding unnecessary complexity.",
  },
  {
    title: "Thoughtful",
    body: "Make interfaces clear and workflows easy to understand.",
  },
  {
    title: "Useful",
    body: "Focus on helping people complete real tasks.",
  },
] as const;

export const contactChannels = [
  {
    id: "general",
    title: "General enquiries",
    description: "Questions about Visify Apps, partnerships, or the company website.",
    subject: "General enquiry",
  },
  {
    id: "support",
    title: "Product support",
    description: "Help with a Visify Apps product once it is available.",
    subject: "Product support",
  },
  {
    id: "feedback",
    title: "Bug reports & feedback",
    description: "Share issues, ideas, or suggestions for improving our products.",
    subject: "Feedback",
  },
  {
    id: "business",
    title: "Business & partnerships",
    description: "Collaboration, licensing, or other business conversations.",
    subject: "Business enquiry",
  },
] as const;

export function mailto(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${site.email}${query ? `?${query}` : ""}`;
}
