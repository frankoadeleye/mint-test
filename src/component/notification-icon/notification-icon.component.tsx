import React from "react";
import { NotificationBlock } from "./notification-icon.styles";
import { Svg } from "./../../assets/svg";
import { StyledLink } from "./../styled-link/styled-link.component";

const { notification } = Svg;

export const NotificationIcon = () => {
  return (
    <StyledLink to="/notification">
      <NotificationBlock>
        <img alt="" src={notification} />
      </NotificationBlock>
    </StyledLink>
  );
};
