import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base =
  process.env.GITHUB_ACTIONS === 'true' && repositoryName
    ? `/${repositoryName}/`
    : '/'

export default defineConfig({
  base,

  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      workbox: {
        globPatterns: [
          '**/*.{js,jsx,css,html,ico,png,svg,jpg,jpeg,webp}'
        ]
      },

      includeAssets: ['ala-siete.svg'],

      manifest: {
        name: 'Ala Siete — Archivo Aeronáutico',
        short_name: 'Ala Siete',
        description: 'Un archivo visual de historia, diseño e ingeniería de aviación militar.',
        lang: 'es',

        scope: base,
        start_url: base,

        display: 'standalone',

        theme_color: '#65704f',
        background_color: '#f3f1e9',

        icons: [
          {
            src: `${base}ala-siete.svg`,
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any'
          }
        ]
      }
    })
  ]
})