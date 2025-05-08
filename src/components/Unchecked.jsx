import React from "react";

const Unchecked = ({ checkItem }) => {
  return (
    <span
      onClick={() => {
        checkItem();
      }}
      id="check"
      className="w-[9%] h-5 border-2 border-gray-400 rounded-md cursor-pointer check-list"
    ></span>
  );
};

export default Unchecked;
