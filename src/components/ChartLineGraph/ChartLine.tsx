import React from "react";
import { SVGPath, GraphDataType } from "@/components/SVGPath/";
import { dataToArea } from "../../modules/Chart/helpers";
interface IGraphProps {
  data: GraphDataType;
  multiplier?: number;
}

export const ChartLine: React.FC = () => (
  <svg>
    <g
    // vectorEffect="non-scaling-stroke"
    // transform="translate(-1049.7664,0) scale(1.91,1)"
    >
      <SVGPath
        stroke="#3DC23F"
        fill="none"
        strokeWidth="2.2px"
        vectorEffect="non-scaling-stroke"
        strokeLinejoin="round"
        data={[
          [10, 30],
          [20, 50],
          [30, 20],
          [40, 160],
          [180, 50],
        ]}
        offset={{ x: 0, y: 0 }}
        multiplier={1}
        // transform="scale(1,0.65)"
        // style={{ opacity: "1" }}
      ></SVGPath>
    </g>
  </svg>
);
