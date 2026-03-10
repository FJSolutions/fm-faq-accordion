import {defineConfig} from "astro/config";
import {browserslistToTargets} from 'lightningcss';
import browserslist from 'browserslist';
import alpinejs from '@astrojs/alpinejs';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  vite: {
    build: {
      cssMinify: 'lightningcss', // Use Lightning CSS for minification during build
    },
    css: {
      transformer: 'lightningcss', // Use Lightning CSS for transformations during development
      lightningcss: {
        targets: browserslistToTargets(browserslist('defaults')), // Define browser targets
        cssModules: true, // Enable CSS Modules support if needed
        drafts: {
          customMedia: true, // Enable features like custom media queries
        },
      },
    },
  },

  integrations: [alpinejs()],
  adapter: cloudflare(),
});