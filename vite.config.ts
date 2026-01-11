import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, existsSync } from 'fs';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-files',
      closeBundle() {
        try {
          if (existsSync(resolve(__dirname, 'public/CNAME'))) {
            copyFileSync(
              resolve(__dirname, 'public/CNAME'),
              resolve(__dirname, 'dist/CNAME')
            );
          }
        } catch (e) {
          console.log('CNAME file not found, skipping...');
        }
        
        try {
          if (existsSync(resolve(__dirname, 'public/.nojekyll'))) {
            copyFileSync(
              resolve(__dirname, 'public/.nojekyll'),
              resolve(__dirname, 'dist/.nojekyll')
            );
          }
        } catch (e) {
          console.log('.nojekyll file not found, skipping...');
        }
      }
    }
  ],
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
