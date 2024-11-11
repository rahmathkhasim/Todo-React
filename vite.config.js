import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './', // if your index.html is in the root directory
  plugins: [react()],
});
