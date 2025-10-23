// vite.config.ts or vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(),tailwindcss(), VitePluginSitemap({
      baseUrl: 'https://nuovanatuopatia.it', // SOSTITUISCI con il tuo dominio
      outDir: 'dist',
      contentBase: 'dist',
      routes: [
        { path: '/', lastmod: '2025-10-23' },
        { path: '/home', lastmod: '2025-10-23' },
        { path: '/contatti', lastmod: '2025-10-23' },
        // Aggiungi tutte le tue route qui
      ],
    }),
  ],

});