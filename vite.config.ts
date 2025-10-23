import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

// Import dinamico per evitare errori TypeScript
const sitemap = require('vite-plugin-sitemap').default;

const routes = [
  { path: '/', lastmod: '2025-10-23' },
  { path: '/home', lastmod: '2025-10-23' },
  { path: '/about', lastmod: '2025-10-23' },
  { path: '/contatti', lastmod: '2025-10-23' },
];

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      baseUrl: 'https://nuovanaturopatia.it',
      routes,
    }),
  ],
});