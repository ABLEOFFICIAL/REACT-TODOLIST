import React from "react";
import { FaBars } from "react-icons/fa";

const menuBar = ({ onClick }) => {
  return (
    <FaBars
      onClick={onClick}
      className="absolute text-xl left-[7%] top-[36%] cursor-pointer"
    />
  );
};

export default menuBar;
