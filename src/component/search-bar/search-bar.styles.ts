import styled from "styled-components";
import useColor from "../../constants/color";

export const SearchBarBlock = styled.input`
  border: none;
  border-bottom: 1px solid ${useColor.text};
  width: 100%;
  height: 2rem;
  padding-left: 2rem;
  outline-style: none;
`;

export const SearchBarContainer = styled.div<{ width: any }>`
  display: flex;
  width: auto;
  align-items: center;
  width: ${(props) => props.width || ""};

  .fa-search {
    position: relative;
    left: 1.5rem;
    color: ${useColor.text};
  }
`;
