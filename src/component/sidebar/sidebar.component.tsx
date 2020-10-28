import React from "react";
import { SidebarBlock } from "./sidebar.styles";
import {
  SideBarItem,
  SidebarItemHeader,
} from "./../sidebar-item/sidebar-item.component";
import { SideBarPaymentData, SideBarOrdersData } from "./sidebar.data";
import { CustomButton } from "./../custom-button/custom-button.component";

export const Sidebar = () => {
  /* ________________________________________________________________________________ */
  return (
    <SidebarBlock>
      <CustomButton text="Generate invoice" />
      <SidebarItemHeader text="Main" />
      {SideBarPaymentData.map((item, index) => {
        return <SideBarItem key={index} itemData={item} />;
      })}
      <br />
      <SidebarItemHeader text="Payment" />
      {SideBarOrdersData.map((item, index) => {
        return <SideBarItem key={index} itemData={item} />;
      })}
    </SidebarBlock>
  );
};
