import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ChartView } from "./ChartView";

export default {
  title: "Example/ChartView",
  component: ChartView,
} as Meta;

const Template: Story = () => <ChartView />;

export const Primary = Template.bind({});
Primary.args = {};
