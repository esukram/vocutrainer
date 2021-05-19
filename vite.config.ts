import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh({parserPlugins: ['jsx']})
  ],
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser"
    }
  },
  esbuild: {
    // https://github.com/evanw/esbuild/issues/334
    // jsxInject: `import React from 'react'`,
  },

})
