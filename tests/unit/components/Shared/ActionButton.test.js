import { mount } from "@vue/test-utils";
import ActionButton from "@/components/Shared/ActionButton.vue";

describe("ActionButton", () => {
    // render đúng text truyền xuống hay ko ?
    it("renders text", () => {
        const wrapper = mount(ActionButton, {
            props: {
                text: "A button",
            },
        });
        expect(wrapper.text()).toMatch("A button");
    });
    // class của button có đc apply đúng hay ko ?
    it("applies one of serval styles to button", () => {
        const wrapper = mount(ActionButton, {
            props: {
                type: "primary",
                text: "Sign in",
            },
        });
        const button = wrapper.find("button");

        expect(button.classes("primary")).toBe(true);
    });
});
