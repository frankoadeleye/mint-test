import styled, { css } from "styled-components";
import useColor from "./../../constants/color";
import fontSize from "./../../constants/font-size";

const tableCSS = css`
  display: flex;
  width: 100%;
  height: auto;
`;

export const PaymentTableBlock = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${fontSize.text};
`;

export const PaymentTableBlockHeaderBlock = styled.div`
  ${tableCSS};
  background-color: #eaeef0;
  color: ${useColor.lighterGrey};
  padding: 1rem 0rem;
  padding-left: 2%;
  margin-top: 0.5rem;

  div:first-child {
    width: 38%;
  }

  div:nth-child(2),
  div:nth-child(3),
  div:nth-child(4),
  div:last-child {
    width: 15%;
  }
`;

export const PaymentTableBlockElementBlock = styled.div`
  ${tableCSS};
  background-color: #ffff;
  color: ${useColor.lighterGrey};
  padding: 0.5rem 0rem;
  padding: 1.2rem 0rem;
  padding-left: 2%;

  div:first-child {
    width: 7%;
    display: flex;
    align-items: center;

    .initials-container {
      width: 2.4rem;
      height: 2.4rem;

      img {
        width: 100%;
      }
    }
  }

  div:nth-child(2) {
    width: 31%;
    display: flex;
    align-items: center;
    color: ${useColor.black};
  }

  div:nth-child(3),
  div:nth-child(4),
  div:nth-child(5),
  div:last-child {
    display: flex;
    align-items: center;
    width: 15%;
  }
`;
