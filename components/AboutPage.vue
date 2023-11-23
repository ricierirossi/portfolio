<template>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
    />
    <div>
        <div class="flex flex-col text-center gap-y-9 px-11">
            <div class="text-4xl sm:text-5xl 2xl:text-8xl">
                <p>Um pouco</p>
                <p>sobre mim</p>
            </div>
            <p class="text-justify sm:text-3xl 2xl:text-4xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium repellat consequatur quam illo ipsa iste voluptatem
                accusantium alias omnis magnam est quae, eos nesciunt ea!
                Similique, quos! Iure, tempora ut!
            </p>
            <p class="sm:text-3xl 2xl:text-4xl">Algumas tecnologias que uso</p>
            <div class="flex flex-wrap justify-center gap-10">
                <div v-for="(skill, skillKey) in skills" :key="skillKey">
                    <i
                        :class="`devicon-${skill}-plain`"
                        class="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl"
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
