import { defineConfig } from 'astro/config';

// Set `site` to the real domain once one is chosen (used for canonical URLs).
export default defineConfig({
  site: 'https://decision-layer-indol.vercel.app', // Vercel production domain until a custom one is chosen
  trailingSlash: 'ignore',
});
