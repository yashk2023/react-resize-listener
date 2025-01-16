import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/main.tsx', // Path to your library's entry point
      name: 'react-resize-listener-hook',  // Global variable name (useful for UMD builds)
      fileName: (format) => `react-resize-listener-hook.${format}.js`,
    },
    rollupOptions: {
      // Externalize dependencies that should not be bundled
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})