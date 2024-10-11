import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: "autoUpdate",
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
    manifest: {
      name: 'Travel Titans',
      short_name: 'Travel Titans',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'apple-splash-64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: 'apple-splash-192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'apple-splash-512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: 'manifest-icon-512.maskable.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ],
    },
  })], 
})
