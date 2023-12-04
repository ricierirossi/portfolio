// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Portifólio | Matheus Ricieri - Desenvolvedor Front-end',
      meta: [
        {
          name:'description',
          content: 'Explore meu portfólio front-end! Eu sou o Matheus Ricieri, apaixonado por criar coisas incríveis. Vamos trabalhar juntos e fazer acontecer!'
        }
      ],
      link: [
      {
        rel:"stylesheet",
        href:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      },
      {
        rel:"stylesheet",
        href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      }
      ]
    }
  }
})


