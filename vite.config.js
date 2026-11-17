import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        // Long-lived vendor chunks → better caching between deploys
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('swiper')) return 'swiper'
          if (id.includes('framer-motion') || id.includes('motion-dom')) return 'motion'
          if (id.includes('react-icons') || id.includes('lucide-react')) return 'icons'
          if (id.includes('react-router') || id.includes('react-dom') || id.includes('/react/') || id.includes('react-helmet')) return 'react-vendor'
        },
      },
    },
  },
})
