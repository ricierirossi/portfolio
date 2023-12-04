<template>
  <section id="1" class="flex flex-col justify-center text-center px-5">
    <div class="flex flex-col gap-y-10 pb-10 lg:grid grid-cols-2">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl">
        <p>Um pouco sobre mim</p>
      </h2>
      <h3
        class="text-base sm:text-lg lg:text-xl text-justify self-center max-w-md lg:col-start-1 lg-col-end-2 lg:row-start-2 lg:row-end-3 lg:place-self-center"
      >
        <p>
          <br />Sou um entusiasta de front-end com um toque de mágica em HTML,
          CSS e JavaScript. Me formei em Engenharia Elétrica, mas meu coração
          bate forte mesmo é pelo mundo do desenvolvimento web. <br />
          <br />Atualmente, estou nos bastidores, aprimorando projetos que em
          breve estarão prontos para o grande espetáculo. <br />
          <br />Se você procura um toque de magia para o seu projeto front-end,
          estou aqui para fazer acontecer.
        </p>
      </h3>
      <div
        class="flex flex-col gap-y-8 lg:row-start-1 lg:row-end-3 lg:px-5 lg:place-self-center"
      >
        <h3>
          <p class="text-base sm:text-lg lg:text-xl">
            Algumas tecnologias que uso
          </p>
        </h3>
        <div
          class="flex flex-wrap justify-center gap-x-5 text-3xl sm:text-4lg lg:gap-y-5"
        >
          <div
            v-for="(skillIcon, skillIconKey) in skillsIcons"
            :key="skillIconKey"
            :style="{ animationDelay: `${skillIconKey / 5}s` }"
            class="slide-up"
          >
            <i
              :class="`devicon-${skillIcon}`"
              :alt="skillsName[skillIconKey]"
            ></i>
            <p class="text-center text-base sm:text-lg lg:text-xl">
              {{ skillsName[skillIconKey] }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillsIcons = [
  "html5-plain",
  "css3-plain",
  "tailwindcss-plain",
  "javascript-plain",
  "vuejs-plain",
  "nuxtjs-plain",
];
const skillsName = [
  "HTML 5",
  "CSS 3",
  "Tailwind CSS",
  "JavaScript",
  "Vue.js",
  "Nuxt.js",
];

// onMounted(() => {
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("slide-up");
//       } else {
//         entry.target.classList.remove("slide-up");
//       }
//     });
//   });

//   const element = document.querySelector(`a`);
//   observer.observe(element);
// });
</script>
