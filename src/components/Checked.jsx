import React from "react";
import { CiSquareCheck } from "react-icons/ci";

const Checked = ({ checkItem }) => {
  return (
    <span
      onClick={() => {
        checkItem();
      }}
    >
      <CiSquareCheck size={35} className="text-xs p-1" />
    </span>
  );
};

export default Checked;
