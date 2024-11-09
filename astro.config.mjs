import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://falz.studio/",

  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://falz.studio/sitemap-index.xml",
        "https://falz.studio/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],

  markdown: {
    remarkPlugins: [remarkReadingTime],
  },

  output: "server",

  vite: {
    assetsInclude: "**/*.riv",
  },

  adapter: cloudflare(),
});