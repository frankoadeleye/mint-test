import styled from "styled-components";
import fontSize from "./../../constants/font-size";
import useColor from "./../../constants/color";

export const PaginationRowBlock = styled.div`
  width: 97%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  margin: 2rem 0rem;

  font-size: ${fontSize.text};
  color: ${useColor.text};

  .text {
    display: flex;
    align-items: center;
    color: #000000;

    span:first-child,
    span:nth-child(2),
    span:nth-child(4) {
      padding: 0rem 0.3rem;
    }
  }

  .paginate {
    display: flex;
  }

  button {
    padding: 0.4rem;
    border: 1px solid ${useColor.borderColor};
    background: #ffff;
  }

  .page {
    padding: 0.4rem 0.8rem;
    border: 1px solid ${useColor.borderColor};
  }

  .active {
    background-color: ${useColor.logo};
    color: #ffff;
  }
`;
