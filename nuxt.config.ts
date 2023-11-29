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
      title: 'Matheus Ricieri',
      meta: [
        {
          name:'description',
          content: 'Explore o universo do desenvolvimento front-end por meio do meu portfólio! Sou Matheus Ricieri, um apaixonado desenvolvedor front-end, e convido você a mergulhar nos meus projetos que destacam habilidades sólidas em HTML, CSS e JavaScript. Entre em contato diretamente comigo para oportunidades de colaboração e descubra mais sobre minha jornada e visão no desenvolvimento web. Vamos criar juntos a próxima experiência digital extraordinária!'
        }
      ],
      link: [{
        rel:"stylesheet",
        href:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      }]
    }
  }
})
