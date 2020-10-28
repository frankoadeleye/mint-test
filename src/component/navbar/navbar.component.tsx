import React from "react";
import { NavBarContainer } from "./navbar.styles";
import { Logo } from "../logo/logo.component";
import { NavbarItems } from "./../navbar-items/navbar-items.component";
import { SearchBar } from "../search-bar/search-bar.component";

const NavBar = () => {
  return (
    <NavBarContainer>
      <Logo />
      <SearchBar pholder="Search" width="30%" />
      <NavbarItems />
    </NavBarContainer>
  );
};

export default NavBar;
