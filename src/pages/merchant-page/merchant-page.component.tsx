import React from "react";
import { TransactionCard } from "../../component/transaction-card/transaction-card.component";
import {
  MerchantPageBlock,
  TransactionCardContainer,
} from "./merchant-page.styles";
import { TransactionCardData } from "./../../component/transaction-card/transaction-card.data";
import { ChartSection } from "../../component/chart-section/chart-section.component";
import { PaymentSection } from "../../component/payment-section/payment-section.component";
import { PaginationRow } from "../../component/pagination-row/pagination-row.component";

export const MerchantPage = () => {
  return (
    <MerchantPageBlock>
      <TransactionCardContainer>
        {TransactionCardData.map((data) => {
          return <TransactionCard key={data.key} details={data} />;
        })}
      </TransactionCardContainer>
      <ChartSection />
      <PaymentSection />
      <PaginationRow showingStartNum="1" showingEndNum="10" totalNum="50" />
    </MerchantPageBlock>
  );
};
