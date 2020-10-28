import React from "react";
import { PaymentTableBlock } from "./payment-table.styles";
import { PaymentTableHeader } from "./payment-table.header.component";
import { PaymentTableElement } from "./payment-table.element.component";
import { PaymentTableData } from "./payment-table.data";

export const PaymentTable = () => {
  return (
    <PaymentTableBlock>
      <PaymentTableHeader />
      {PaymentTableData.map((data) => {
        return <PaymentTableElement key={data.key} details={data} />;
      })}
    </PaymentTableBlock>
  );
};
