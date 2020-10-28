import React from "react";
import { PaymentSectionNavBlock } from "./payment-section.styles";
import { DropDownArrow } from "./../drop-down-arrow/drop-down-arrow.component";
import { Svg } from "./../../assets/svg";
import { SearchBar } from "../search-bar/search-bar.component";
import { CustomSelect } from "../custom-select/custom-select.component";
const { blueDropDownArrow } = Svg;

export const PaymentSectionNav = ({ showingNum, totalNum }: any) => {
  return (
    <PaymentSectionNavBlock>
      <div>Showing</div>
      <div className="showing-number">
        {showingNum} <DropDownArrow img={blueDropDownArrow} />
      </div>
      <div className="content">out of {totalNum} Payments</div>
      <SearchBar pholder="Search Payments" width="35%" />
      <div className="show-text">Show:</div>
      <CustomSelect />
    </PaymentSectionNavBlock>
  );
};
