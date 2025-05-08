import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddNote = ({ setShowModal }) => {
  return (
    <div
      onClick={() => {
        setShowModal(true);
      }}
      className="bg-[#e8e8e9] p-4 rounded-xl shadow-lg fixed bottom-10 right-10 cursor-pointer z-40"
    >
      <FaPlus className="mr-2 inline" />
      <span>Add note</span>
    </div>
  );
};

export default AddNote;
