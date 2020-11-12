import styled from "@emotion/styled";
import React, { useState } from "react";

const TogglerContainer = styled.button`
  display: flex;
  align-items: center;
  border-width: 2px;
  border-style: solid;
  padding: 7px 20px;
  border-radius: 18px;
  cursor: pointer;
  position: relative;
  transition: all 200ms linear;
  white-space: nowrap;
  outline: none;
  font-size: 14px;

  ${({ isCheck }: TogglerState) =>
    isCheck
      ? ` padding-left: 30px;
    padding-right: 10px;`
      : `background-color: transparent !important;`}
`;

const TogglerElement = styled.span`
  position: absolute;
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
  display: block;
  transform: rotate(-44deg);
  transition: border-color 200ms linear;
  width: 10px;
  height: 4px;
  left: 10px;
  top: 11px;
`;

type TogglerState = {
  isCheck: boolean;
};

type TogglerProps = {
  color?: string;
  label: string;
} & TogglerState;

export const Toggler: React.FC<TogglerProps> = ({ color, isCheck, label }) => {
  const [isCheckState, setCheck] = useState<boolean>(isCheck);

  return (
    <>
      <TogglerContainer
        onClick={() => setCheck(!isCheckState)}
        isCheck={isCheckState}
        style={{
          borderColor: color,
          backgroundColor: color,
        }}
      >
        {isCheckState && <TogglerElement />}
        <span style={{ color: isCheckState ? "white" : color }}>{label}</span>
      </TogglerContainer>
    </>
  );
};
