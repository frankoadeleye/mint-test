import React from "react";
import {
  ChartDateNavigationBlock,
  ChartMonthNavigationBlock,
  FakeChartBlock,
  ChartNavContainer,
} from "./chart.-navigation.styles";
import { Time } from "./../time/time.component";
import { Svg } from "./../../assets/svg";
import { Months } from "./chart-navigation.data";
import { DropDownArrow } from "./../drop-down-arrow/drop-down-arrow.component";
const { leftButton, RightButton, fakeChart, dropDownArrow } = Svg;

export const ChartNavigation = () => {
  return (
    <React.Fragment>
      <ChartNavContainer>
        <ChartDateNavigationBlock>
          <div className="time-container">
            Today: <Time />
          </div>
          <button>
            <span>1 Jan - 1 Jun</span>
            <DropDownArrow img={dropDownArrow} />
          </button>
          <div className="button-container">
            <div className="left-button">
              <img src={leftButton} alt="" />
            </div>
            <div className="right-button">
              <img src={RightButton} alt="" />
            </div>
          </div>
        </ChartDateNavigationBlock>
        <ChartMonthNavigationBlock>
          {Months.map((month, index) => {
            return <div key={index}>{month}</div>;
          })}
        </ChartMonthNavigationBlock>
        <FakeChartBlock>
          <img src={fakeChart} alt="" />
        </FakeChartBlock>
      </ChartNavContainer>
    </React.Fragment>
  );
};
