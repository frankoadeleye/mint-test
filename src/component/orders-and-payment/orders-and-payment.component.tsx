import React from "react";
import { OrderElement } from "../order-element/order-element.component";
import { OrdersAndPaymentBlock } from "./orders-and-payment.styles";
import { OrderAndElementData } from "./orders-and-payment.data";

export const OrdersAndPayment = () => {
  return (
    <OrdersAndPaymentBlock>
      {OrderAndElementData.map((element) => {
        return <OrderElement key={element.key} details={element} />;
      })}
    </OrdersAndPaymentBlock>
  );
};
