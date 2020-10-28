import React from "react";
import { StatusButtonBlock } from "./status-button.styles";

export const StatusButton = ({ status, dot_bg }: any) => {
  return (
    <StatusButtonBlock dot_bg={dot_bg}>
      <div className="dot"></div>
      <div className="status">{status}</div>
    </StatusButtonBlock>
  );
};
