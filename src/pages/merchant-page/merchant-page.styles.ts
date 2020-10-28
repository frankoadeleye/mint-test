import styled from "styled-components";

export const MerchantPageBlock = styled.div`
  width: 100%;
  margin-top: 2rem;
  font-family: inherit;

  @media (min-width: 767px) {
    width: 80%;
  }
`;

export const TransactionCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
`;
