<template>
    <p class="text-center">Entre em contato</p>
    <div class="flex justify-center gap-x-4">
        <div v-for="(contact, contactKey) in contacts" :key="contactKey">
            <i :class="`devicon-${contact}`" class="text-5xl"></i>
        </div>
    </div>
</template>
<script setup>
const contacts = ["github-original", "linkedin-plain"];
</script>
