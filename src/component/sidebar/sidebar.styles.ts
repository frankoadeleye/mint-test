import styled from "styled-components";
import useColor from "../../constants/color";

export const SidebarBlock = styled.div`
  height: 89vh;
  width: 80px;
  transition: width 0.3s;
  overflow-y: scroll;
  display: none;
  flex-direction: column;
  overflow-x: auto;
  overflow-y: scroll;
  background-color: #ffffff;
  margin-top: 2rem;

  .is-active {
    background-color: #f1efef;
    color: ${useColor.text};
    border-left: 4px solid #4081de;
  }

  .is-active .icon__container svg {
    fill: #4081de;
  }
  &::-webkit-scrollbar {
    width: 7px;
    cursor: pointer;
    height: 0px;
  }

  &::-webkit-scrollbar-track {
    background: inherit;
  }

  &::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #4081de;
  }

  @media (min-width: 767px) {
    width: 200px;
    display: flex;
  }

  @media (min-width: 1100px) {
    width: 280px;
    display: flex;
  }
`;

export const SidebarItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 70vh;
`;
