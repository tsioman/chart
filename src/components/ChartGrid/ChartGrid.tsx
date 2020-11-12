import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { IChartView } from "@/components/ChartView";
import { ChartLabel } from "@/components/ChartLabel";

interface IGrid {
  area: IChartView;
  length?: number;
  labelsRange?: Record<"min" | "max", number>;
}

export const ChartGridContainer = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  margin: 0 18px;
`;

export const ChartGridLine = styled.div`
  opacity: 0;
  transition: opacity 0.3s, bottom 0.3s;
  position: absolute;
  height: 1px;
  width: 100%;
  background: rgba(176, 193, 204, 0.3);
`;

export const ChartGrid: React.FC<IGrid> = ({ area }) => {
  const LinesCharts: JSX.Element[][] = [];

  if (area.height) {
    const numOfChartLines = 5;
    const yStep = area.height / numOfChartLines;
    for (let step = 0; step <= area.height; step = step + yStep) {
      LinesCharts.push([
        <Fragment key={step}>
          <ChartGridLine style={{ bottom: step, opacity: 1 }} />
          <ChartLabel style={{ bottom: step, opacity: 1 }}>{step}</ChartLabel>
        </Fragment>,
      ]);
    }
  }

  return <ChartGridContainer>{LinesCharts}</ChartGridContainer>;
};
