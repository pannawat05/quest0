// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

console.log(__dirname);

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: ['..'],
    },
  },
});