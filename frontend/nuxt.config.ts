export default defineNuxtConfig({
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
    '~/assets/css/main.css',
    '~/assets/css/app.css',
    '~/assets/css/dx-color.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@pinia/nuxt',
    '@invictus.codes/nuxt-vuetify',
    '@nuxtjs/google-fonts',
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'customTheme',
        themes: {
          light: {
            colors: {
              primary: '#1976D2',
              secondary: '#424242',
            },
          },
          customTheme: {
            dark: false, // 或 true，如果你需要深色模式
            colors: {
              background: '#f5f5f5', // 背景設為灰色（你可以換成其他色碼）
            },
          },
        },
      },
    },
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700], // 可根據需求選擇字重
    },
    display: 'swap', // 優化字體顯示
  },
  publicRuntimeConfig: {
    apiServer: process.env.VITE_API_SERVER, // 將 API 伺服器 URL 暴露給前端
  },
  // nitro: {
  //   devProxy: {
  //     '/api': {
  //       target: `${process.env.VITE_API_SERVER}`,
  //       changeOrigin: true,
  //       headers: {
  //         Cookie: `csrftoken=${process.env.VITE_CSRFTOKEN}; sessionid=${process.env.VITE_SESSIONID}`,
  //       },
  //     },
  //   },
  // },
});
