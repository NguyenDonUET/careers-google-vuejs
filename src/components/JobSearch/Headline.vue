<template>
    <section class="mb-16">
        <h1
            class="mb-14 text-8xl font-bold tracking-tighter"
            data-test="action-phrase"
        >
            <span :class="[actionClasses]">{{ action }}</span
            ><br />
            for everyone
        </h1>
        <h2 class="font-light text-3xl">Find your next job at Bob Corp.</h2>
    </section>
</template>

<script>
import nextElementInList from "@/utils/nextElementInList";

export default {
    name: "Headline",
    data() {
        return {
            action: "Build",
            interval: null,
        };
    },
    computed: {
        actionClasses() {
            return {
                [this.action.toLowerCase()]: true,
            };
        },
    },
    created() {
        this.changeTitle();
    },
    beforeUnmount() {
        clearInterval(this.interval);
    },

    methods: {
        changeTitle() {
            this.interval = setInterval(() => {
                let actions = ["Build", "Create", "Design", "Code"];
                let nextAction = nextElementInList(actions, this.action);
                this.action = nextAction;
            }, 3000);
        },
    },
};
</script>

<style scoped>
.build {
    color: #1a73e8;
}
.create {
    color: #34a853;
}
.design {
    color: #f9ab00;
}
.code {
    color: #d93025;
}
</style>
