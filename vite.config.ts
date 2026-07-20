import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),  viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 70 },
      pngquant: { quality: [0.6, 0.8] },
      svgo: {
        plugins: [{ name: 'removeViewBox' }, { name: 'cleanupIDs', active: false }]
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react'
            if (id.includes('framer-motion')) return 'vendor-framer-motion'
            if (id.includes('apollo-client') || id.includes('@apollo/client')) return 'vendor-apollo'
            if (id.includes('graphql')) return 'vendor-graphql'
            return 'vendor'
          }
        },
      },
    },
  },
})
