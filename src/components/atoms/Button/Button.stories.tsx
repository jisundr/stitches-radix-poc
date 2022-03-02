import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button, { ButtonSizes } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    size: {
      description: `\`${ButtonSizes.small}\` | \`${ButtonSizes.large}\` | \`undefined\``,
      control: false,
    },
    children: {
      control: false,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  children: "Button",
};

export const Sizes = Template.bind({});
Sizes.storyName = "Button Sizes";
Sizes.args = {};
Sizes.decorators = [
  () => {
    return (
      <>
        <Button size="large">Button</Button>
        &nbsp;
        <Button>Button</Button>
        &nbsp;
        <Button size="small">Button</Button>
      </>
    );
  },
];
