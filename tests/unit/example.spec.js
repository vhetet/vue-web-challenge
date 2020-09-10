import { shallowMount } from "@vue/test-utils";
import ContactList from "@/components/contact-list/index.vue";

describe("contact-list", () => {
  it("renders contact list", () => {
    const wrapper = shallowMount(ContactList);
    expect(wrapper.text()).toContain("contact-list");
  });
});
