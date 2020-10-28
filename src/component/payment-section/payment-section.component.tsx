import React from "react";
import {
  PaymentSectionBlock,
  PaymentSectionContainer,
} from "./payment-section.styles";
import { PaymentSectionHeader } from "./payment-section.header.component";
import { PaymentSectionNav } from "./payment-section.nav.component";
import { PaymentTable } from "../payment-table/payment-table.component";

export const PaymentSection = () => {
  return (
    <PaymentSectionContainer>
      <PaymentSectionBlock>
        <PaymentSectionHeader text="Payments" />
        <PaymentSectionNav showingNum="20" totalNum="50" />
        <PaymentTable />
      </PaymentSectionBlock>
    </PaymentSectionContainer>
  );
};
