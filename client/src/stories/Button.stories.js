import { Button } from "../components/Buttons/Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["docsPage"],
  argTypes: { handleClick: { action: "handleClick" } },
};

export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary = {
  args: {
    label: "Button",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};