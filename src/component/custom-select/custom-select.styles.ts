import styled from "styled-components";
import useColor from "./../../constants/color";

export const CustomSelectBlock = styled.select`
  width: 15%;
  border: 1px solid ${useColor.borderColor};
  height: 2.5rem;
  outline-style: none;
`;
