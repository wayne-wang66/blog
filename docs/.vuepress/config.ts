import { viteBundler } from '@vuepress/bundler-vite'
import path from 'path'
import { defineUserConfig } from 'vuepress'
import { sitemapPlugin } from 'vuepress-plugin-sitemap2'
import { gungnirTheme, i18n } from 'vuepress-theme-gungnir'
import { navbar, sidebar } from './configs'
import { registerComponentsPlugin } from './plugins/register-components'


const isProd = process.env.NODE_ENV === 'production'
const base = process.env.BASE ? `/${process.env.BASE}/` : '/'

export default defineUserConfig({
  dest: 'build',
  // base: base as `/${string}/`,
  base: '/blog/',
  // base: '/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `${base}img/logo/logo.png`,
      },
    ],
    [
      'meta',
      {
        name: 'author',
        content: 'wayne',
      },
    ],

  ],

  // site-level locales config
  locales: {
    '/': {
      lang: 'en-US',
      title: 'wayne',
      description: "wayne's blog",
    },
  },

  bundler: viteBundler(),

  theme: gungnirTheme({
    repo: 'wayne/blog',
    docsDir: 'docs',
    hitokoto: 'https://v1.hitokoto.cn?c=i', // enable hitokoto (一言) or not?

    // personal information
    personalInfo: {
      name: 'wayne',
      avatar: '/img/avatar.jpg',
      description: '🤧🥭',
      sns: {
        github: 'wayne',
        email: '15295502569@163.com',
      },
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: 'https://www.bing.com/th?id=OHR.GiffordPinchot_ZH-CN2050686223_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: 'https://www.bing.com/th?id=OHR.BerninaBloodMoon_ZH-CN3349260043_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
        mask: 'rgb(251, 170, 152, .2)',
      },
      {
        path: 'https://www.bing.com/th?id=OHR.SvalbardSun_ZH-CN6108396467_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
        mask: 'rgba(68, 74, 83, .1)',
      },
      {
        path: 'https://www.bing.com/th?id=OHR.MountFryatt_ZH-CN0611142036_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
        mask: 'rgba(19, 75, 50, .2)',
      },
    ],

    // other pages
    pages: {
      tags: {
        subtitle: 'Black Sheep Wall',
        bgImage: {
          path: '/img/pages/tags.jpg',
          mask: 'rgba(211, 136, 37, .5)',
        },
      },
      links: {
        subtitle:
          'When you are looking at the stars, please put the brightest star shining night sky as my soul.',
        bgImage: {
          path: '/img/pages/links.jpg',
          mask: 'rgba(64, 118, 190, 0.5)',
        },
      },
    },

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale is English, we don't need to set all of the locale fields
       */
      '/': {
        // navbar
        navbar: navbar.en,
        // sidebar
        sidebar: sidebar.en,
      },

      /**
       * Chinese locale config
       */
      '/zh/': {
        // navbar
        navbar: navbar.zh,
        // sidebar
        sidebar: sidebar.zh,
        // i18n
        ...i18n.zh,
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      mermaid: true,
      chartjs: true,
      giscus: {
        repo: 'wayne/blog',
        repoId: 'MDEwOlJlcG9zaXRvcnkzOTc0ODYzMzk=',
        category: 'General',
        categoryId: 'DIC_kwDOF7EpA84COi_d',
        lazyLoad: false,
      },
      mdPlus: {
        all: true,
      },
      // ga: 'G-ZLWJGDQC5S',
      ba: 'f645355c45295e011faa1a65c2c0b86c',
      pwa: false,
      search: {
        locales: {
          "/": {
            placeholder: "Search"
          },
          "/zh/": {
            placeholder: "搜索"
          }
        }
        // maxSuggestions: 10,
        // isSearchable: () => true,
        // getExtraFields: () => []
      }, // use @vuepress/plugin-docsearch instead
    },

    footer: `
      &copy; <a href="https://github.com/wangshufen66" target="_blank">wayne</a> 2019-present
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `,
  }),

  plugins: [
    sitemapPlugin({
      hostname: 'https://www.waynestrive.top',
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, 'components'),
    }),
    
  ],

  markdown: {
    headers: {
      level: [2, 3, 4, 5],
    },
    code: {
      lineNumbers: false,
    },
  },
})
