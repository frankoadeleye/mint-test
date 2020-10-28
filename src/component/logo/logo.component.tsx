import React from "react";
import { LogoContainer } from "./logo.styles";
import { Link } from "react-router-dom";
import { Svg } from "./../../assets/svg";

const { logo } = Svg;

export const Logo = () => {
  return (
    <Link to="/">
      <LogoContainer>
        <img src={logo} alt="" />
      </LogoContainer>
    </Link>
  );
};
