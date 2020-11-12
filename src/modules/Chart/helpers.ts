import { IChartView } from "@/components/ChartView";
import { GraphDataType } from "@/components/SVGPath/";
import { getMinMax, normalize } from "@/utils/";

export const dataToArea = (
  data: number[],
  area: IChartView,
  offset = 0
): GraphDataType => {
  if (data.length && area.width && area.height) {
    const xInterval = (area.width - offset) / data.length;
    const minMax = getMinMax(data);
    return [...data]
      .reverse()
      .map((val, i) => [
        xInterval * i++ + offset,
        normalize(val, minMax.min, minMax.max) * area.height,
      ]);
  }
  return [];
};
