import React from "react";
import { SearchBarBlock, SearchBarContainer } from "./search-bar.styles";

export const SearchBar = ({ pholder, width }: any) => {
  return (
    <React.Fragment>
      <SearchBarContainer width={width}>
        <i className="fa fa-search"></i>
        <SearchBarBlock placeholder={pholder} />
      </SearchBarContainer>
    </React.Fragment>
  );
};
