import styled from "styled-components";
import useColor from "../../constants/color";
import fontSize from "./../../constants/font-size";

export const PaymentSectionContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const PaymentSectionBlock = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
`;

export const PaymentSectionHeaderBlock = styled.div`
  width: 90%;
  font-size: ${fontSize.header};
  color: ${useColor.header};
  display: flex;
  align-items: center
  margin-left: 4.4%;
`;

export const PaymentStatusBlock = styled.div`
  width: 20%;
`;

export const PaymentSectionNavBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  .show-text {
    margin-left: 15%;
    margin-right: 2%;
    font-size: ${fontSize.text};
  }

  .showing-number {
    display: flex;
    align-items: center;
    margin: 0rem 1rem;
  }

  .content,
  .showing-number {
    font-size: ${fontSize.text};
  }
`;
