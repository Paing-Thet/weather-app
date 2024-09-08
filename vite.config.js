import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  base: 'https://github.com/Paing-Thet/weather-app', // Change this to match your repo name
  plugins: [vue()],
});
