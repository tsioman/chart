import React from "react";
import { SVGPath, GraphDataType } from "@/components/SVGPath/";

interface IGraphProps {
  data: GraphDataType;
  multiplier?: number;
  stroke: string;
}

export const ChartLine: React.FC<IGraphProps> = ({ data, stroke }) => (
  <g
    vectorEffect="non-scaling-stroke"
    // transform="translate(-1049.7664,0) scale(1.91,1)"
  >
    <SVGPath
      stroke={stroke}
      data={data}
      offset={{ x: data[0][0], y: data[0][1] }}
      multiplier={1}
      // transform={"scale(1,0.65)"}
      // style={{ opacity: "1" }}
    />
  </g>
);
