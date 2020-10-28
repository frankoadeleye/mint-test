import styled from "styled-components";

export const StatusButtonBlock = styled.button<{ dot_bg: any }>`
  border: 1px solid #cccfd4;
  box-sizing: border-box;
  border-radius: 30px;
  display: flex;
  outline-style: none;
  align-items: center;
  width: 12rem;
  padding: 0.8rem 0.4rem;
  font-family: inherit;

  .dot {
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.dot_bg || ""};
    margin: 0rem 0.7rem;
  }

  .status {
    color: ${(props) => props.dot_bg || ""} !important;
    text-transform: capitalize;
  }
`;
