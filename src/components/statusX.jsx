import React from "react";
import { TbXboxX } from "react-icons/tb";

const statusX = ({ onClick }) => {
  return (
    <>
      <TbXboxX onClick={onClick()} className="text-lg" />
    </>
  );
};

export default statusX;
