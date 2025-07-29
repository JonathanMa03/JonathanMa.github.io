import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/JonathanMa.github.io/',
  plugins: [react()],
});