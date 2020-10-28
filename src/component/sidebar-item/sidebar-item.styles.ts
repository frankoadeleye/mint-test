import styled from "styled-components";
import { NavLink } from "react-router-dom";
import useColor from "../../constants/color";

export const SideBarItemIconContainer = styled(NavLink)`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  padding: 0.4rem;
  padding-left: 1.5rem;
  text-decoration: none;
  color: #7d7d7d;
  border-left: 4px solid #ffff;

  &:hover {
    background-color: #f1efef;
  }

  .icon__container {
    width: 1.4rem;
    height: 1.4rem;
    display: flex;
    align-items: center;
  }

  .link {
    font-size: 10px;
    font-family: inherit;
    width: auto;
    position: relative;
    display: block;
    width: auto;
  }

  @media (min-width: 1100px) {
    .icon__container {
      width: 1.8rem;
      height: 1.8rem;
    }

    .link {
      font-size: 12px;
    }
  }
`;

export const SidebarItemHeaderBlock = styled.div`
  font-size: 10px;
  font-family: inherit;
  width: auto;
  position: relative;
  display: block;
  width: auto;
  margin: 1.5rem;
  color: ${useColor.text};

  @media (min-width: 1100px) {
    font-size: 15px;
  }
`;
