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

const selectedSection = ref(0); // Sessão selecionada - inicialmente sessão Início - usada para aplicar a classe
const sectionCoordY = ref(0); // window top = 0px - usado para scrollar

const scrollingTo = (section) => {
  sectionCoordY.value =
    document.getElementById(section).getBoundingClientRect().y + window.scrollY;

  globalThis.scrollTo(0, sectionCoordY.value);
};

const scrollPosition = ref(0);

const handleScroll = () => {
  if (process.client) {
    let currentScrollPosition = window.scrollY;

    if (currentScrollPosition < sectionCoordY.value) {
      console.log("Scrolling up");

      //your desire logic
    } else {
      console.log("Scrolling down");
      //your desire logic
    }

    sectionCoordY.value = window.scrollY;
  }
};

onMounted(() => {
  if (process.client) {
    window.addEventListener("scroll", handleScroll);
  }
});
</script>
