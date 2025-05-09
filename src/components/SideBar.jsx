import React from "react";
import StatusX from "./statusX";
import AllTask from "./AllTask";
import Completed from "./Completed";
import Incomplete from "./Incomplete";
const SideBar = ({
  showSideBar,
  setShowSideBar,
  setCompletedTask,
  setUncompletedTask,
  setAllTask,
  allTask,
  completedTask,
  uncompletedTask,
}) => {
  function removeSideBar() {
    setShowSideBar(false);
  }
  function displayAllTask() {
    setAllTask(true);
    setCompletedTask(false);
    setUncompletedTask(false);
    setShowSideBar(false);
    console.log("all task");
  }
  function displayCompletedTask() {
    setCompletedTask(true);
    setAllTask(false);
    setUncompletedTask(false);
    setShowSideBar(false);
    console.log("completed task");
  }
  function displayIncompleteTask() {
    setUncompletedTask(true);
    setAllTask(false);
    setCompletedTask(false);
    setShowSideBar(false);
    console.log("incomplete task");
  }

  return (
    <aside
      onClick={(e) => {
        e.stopPropagation();
      }}
      id="side-bar"
      className={`min-h-screen w-5/6 absolute top-0 left-0 z-50 bg-[#e8e8e9] px-5 py-7 ${
        showSideBar ? "block" : "hidden"
      }`}
    >
      <div className="border-b-[1px] border-neutral-400 flex justify-between items-center w-full">
        <h1 className="text-2xl font-bold py-2">Todos</h1>
        <StatusX onClick={() => removeSideBar} />
      </div>

      <div className="flex flex-col gap-5 mt-5">
        <AllTask allTask={allTask} onClick={displayAllTask} />
        <Completed
          completedTask={completedTask}
          onClick={displayCompletedTask}
        />
        <Incomplete
          uncompletedTask={uncompletedTask}
          onClick={displayIncompleteTask}
        />
      </div>
    </aside>
  );
};

export default SideBar;
