<template>
  <div class="grid items-center">
    <p class="text-center text-4xl sm:text-5xl md:text-6xl">Entre em contato</p>
    <div
      class="flex flex-col self-start items-center gap-y-32 lg:flex-row lg:justify-center lg:gap-x-32"
    >
      <div v-for="(contact, contactKey) in contacts" :key="contactKey">
        <i
          :class="`devicon-${contact}`"
          class="text-9xl hover:cursor-pointer"
        ></i>
      </div>
    </div>
  </div>
</template>
<script setup>
const contacts = ["github-original", "linkedin-plain"];
</script>
