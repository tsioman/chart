import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Toggler } from "./Toggler";

export default {
  title: "Example/Toggler",
  component: Toggler,
} as Meta;

const Template: Story = () => (
  <Toggler color={"rgb(75, 217, 100)"} isCheck={false} label="Hello" />
);

export const Primary = Template.bind({});
Primary.args = {};
