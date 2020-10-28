import styled from "styled-components";
import useColor from "../../constants/color";
import fontSize from "./../../constants/font-size";

export const TransactionCardBlock = styled.div`
  width: auto;
  display: flex;
  background-color: #ffff;
  margin: 1.5rem 0rem;

  .text-container {
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: ${fontSize.text};
    color: ${useColor.text};
  }

  .amount {
    font-size: 22px;
    color: ${useColor.header};
  }

  .image {
    width: 4.5rem;
    height: 3rem;
  }
`;
