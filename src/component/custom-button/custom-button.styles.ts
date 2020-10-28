import styled from "styled-components";
import useColor from "../../constants/color";
import fontSize from "./../../constants/font-size";

export const CustomButtonBlock = styled.button`
  border-radius: 20px;
  background-color: ${useColor.progressColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 0rem;
  width: 12rem;
  border: 1px solid ${useColor.progressColor};
  text-transform: uppercase;
  font-weight: bold;
  color: #ffff;
  font-size: ${fontSize.text};
  margin-left: 1.5rem;
`;
