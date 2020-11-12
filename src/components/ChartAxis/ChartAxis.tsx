import React from "react";
import styled from "@emotion/styled";
import { IChartView } from "@/components/ChartView";
import { ChartLabel } from "@/components/ChartLabel";

export interface IChartAxis {
  labels: number[] | string[];
  area: IChartView;
}

export const ChartAxisX = styled.div`
  color: #96a2aa;
  font-size: 12px;
  position: relative;
  overflow: hidden;
  height: 35px;
  margin: 0 -18px;
`;

export const ChartAxis: React.FC<IChartAxis> = ({ labels, area }) => {
  const Lables: JSX.Element[] = [];
  if (area.width && labels) {
    let labelIndex = 0;
    const labelWidth = 100;
    const stepWidth = area.width / labelWidth;
    const labelStep = Math.ceil(labels.length / stepWidth);

    for (let step = 0; step <= area.width; step = step + labelWidth) {
      Lables.push(
        <ChartLabel
          key={step}
          style={{ left: step, opacity: 1, top: 5, width: labelWidth }}
        >
          {labels[labelIndex]}
        </ChartLabel>
      );
      labelIndex += labelStep;
    }
  }
  return <ChartAxisX>{Lables}</ChartAxisX>;
};
