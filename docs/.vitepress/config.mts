import { defineConfig, DefaultTheme } from 'vitepress';
import {generateSidebar} from './utils'
import path from 'path';
// https://vitepress.dev/reference/site-config
const sidebar :DefaultTheme.Config["sidebar"] = generateSidebar(path.resolve(__dirname, "../src/posts"), [])


export default defineConfig({
  base: '/fe/',
  title: "FE Record",
  description: "become better and better",
  srcDir: './src',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
  ],
  themeConfig: {
    logo: { src: '/logo.png', width: 24, height: 24 },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts' }
    ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Liboq' }
    ]
  }
})
