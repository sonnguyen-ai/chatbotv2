// vite.config.js
import { defineConfig } from 'vite';
import string from 'vite-plugin-string';

export default defineConfig({
  plugins: [
    string({
      include: '**/*.css'
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 5000, // Change to your desired port
  },
});