<template>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
    />
    <div>
        <div class="flex flex-col gap-y-10 lg:flex-row lg:flex-wrap">
            <div class="text-center text-4xl sm:text-5xl md:text-6xl">
                <p>Um pouco</p>
                <p>sobre mim</p>
            </div>
            <p class="text-justify text-2xl md:text-3xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium repellat consequatur quam illo ipsa iste voluptatem
                accusantium alias omnis magnam est quae, eos nesciunt ea!
                Similique, quos! Iure, tempora ut!
            </p>
            <p class="text-center text-2xl md:text-3xl">
                Algumas tecnologias que uso
            </p>
            <div class="flex justify-center gap-x-4">
                <div v-for="(skill, skillKey) in skills" :key="skillKey">
                    <i
                        :class="`devicon-${skill}-plain`"
                        class="text-4xl sm:text-5xl md:text-6xl"
                    ></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const skills = [
    "html5",
    "css3",
    "tailwindcss",
    "javascript",
    "vuejs",
    "nuxtjs",
];
</script>
