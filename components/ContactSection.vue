<template>
  <section id="3" class="grid items-center">
    <h2>
      <p class="text-center text-3xl sm:text-4xl lg:text-5xl">
        Entre em contato
      </p>
    </h2>
    <div
      class="flex self-start justify-center gap-x-20 text-center lg:gap-x-32 glow"
    >
      <a href="https://github.com/ricierirossi" target="_blank">
        <p class="text-xl">Github</p>
        <i
          :class="`devicon-github-original`"
          class="text-6xl hover:cursor-pointer sm:text-8xl"
          alt="github"
        ></i
      ></a>
      <a
        href="https://www.linkedin.com/in/matheus-ricieri-rossi-da-silva-17768a1b8/"
        target="_blank"
      >
        <p class="text-xl">LinkedIn</p>
        <i
          :class="`devicon-linkedin-plain`"
          class="text-6xl hover:cursor-pointer sm:text-8xl"
          alt="linkedin"
        ></i
      ></a>
    </div>
  </section>
</template>

<script setup>
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("icons-glow");
        return;
      }
    });
  });

  const element = document.querySelectorAll(`.glow`);
  element.forEach((take) => observer.observe(take));
});
</script>
