type Items = { [key: string]: string };

interface Chart {
  columns: (string | number)[][];
  types: Items;
  names: Items;
  colors: Items;
}

interface LineChart {
  color: string;
  data: number[];
  label: string;
}
const chartType = "line";

export const getCharts = (data: Chart[]): LineChart[][] => {
  const ChartsArray: LineChart[][] = [];
  data.map((chart) => {
    const LinesCharts: LineChart[] = [];
    chart.columns.map((column) => {
      const type = column.splice(0, 1).toString();
      if (chart.types[type] === chartType) {
        const LineChart: LineChart = {
          color: chart.colors[type],
          label: chart.names[type],
          data: column,
        };
        LinesCharts.push(LineChart);
      }
    });
    ChartsArray.push(LinesCharts);
  });
  return ChartsArray;
};
