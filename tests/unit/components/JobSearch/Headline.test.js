import { mount } from "@vue/test-utils";

import Headline from "@/components/JobSearch/Headline.vue";
import { nextTick } from "vue";

describe("Headline", () => {
    beforeEach(() => {
        jest.useFakeTimers("legacy");
    });
    afterEach(() => {
        jest.useRealTimers();
    });

    it("display introductory action verb", () => {
        const wrapper = mount(Headline);
        const actionPhrase = wrapper.find("[data-test='action-phrase']");

        expect(actionPhrase.text()).toBe("Build for everyone");
    });

    it("change action verb at a consistent interval", () => {
        mount(Headline);

        expect(setInterval).toHaveBeenCalled();
    });

    it("swap action verb after first interval", async () => {
        const wrapper = mount(Headline);
        jest.runOnlyPendingTimers();
        await nextTick();
        const actionPhrase = wrapper.find("[data-test='action-phrase']");

        expect(actionPhrase.text()).toBe("Create for everyone");
    });

    it("removes interval when component unmount", async () => {
        const wrapper = mount(Headline);
        wrapper.unmount();

        expect(clearInterval).toHaveBeenCalled();
    });
});
