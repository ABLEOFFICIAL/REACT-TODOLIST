import React from "react";
import { IoTrashBinOutline } from "react-icons/io5";

const DeleteBtn = ({ deleteList }) => {
  return (
    <span
      onClick={() => {
        deleteList();
      }}
      className="cursor-pointer"
    >
      <IoTrashBinOutline />
    </span>
  );
};

export default DeleteBtn;
