<template>
    <div>
        <MainNav />
        <Hero />
    </div>
</template>

<script>
import MainNav from "@/components/Navigation/MainNav.vue";
import Hero from "@/components/JobSearch/Hero.vue";
export default {
    name: "App",
    components: {
        MainNav,
        Hero,
    },
};
</script>

<style></style>
