<template>
    <div>
        <nav class="flex justify-around lg:justify-end lg:gap-x-14 lg:mr-20">
            <div v-for="(section, keySection) in sections" :key="keySection">
                {{ section }}
            </div>
        </nav>
    </div>
</template>

<script setup>
const sections = ["Início", "Sobre", "Projetos", "Contato"];
</script>
