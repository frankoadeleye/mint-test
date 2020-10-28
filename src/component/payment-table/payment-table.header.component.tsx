import React from "react";
import { PaymentTableBlockHeaderBlock } from "./payment-table.styles";

export const PaymentTableHeader = () => {
  return (
    <PaymentTableBlockHeaderBlock>
      <div>Item Type</div>
      <div>Price</div>
      <div>Transaction No</div>
      <div>Time</div>
      <div>Status</div>
    </PaymentTableBlockHeaderBlock>
  );
};
