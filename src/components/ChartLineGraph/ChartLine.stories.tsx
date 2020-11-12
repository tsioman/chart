import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ChartLine } from "./ChartLine";

export default {
  title: "Example/ChartLine",
  component: ChartLine,
} as Meta;

const Template: Story = () => <ChartLine />;

export const Primary = Template.bind({});
Primary.args = {};
