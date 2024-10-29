import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://whyloop.tech",
  integrations: [tailwind(), icon(),
  sitemap({
    // configuration options
    // https://docs.astro.build/en/guides/integrations-guide/sitemap/
  }),],
});
