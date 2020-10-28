import React from "react";
import { CustomSelectBlock } from "./custom-select.styles";

export const CustomSelect = () => {
  return (
    <CustomSelectBlock>
      <option>All</option>
      <option>Reconcilled</option>
      <option>Un-reconcilled</option>
      <option>Settled</option>
      <option>Unsettled</option>
    </CustomSelectBlock>
  );
};
