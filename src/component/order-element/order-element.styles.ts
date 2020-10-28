import styled from "styled-components";
import useColor from "../../constants/color";

export const OrderElementBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  .text-content {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .element {
    display: flex;
    margin: 0.4rem 0rem;
    align-items: center;

    span:last-child {
      font-weight: bold;
      margin-left: 0.3rem;
    }
  }

  .value1 {
    color: ${useColor.progressBarColor};
  }

  .value2 {
    color: ${useColor.progressColor};
  }

  .value3 {
    color: ${useColor.logo};
  }
`;
