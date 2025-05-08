import React from "react";
import { Months } from "./Months";

const Time = () => {
  const date = new Date();
  return (
    <div className="text-xs text-gray-500 font-light">
      {Months[date.getMonth()]} {date.getDate()} {date.getHours()}:
      {date.getMinutes()}
    </div>
  );
};

export default Time;
