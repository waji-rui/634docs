import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "衡阳市八中新634班班级文档",
  description: "去做，让改变发生",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    outlineTitle: '本页目录',
    outline: [2,6],
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '声明', link: '/declaration' },
      { text: '班级站点', items:[{ text: '官网首页', link: 'https://634.creaconception.moe' },{ text: '网站导航', link: 'https://cstu.cc.cd/categories.html#class634' },] }
    ],

    sidebar: [
      {
        text: '此网站建设中', link: '/build'
      },
      {
        text: '前言', link: '/preface'
      },
      {
        text: '班级活动', 
        items: [
          { text: '简介', link: '/act/index' },
          { text: '2026儿童节活动', items: [{ text: '活动详情', link: '/act/2026children/index' }]}
        ]
      },
      {
        text: '尾声', link: '/epilogue'
      },
      {
        text: '声明', link: '/declaration'
      }
    ],
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/waji-rui/634docs' }
    ],

    footer:{
      copyright:"Copyright © 2026 Creaconception Studio. All Rights Reserved"
    }
  }
})
