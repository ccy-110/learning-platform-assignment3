import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const repositoryName = 'learning-platform-assignment3'

function pagesRoutePlugin() {
  return {
    name: 'pages-routes',
    apply: 'build',
    closeBundle() {
      const outDir = resolve(process.cwd(), 'dist')
      const indexFile = resolve(outDir, 'index.html')
      if (!existsSync(indexFile)) return

      // Direct visits to /assignment3 return HTTP 200 on GitHub Pages.
      const routeDir = resolve(outDir, 'assignment3')
      mkdirSync(routeDir, { recursive: true })
      copyFileSync(indexFile, resolve(routeDir, 'index.html'))

      // Client-side fallback for other deep links.
      copyFileSync(indexFile, resolve(outDir, '404.html'))
    },
  }
}

export default defineConfig(({ mode }) => ({
  base: mode === 'github-pages' ? `/${repositoryName}/` : '/',
  plugins: [vue(), pagesRoutePlugin()],
}))
