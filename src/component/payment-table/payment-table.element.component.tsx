import React from "react";
import { StatusButton } from "../status-button/status-button.component";
import { PaymentTableBlockElementBlock } from "./payment-table.styles";

export const PaymentTableElement = ({ details }: any) => {
  const { img, type, price, num, time, dot_bg, status } = details;
  return (
    <PaymentTableBlockElementBlock>
      <div>
        <div className="initials-container">
          <img alt="" src={img} />
        </div>
      </div>
      <div>{type}</div>
      <div>{price}</div>
      <div>{num}</div>
      <div>{time}</div>
      <div>
        <StatusButton dot_bg={dot_bg} status={status} />
      </div>
    </PaymentTableBlockElementBlock>
  );
};
