import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    {
      name: "Remove React Devtools for production build",
      // Ensure that we resolve before everything else
      enforce: "pre",

      // Run only on build
      apply: "build",
      transformIndexHtml(code) {
        code += `<script>window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {};</script>`;
        return code;
      },
    },
  ],
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser",
      "@api": path.resolve(__dirname, "./src/api/"),
    },
  },
  esbuild: {
    // https://github.com/evanw/esbuild/issues/334
    jsxInject: `import React from 'react'`,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          aws_amplify: ["aws-amplify"],
        },
      },
    },
  },
});
