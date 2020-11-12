import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ChartAxis } from "./ChartAxis";
export default {
  title: "Example/ChartAxis",
  component: ChartAxis,
} as Meta;

const Template: Story = () => (
  <ChartAxis
    area={{ width: 600 }}
    labels={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 16, 17]}
  />
);
export const Primary = Template.bind({});
Primary.args = {};
