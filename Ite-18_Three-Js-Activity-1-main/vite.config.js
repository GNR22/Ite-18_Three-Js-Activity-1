const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  publicDir: 'static',   // points to your static/ folder
  build: {
    outDir: 'dist',      // will create dist/ for Vercel
    emptyOutDir: true
  },
  base: '',            // ensures relative paths
})
