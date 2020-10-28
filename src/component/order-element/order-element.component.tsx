import React from "react";
import { ProgressBar } from "./../progress-bar/progress-bar.component";
import { OrderElementBlock } from "./order-element.styles";

export const OrderElement = ({ details }: any) => {
  const {
    heading,
    elementOne,
    valueOne,
    elementTwo,
    valueTwo,
    elementThree,
    valueThree,
  } = details;
  return (
    <OrderElementBlock>
      <div className="text-content">{heading}</div>
      <ProgressBar />
      <div className="element">
        <span>{`${elementOne}: `}</span>
        <span className="value1">{valueOne}</span>
      </div>
      <div className="element">
        <span>{`${elementTwo}: `}</span>
        <span className="value2">{valueTwo}</span>
      </div>
      <div className="element">
        <span>{`${elementThree}: `}</span>
        <span className="value3">{valueThree}</span>
      </div>
    </OrderElementBlock>
  );
};
