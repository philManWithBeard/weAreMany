import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: "https://philmanwithbeard.github.io",
  base: "/weAreMany",
  integrations: [tailwind(), db()],
  output: "hybrid",
  adapter: vercel(),
});
