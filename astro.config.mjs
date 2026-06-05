import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// Static marketing site — outputs to `dist/` for Cloudflare Pages.
export default defineConfig({
  site: 'https://www.nazuraai.com',
  integrations: [tailwind()],
})
