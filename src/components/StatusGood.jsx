import React from "react";
import { GrStatusGood } from "react-icons/gr";

const StatusGood = ({ addNote }) => {
  return (
    <div
      onClick={() => {
        addNote();
      }}
      id="create-note"
      className="inline px-2.5 py-1 absolute top-2 right-2 cursor-pointer"
    >
      <GrStatusGood />
    </div>
  );
};

export default StatusGood;
