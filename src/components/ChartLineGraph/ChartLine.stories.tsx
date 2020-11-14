import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ChartLine } from "./ChartLine";
import { data } from "@/data";
import { getCharts } from "@/modules/Loader/loader";
import { ChartView, IChartView } from "@/components/ChartView";
import { dataToArea } from "@/modules/Chart/helpers";

const area: IChartView = { width: 800, height: 154 };
const chartsArray = getCharts(data);

export default {
  title: "Example/ChartLine",
  component: ChartLine,
} as Meta;

const Template: Story = () => (
  <>
    {chartsArray.map((charts, index) => (
      <ChartView key={index} area={area}>
        <svg width={area.width} height={area.height}>
          {charts.map((chart, index) => (
            <ChartLine
              key={index}
              stroke={chart.color}
              data={dataToArea(chart.data, area)}
            />
          ))}
        </svg>
      </ChartView>
    ))}
  </>
);
export const Primary = Template.bind({});
Primary.args = {};
