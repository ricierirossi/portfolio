<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
  />

  <div
    class="flex flex-col justify-center items-center gap-y-7 lg:grid lg:grid-cols-2 grid-rows-3 lg:py-11 lg:gap-0"
  >
    <div
      class="text-center text-4xl sm:text-5xl md:text-6xl lg:col-start-1 lg:col-end-2"
    >
      <p>Um pouco</p>
      <p>sobre mim</p>
    </div>
    <p
      class="text-justify px-4 text-2xl sm:px-14 md:text-3xl lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4 lg:max-w-2xl"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
      repellat consequatur quam illo ipsa iste voluptatem accusantium alias
      omnis magnam est quae, eos nesciunt ea! Similique, quos! Iure, tempora ut!
    </p>
    <div
      class="flex flex-col gap-y-8 lg:grid lg:row-start-2 lg:row-end-4 lg:px-5"
    >
      <p class="text-center text-2xl md:text-3xl">
        Algumas tecnologias que uso
      </p>
      <div class="flex justify-center gap-x-4 lg:row-start-3 lg:row-end-4">
        <div v-for="(skill, skillKey) in skills" :key="skillKey">
          <i
            :class="`devicon-${skill}-plain`"
            class="text-4xl sm:text-5xl md:text-6xl"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  "html5",
  "css3",
  "tailwindcss",
  "javascript",
  "vuejs",
  "nuxtjs",
];
</script>
