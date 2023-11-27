<template>
  <nav
    class="bg-charcoal flex justify-around fixed bottom-0 w-full h-10 lg:top-0 lg:justify-end"
  >
    <div
      v-for="(section, keySection) in sections"
      :key="keySection"
      @click="selectedSection = keySection"
      class="hover:cursor-pointer text-xl flex items-center lg:px-10"
      :class="{ underline: selectedSection === keySection }"
    >
      {{ section }}
    </div>
  </nav>
</template>

<script setup>
const sections = ["Início", "Sobre", "Projetos", "Contato"];
const selectedSection = ref(0);
</script>
