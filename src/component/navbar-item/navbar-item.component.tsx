import React from "react";
import { NavbarItemContainer } from "./navbar-item.styles";

const NavbarItem = ({ itemData }: any) => {
  const { name, route } = itemData;
  return (
    <NavbarItemContainer
      to={route}
      exact={true}
      activeClassName="is-active"
      className="item">
      {name}
    </NavbarItemContainer>
  );
};

export default NavbarItem;
