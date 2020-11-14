import React from "react";

export type LineType = [number, number];
export type GraphDataType = LineType[];

interface ISVGCoordinates {
  offset: { x: number; y: number };
  multiplier: number;
  data: GraphDataType;
}

export interface ISVGPath extends ISVGCoordinates {
  stroke: string;
}

const toSVGCoordinates = ({
  offset,
  multiplier = 1,
  data,
}: ISVGCoordinates): string => {
  const d = [`M ${offset.x * multiplier} ${offset.y * multiplier}`];
  const collection = data.map((section): string => {
    const xSection = section[0] * multiplier;
    const ySection = section[1] * multiplier;
    return `L ${xSection} ${ySection}`;
  });
  return d.concat(collection).join(" ");
};

export const SVGPath: React.FC<ISVGPath> = ({ stroke, ...props }) => (
  <path fill="none" stroke={stroke} d={toSVGCoordinates(props)}></path>
);
