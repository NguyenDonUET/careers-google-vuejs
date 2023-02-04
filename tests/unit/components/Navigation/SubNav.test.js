import { mount } from "@vue/test-utils";
import SubnavMenu from "@/components/Navigation/SubnavMenu";

describe("SubnavMenu", () => {
    describe("when user is on job page", () => {
        it("displays job count", () => {
            const wrapper = mount(SubnavMenu, {
                global: {
                    stubs: {
                        FontAwesomeIcon: true,
                    },
                },
            });
            const jobCount = wrapper.find("[data-test='job-count']");
            expect(jobCount.exists()).toBe(true);
        });
    });

    describe("when user is Not on job page", () => {
        it("does NOT displays job count", () => {
            const wrapper = mount(SubnavMenu, {
                global: {
                    stubs: {
                        FontAwesomeIcon: true,
                    },
                },
                data() {
                    return {
                        onJobResultsPage: false,
                    };
                },
            });
            const jobCount = wrapper.find("[data-test='job-count']");
            expect(jobCount.exists()).toBe(false);
        });
    });
});
