<template>
  <div @click="themeMode" class="bg-red-700 light:bg-blue-700">
    <span class="material-symbols-outlined font-extralight" v-if="!lightMode">
      light_mode
    </span>
    <span class="material-symbols-outlined font-extralight" v-else>
      dark_mode
    </span>
  </div>
</template>

<script setup>
const lightMode = ref(false); // true = light

const themeMode = () => {
  lightMode.value = !lightMode.value;

  if (lightMode.value) {
    localStorage.theme = "light";
  }
  if (!lightMode.value) {
    localStorage.theme = "dark";
  }

  toggleTheme();
};

const toggleTheme = () => {
  if (localStorage.theme === "light") {
    document.documentElement.classList.add("light");
    console.log("oi");
  } else {
    document.documentElement.classList.remove("light");
    console.log("tchau");
  }
};

// onMounted(() => {
//   localStorage.theme = "dark";
// });
</script>
