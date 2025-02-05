import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";

export default defineConfig({
  define: { global: "window" },
  optimizeDeps: {
    include: ["@react-navigation/native"],
    esbuildOptions: {
      mainFields: ["module", "main"],
      resolveExtensions: [".web.js", ".js", ".ts"],
      plugins: [esbuildCommonjs(["@react-navigation/elements"])],
    },
  },
  resolve: {
    extensions: [".web.tsx", ".web.jsx", ".web.js", ".tsx", ".ts", ".js"],
    alias: { 'react-native': 'react-native-web' }
  },
  plugins: [react()],
  build: { commonjsOptions: { transformMixedEsModules: true } }
})