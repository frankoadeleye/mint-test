import styled from "styled-components";
import useColor from "../../constants/color";

export const ProgressBarBlock = styled.div`
  width: 100%;
  display: flex;
  background-color: ${useColor.progressBarColor};
  height: 0.25rem;
  border-radius: 2px;
  display: flex;
  align-items: center;

  .progress {
    width: 80%;
    background-color: ${useColor.progressColor};
    height: inherit;
    border-radius: 2px;
  }
`;
