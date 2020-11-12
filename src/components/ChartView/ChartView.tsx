import React from "react";
import styled from "@emotion/styled";

export interface IChartView {
  width?: number;
  height?: number;
}

export const ChartViewContainer = styled.div`
  height: 430px;
  max-height: 75vh;
  position: relative;
`;

export const ChartView: React.FC<IChartView> = ({ children }) => (
  <ChartViewContainer>{children}</ChartViewContainer>
);
