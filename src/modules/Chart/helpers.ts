import { IChartView } from "@/components/ChartView";
import { GraphDataType } from "@/components/SVGPath/";
export const normalize = (value: number, min: number, max: number): number =>
  Math.abs((value - min) / (max - min));

export const getMinMax = (
  valuesArray: number[]
): Record<"min" | "max", number> => {
  const max = Math.max(...valuesArray);
  const min = Math.min(...valuesArray);
  return { min, max };
};

export const dataToArea = (
  data: number[],
  area: IChartView,
  offset = 0
): GraphDataType => {
  if (data.length && area.width && area.height) {
    const xInterval = (area.width - offset) / data.length;
    const minMax = getMinMax(data);
    return [...data].map((val, i) => [
      xInterval * i++ + offset,
      normalize(val, minMax.max, minMax.min) * area.height,
    ]);
  }
  return [];
};
