import MyBadge from "./RateBadge.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Badge/RateBadge",
  component: MyBadge,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    rate: { control: "text" },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyBadge },
  template: '<my-badge v-bind="$props" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  rate: 0,
};
