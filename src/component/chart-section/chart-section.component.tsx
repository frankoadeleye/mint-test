import React from "react";
import { ChartSectionBlock } from "./chart-section.styles";
import { ChartNavigation } from "./../chart-navigation/chart-navigation.component";
import { OrdersAndPayment } from "./../orders-and-payment/orders-and-payment.component";

export const ChartSection = () => {
  return (
    <ChartSectionBlock>
      <ChartNavigation />
      <OrdersAndPayment />
    </ChartSectionBlock>
  );
};
