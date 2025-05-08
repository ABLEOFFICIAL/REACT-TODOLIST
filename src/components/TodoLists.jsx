import React, { children } from "react";

const TodoLists = ({ children }) => {
  return (
    <div className="bg-[#fff] p-4 rounded-xl shadow-lg w-full h-1/6 mb-4 relative flex gap-14 justify-between items-center">
      {children}
    </div>
  );
};

export default TodoLists;
