import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "extra-large", "extra-small", "small", "medium"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "primary",
    size: "large",
    icon: true,
    className: {},
    divClassName: {},
    text: "Large",
  },
};
