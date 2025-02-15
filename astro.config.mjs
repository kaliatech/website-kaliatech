import { defineConfig, passthroughImageService } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

import mdx from '@astrojs/mdx'

// import { analyzer } from "vite-bundle-analyzer";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
  image: {
    service: passthroughImageService(),
  },
  // vite: {
  //   server: {
  //     fs: {
  //       allow: ['c:/Projects'],
  //     },
  //   },
  // },
  vite: {
    // plugins: [
    //   analyzer(),
    // ],
    build: {
      chunkSizeWarningLimit: 2495,
      // rollupOptions: {
      //   output: {
      // This does not seem to work....
      //manualChunks: {
      //   mermaid: ['mermaid', 'katex']
      // }
      // This results in correct chunk, but chunk gets loaded on every page, not just when needed. See discussion
      // in discord.
      // manualChunks: (id, { getModuleInfo, getModuleIds }) => {
      //   const moduleInfo = getModuleInfo(id)
      //   if (
      //     id.includes('/mermaid/') ||
      //     moduleInfo.dynamicImporters.some(
      //       (importer) =>
      //         importer.includes('/mermaid/') ||
      //         moduleInfo.importers.some((importer) => importer.includes('/mermaid/')),
      //     )
      //   ) {
      //     return 'mermaid'
      //   }
      //   },
      // },
    },
  },
})
