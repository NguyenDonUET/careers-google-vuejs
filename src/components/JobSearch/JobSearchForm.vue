<template>
    <form
        class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
    >
        <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
        <div class="flex flex-nowrap flex-1 h-full text-base font-light">
            <div class="relative flex items-center flex-1 h-full pr-3">
                <label for="role" class="absolute left-0 -top-10">Role</label>
                <TextInput v-model="role" placeholder="Software engineer" />
            </div>
            <span
                class="flex items-center h-full bg-brand-gray-2 px-3 border-l border-r border-brand-gray-3"
                >in</span
            >
            <div class="relative flex items-center flex-1 h-full pl-3">
                <label for="role" class="absolute left-0 -top-10">Where?</label>
                <TextInput v-model="location" placeholder="Los Angeles" />
            </div>
            <action-button
                class="rounded-r-3xl rounded-none"
                text="Search"
                type="secondary"
            />
        </div>
    </form>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";

export default {
    name: "JobSearchForm",
    components: { ActionButton, TextInput },
    data() {
        return {
            role: "",
            location: "",
        };
    },
    methods: {
        // updateRole(payload) {
        //     console.log(`typing role`);
        //     this.role = payload;
        // },
        // updateLocation(payload) {
        //     console.log(`typing location`);
        //     this.location = payload;
        // },
    },
};
</script>

<style></style>
