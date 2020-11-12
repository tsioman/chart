import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { RangeSelector } from "./RangeSelector";

export default {
  title: "Example/RangeSelector",
  component: RangeSelector,
} as Meta;

const Template: Story = () => <RangeSelector />;

export const Primary = Template.bind({});
Primary.args = {};
