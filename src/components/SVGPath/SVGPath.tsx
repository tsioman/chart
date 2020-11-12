import React from "react";

export type LineType = [number, number];
export type GraphDataType = LineType[];

export interface ISVGPath extends SVGPathElement {
  offset: { x: number; y: number };
  multiplier: number;
  data: GraphDataType;
}

const toSVGCoordinates = ({
  offset,
  multiplier = 1,
  data,
}: ISVGPath): string => {
  const d = [`M ${offset.x * multiplier} ${offset.y * multiplier}`];
  const collection = data.map((section): string => {
    const xSection = section[0] * multiplier;
    const ySection = section[1] * multiplier;
    return `L ${xSection} ${ySection}`;
  });
  return d.concat(collection).join(" ");
};

export const SVGPath: React.FC<ISVGPath> = ({ ...props }) => (
  <path d={toSVGCoordinates(props)}></path>
);
