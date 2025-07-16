import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Enable host mode 
    watch: {
      usePolling: true, // Enable polling for file changes
      interval: 100, // Adjust the polling interval as needed
    },
  },
  })
