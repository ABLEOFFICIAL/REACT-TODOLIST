import React from "react";
import { MdDoneAll } from "react-icons/md";

const Completed = ({ onClick, completedTask }) => {
  return (
    <div
      onClick={onClick}
      id="completed"
      className={completedTask ? "bg-white rounded-2xl px-2 py-5" : ""}
    >
      <MdDoneAll size={35} className="pr-3 inline" />
      <span>Completed</span>
    </div>
  );
};

export default Completed;
