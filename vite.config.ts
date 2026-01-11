import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-files',
      closeBundle() {
        try {
          copyFileSync(
            resolve(__dirname, 'public/CNAME'),
            resolve(__dirname, 'dist/CNAME')
          );
        } catch (e) {
          console.log('CNAME file not found, skipping...');
        }
      }
    }
  ],
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
