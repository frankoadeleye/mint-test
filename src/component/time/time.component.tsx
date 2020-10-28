import React from "react";
import { TimeBlock } from "./time.styles";
import moment from "moment";

export const Time = () => {
  return <TimeBlock>{moment().format("Do MMMM YYYY")}</TimeBlock>;
};
