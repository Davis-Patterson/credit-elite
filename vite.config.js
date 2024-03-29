import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      assets: '/src/assets',
      contexts: '/src/contexts',
      shared: '/src/shared',
      utilities: '/src/utilities',
      styles: '/src/styles',
    },
  },
  assetsInclude: ['**/*.png', '**/*.PNG', '**/*.avi'],
});
