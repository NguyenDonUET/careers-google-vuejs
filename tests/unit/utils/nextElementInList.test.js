import nextElementInList from "@/utils/nextElementInList";

describe("nextElementInList", () => {
    it("locates element in list and return next element", () => {
        const list = ["a", "b", "c"];
        const nextElement = nextElementInList(list, "b");
        expect(nextElement).toMatch("c");
    });
    it("when the element at the end of list", () => {
        const list = ["a", "b", "c"];
        const nextElement = nextElementInList(list, "c");
        expect(nextElement).toMatch("a");
    });
});
