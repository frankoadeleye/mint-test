import React from "react";
import NavBar from "../navbar/navbar.component";
import { Sidebar } from "./../sidebar/sidebar.component";
import { LayoutBlock, ContentWrap } from "./layout.styles";

function Layout({ children }: any) {
  return (
    <LayoutBlock>
      <NavBar />
      <ContentWrap>
        <Sidebar />
        {children}
      </ContentWrap>
    </LayoutBlock>
  );
}

export default Layout;
