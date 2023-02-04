import { shallowMount } from "@vue/test-utils";

import MainNav from "@/components/Navigation/MainNav.vue";

describe("MainNav", () => {
    it("display company name", async () => {
        const wrapper = shallowMount(MainNav);
        await wrapper.setData({
            company: "The cat",
        });
        expect(wrapper.text()).toMatch("The cat");
    });

    it("displays menu items for navigation", () => {
        const wrapper = shallowMount(MainNav);
        const navigationMenuItems = wrapper.findAll(
            "[data-test='main-nav-list-item']"
        );
        const navigationMenuTexts = navigationMenuItems.map((item) =>
            item.text()
        );

        expect(navigationMenuTexts).toEqual([
            "Teams",
            "Locations",
            "Life at BoboCrop",
            "How we hire",
            "Students",
            "Jobs",
        ]);
    });

    describe("when user logs out", () => {
        it("prompts user to sign in", () => {
            const wrapper = shallowMount(MainNav);

            const loginBtn = wrapper.findComponent(
                "[data-test='login-button']"
            );
            expect(loginBtn.exists()).toBe(true);
        });
    });

    describe("when user logs in", () => {
        it("display user profile picture", async () => {
            const wrapper = shallowMount(MainNav);
            // before click sign in
            let profileImage = wrapper.findComponent(
                "[data-test='profile-image']"
            );
            expect(profileImage.exists()).toBe(false);
            // after click sign in
            const loginBtn = wrapper.findComponent(
                "[data-test='login-button']"
            );
            await loginBtn.trigger("click");

            profileImage = wrapper.findComponent("[data-test='profile-image']");
            expect(profileImage.exists()).toBe(true);
            expect(loginBtn.exists()).toBe(false);
        });

        it("display subnavigation menu", async () => {
            const wrapper = shallowMount(MainNav);
            let subnav = wrapper.find("[data-test='subnav']");
            expect(subnav.exists()).toBe(false);
            // after sign in
            const loginBtn = wrapper.find("[data-test='login-button']");
            await loginBtn.trigger("click");

            subnav = wrapper.find("[data-test='subnav']");
            expect(subnav.exists()).toBe(true);
        });
    });
});
