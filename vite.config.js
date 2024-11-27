import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';


export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  // server: {
  //   proxy: {
  //     '/back': {
  //       target: 'https://xlsift-85-192-48-219.ru.tuna.am',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/back/, ''),
  //     },
  //   },
  // },
});
