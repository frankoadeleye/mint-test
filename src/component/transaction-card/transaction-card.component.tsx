import React from "react";
import { TransactionCardBlock } from "./transaction-card.styles";

export const TransactionCard = ({ details }: any) => {
  const { title, amount, image } = details;
  return (
    <TransactionCardBlock>
      <div className="text-container">
        <div className="title">{title}</div>
        <div className="amount">{amount}</div>
      </div>
      <div className="image">
        <img src={image} alt="" />
      </div>
    </TransactionCardBlock>
  );
};
