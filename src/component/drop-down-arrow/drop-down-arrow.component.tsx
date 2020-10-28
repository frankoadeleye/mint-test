import React from "react";
import { DropDownArrowBlock } from "./drop-down-arrow.styles";

export const DropDownArrow = ({ img }: any) => {
  return (
    <DropDownArrowBlock>
      <img src={img} alt="" />
    </DropDownArrowBlock>
  );
};
