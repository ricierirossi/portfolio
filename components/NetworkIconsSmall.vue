<template>
  <div class="flex gap-x-5">
    <div v-for="(networkIcon, networkIconKey) in networkIcons">
      <a
        :href="networkLinks[networkIconKey]"
        target="_blank"
        class="flex items-end"
      >
        <i
          :class="networkIcon"
          class="hover:cursor-pointer text-2xl pr-2"
          :alt="networkNames[networkIconKey]"
        >
        </i
        >{{ networkNames[networkIconKey] }}
      </a>
    </div>
  </div>
</template>

<script setup>
const networkNames = ["Github", "LinkedIn"];
const networkIcons = ["devicon-github-original", `devicon-linkedin-plain`];
const networkLinks = [
  "https://github.com/ricierirossi",
  "https://www.linkedin.com/in/matheus-ricieri-rossi-da-silva-17768a1b8/",
];
</script>
