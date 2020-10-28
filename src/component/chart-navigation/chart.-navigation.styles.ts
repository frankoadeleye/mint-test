import styled from "styled-components";
import useColor from "../../constants/color";
import fontSize from "./../../constants/font-size";

export const ChartDateNavigationBlock = styled.div`
  display: flex;
  width: 90%;

  justify-content: space-between;
  height: auto;
  align-items: center;
  margin-left: 4.4%;

  .time-container {
    display: flex;
    align-items: center;
    font-weight: bold;

    div {
      margin: 0rem 1rem;
    }
  }

  button {
    width: auto;
    border: 1px solid #dde0e3;
    border-radius: 4.25px;
    outline-style: none;
    background-color: #ffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
    padding-right: 1rem;

    span:first-child {
      color: ${useColor.lighterGrey};
      margin-right: 1rem;
    }
  }

  .button-container {
    display: flex;
    justify-content: space-between;
    height: auto;

    .left-button,
    .right-button {
      width: 2rem;
      height: 2rem;
      display: flex;
      justify-content: center;
      cursor: pointer;
    }

    .left-button {
      margin-right: 1rem;
      margin-left: 0.2rem;
    }

    .right-button {
      margin-right: 0.2rem;
    }
  }
`;

export const ChartMonthNavigationBlock = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  padding: 0.3rem 0rem;
  justify-content: space-between;
  margin: 1rem 0rem;
  margin-left: 4.4%;

  div {
    color: ${useColor.header};
    font-size: ${fontSize.text};
    font-weight: bold;
  }
`;

export const FakeChartBlock = styled.div`
  width: 98%;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    position: relative;
    width: 100%;
  }
`;

export const ChartNavContainer = styled.div`
  width: 70%;
`;
