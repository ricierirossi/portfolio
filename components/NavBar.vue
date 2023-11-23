<template>
    <nav class="">
        <div
            v-for="(section, keySection) in sections"
            :key="keySection"
            @click="selectedSection = keySection"
            class="hover:cursor-pointer"
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
