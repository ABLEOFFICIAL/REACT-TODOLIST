import React from "react";
import { MdOutlineEventNote } from "react-icons/md";

const Incomplete = ({ onClick, uncompletedTask }) => {
  return (
    <div
      onClick={onClick}
      id="incomplete"
      className={uncompletedTask ? "bg-white rounded-2xl px-2 py-5" : ""}
    >
      <MdOutlineEventNote size={35} className="pr-3 inline" />
      <span>Incomplete</span>
    </div>
  );
};

export default Incomplete;
