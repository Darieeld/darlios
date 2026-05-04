import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://darlios.com',
  base: '/',
  output: 'server',
  adapter: cloudflare(),
});