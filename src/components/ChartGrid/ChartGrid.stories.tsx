import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ChartGrid } from "./ChartGrid";
import { ChartView, IChartView } from "@/components/ChartView";

const area: IChartView = { width: 800, height: 154 };

export default {
  title: "Example/ChartGrid",
  component: ChartGrid,
} as Meta;

const Template: Story = () => (
  <ChartView area={area}>
    <ChartGrid area={{ height: 400 }} />
  </ChartView>
);
export const Primary = Template.bind({});
Primary.args = {};
