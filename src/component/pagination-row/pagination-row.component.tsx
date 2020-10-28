import React from "react";
import { PaginationRowBlock } from "./pagination-row.styles";

export const PaginationRow = ({
  showingStartNum,
  showingEndNum,
  totalNum,
}: any) => {
  return (
    <PaginationRowBlock>
      <div className="text">
        Showing
        <span>{showingStartNum}</span>
        <span>to</span>
        <span>{showingEndNum}</span>
        <span>of</span>
        <span>{totalNum} entries</span>
      </div>
      <div className="paginate">
        <button className="button">Previous</button>
        <span className="page active">1</span>
        <span className="page">2</span>
        <button className="button">Next</button>
      </div>
    </PaginationRowBlock>
  );
};
