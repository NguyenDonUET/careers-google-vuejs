<template>
    <header
        :class="['w-full', 'text-sm', 'flex', 'flex-col', headerHeightClass]"
    >
        <div class="fixed top-0 left-0 h-16 w-full bg-white">
            <div
                class="mx-auto h-full flex flex-nowrap px-8 border-b border-brand-gray-1"
            >
                <a :href="url" class="flex items-center h-full text-xl">{{
                    company
                }}</a>
                <nav class="h-full ml-12">
                    <ul class="flex items-center h-full space-x-8 list-none">
                        <li
                            v-for="(item, index) in menuItems"
                            :key="index"
                            data-test="main-nav-list-item"
                            class="h-full"
                        >
                            <a class="h-full flex items-center" href="">
                                {{ item }}
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="flex items-center h-full ml-auto">
                    <ProfileImage v-if="isLoggedIn" data-test="profile-image" />
                    <ActionButton
                        v-else
                        text="Sign in"
                        type="primary"
                        data-test="login-button"
                        @click="loginUser"
                    />
                </div>
            </div>
        </div>
        <SubnavMenu v-if="isLoggedIn" data-test="subnav" />
    </header>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import SubnavMenu from "@/components/Navigation/SubnavMenu.vue";

export default {
    name: "MainNav",
    components: {
        ActionButton,
        ProfileImage,
        SubnavMenu,
    },
    data() {
        return {
            company: "Bobo Careers",
            url: "https://careers.google.com/",
            menuItems: [
                "Teams",
                "Locations",
                "Life at BoboCrop",
                "How we hire",
                "Students",
                "Jobs",
            ],
            isLoggedIn: false,
        };
    },
    computed: {
        headerHeightClass() {
            return {
                "h-16": !this.isLoggedIn,
                "h-32": this.isLoggedIn,
            };
        },
    },
    methods: {
        loginUser() {
            this.isLoggedIn = true;
        },
    },
};
</script>
