import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ChartGrid } from "./ChartGrid";
import { ChartView } from "@/components/ChartView";
export default {
  title: "Example/ChartGrid",
  component: ChartGrid,
} as Meta;

const Template: Story = () => (
  <ChartView>
    <ChartGrid area={{ height: 400 }} />
  </ChartView>
);
export const Primary = Template.bind({});
Primary.args = {};
