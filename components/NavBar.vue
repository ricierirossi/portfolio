<template>
  <nav
    class="bg-charcoal flex justify-around fixed bottom-0 w-full h-10 lg:top-0 lg:justify-end"
  >
    <!-- TODO INSERIR BOTÃO DE LIGHT MODE -->
    <div
      v-for="(section, keySection) in sections"
      :key="keySection"
      @click="(selectedSection = keySection), scrollingTo(keySection)"
      class="hover:cursor-pointer text-xl flex items-center py-5 lg:px-10"
      :class="{ underline: selectedSection === keySection }"
    >
      {{ section }}
    </div>
  </nav>
</template>

<script setup>
const sections = ["Início", "Sobre", "Projetos", "Contato"];

const selectedSection = ref(0);
const sectionCoordY = ref(0);

const scrollingTo = (section) => {
  sectionCoordY.value =
    document.getElementById(section).getBoundingClientRect().y + window.scrollY;

  globalThis.scrollTo(0, sectionCoordY.value);
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("underline");
      } else {
        entry.target.classList.remove("underline");
      }
    });
  });

  const element = document.querySelectorAll(`.section`);
  element.forEach((take) => observer.observe(take));
});
</script>
