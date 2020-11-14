import React from "react";
import { ChartLine } from "@/components/ChartLineGraph";
import { data } from "@/data";
import { getCharts } from "@/modules/Loader/loader";

const area: IChartView = { width: 800, height: 154 };
const chartsArray = getCharts(data);
export const Chart = () => null;
