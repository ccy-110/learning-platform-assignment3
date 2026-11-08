import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const repositoryName = 'learning-platform-assignment3'

function spaFallbackPlugin() {
  return {
    name: 'spa-fallback',
    apply: 'build',
    closeBundle() {
      const outDir = resolve(process.cwd(), 'dist')
      const indexFile = resolve(outDir, 'index.html')
      if (existsSync(indexFile)) {
        copyFileSync(indexFile, resolve(outDir, '404.html'))
      }
    },
  }
}

export default defineConfig(({ mode }) => ({
  base: mode === 'github-pages' ? `/${repositoryName}/` : '/',
  plugins: [vue(), spaFallbackPlugin()],
}))
