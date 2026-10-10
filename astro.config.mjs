// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Must match src/data/site.ts siteUrl. Switch to custom domain when ready.
export default defineConfig({
  site: "https://visify-apps.github.io",
  integrations: [sitemap()],
});

