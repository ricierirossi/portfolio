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
      title: 'Portifólio do Matheus Ricieri - Desenvolvedor Front-end',
      meta: [
        {
          name:'description',
          content: 'Explore meu portfólio front-end! Eu sou o Matheus Ricieri, apaixonado por criar coisas incríveis. Vamos trabalhar juntos e fazer acontecer!'
        }
      ],
      link: [{
        rel:"stylesheet",
        href:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      }]
    }
  }
})
