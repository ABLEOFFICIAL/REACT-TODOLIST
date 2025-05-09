import React from "react";
import { FaTasks } from "react-icons/fa";

const AllTask = ({ onClick, allTask }) => {
  return (
    <div
      onClick={onClick}
      id="all-task"
      className={allTask ? "bg-white rounded-2xl px-2 py-5" : ""}
    >
      <FaTasks size={33} className="pr-3 inline" />
      <span>All tasks</span>
    </div>
  );
};

export default AllTask;
