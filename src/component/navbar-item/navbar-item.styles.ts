import styled from "styled-components";
import { NavLink } from "react-router-dom";
import useColor from "../../constants/color";

export const NavbarItemContainer = styled(NavLink)`
  font-family: "Nunito Sans", sans-serif;
  width: auto;
  height: auto;
  background-color: #fff;
  padding: 3px 0px;
  opacity: 1;
  text-transform: capitalize;
  font-family: inherit;
  letter-spacing: 0px;
  color: ${useColor.text};
  opacity: 1;
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: none !important;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 3px;
    background: ${useColor.logo};
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }

  @media (min-width: 1600px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1900px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1900px) {
    font-size: 1.7rem;
  }
`;
