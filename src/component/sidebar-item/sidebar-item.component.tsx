import React from "react";
import {
  SideBarItemIconContainer,
  SidebarItemHeaderBlock,
} from "./sidebar-item.styles";

export const SideBarItem = ({ itemData }: any) => {
  const { icon, name, route } = itemData;
  return (
    <SideBarItemIconContainer
      to={route}
      exact={true}
      activeClassName="is-active">
      <div className="icon__container">
        <img src={icon} alt="" />
      </div>
      <div className="link">{name}</div>
    </SideBarItemIconContainer>
  );
};

export const SidebarItemHeader = ({ text }: any) => {
  return <SidebarItemHeaderBlock>{text}</SidebarItemHeaderBlock>;
};
