import React from "react";
import { NavbarItemsContainer } from "./navbar-items.styles";
import NavbarItem from "./../navbar-item/navbar-item.component";
import itemsDetails from "./navbar-items.data";
import { NotificationIcon } from "./../notification-icon/notification-icon.component";
import {
  UserAvatar,
  UserAvatarData,
} from "./../user-avatar/user-avatar.component";

export const NavbarItems = () => {
  return (
    <NavbarItemsContainer>
      {itemsDetails.map((itemdetail, index) => {
        return <NavbarItem key={index} itemData={itemdetail} />;
      })}
      <NotificationIcon />
      <UserAvatar details={UserAvatarData} />
    </NavbarItemsContainer>
  );
};
