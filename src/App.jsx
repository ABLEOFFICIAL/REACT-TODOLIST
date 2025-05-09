import React, { useEffect, useState } from "react";
import AppLogo from "./components/AppLogo";
import SearchInput from "./components/SearchInput";
import AddNote from "./components/AddNote";
import TodoListApp from "./components/TodoListApp";
import Modal from "./components/Modal";
import SideBar from "./components/SideBar";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [todoListContainer, setTodoListContainer] = React.useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showSideBar, setShowSideBar] = useState(false);
  const [allTask, setAllTask] = useState(true);
  const [completedTask, setCompletedTask] = useState(false);
  const [uncompletedTask, setUncompletedTask] = useState(false);

  return (
    <div
      onClick={(e) => {
        if (showSideBar) {
          setShowSideBar(false);
        }
      }}
      className="bg-[#f5f5f5] container p-5 w-screen relative min-h-screen"
    >
      <AppLogo />
      <SideBar
        allTask={allTask}
        completedTask={completedTask}
        uncompletedTask={uncompletedTask}
        setAllTask={setAllTask}
        setUncompletedTask={setUncompletedTask}
        setCompletedTask={setCompletedTask}
        setShowSideBar={setShowSideBar}
        showSideBar={showSideBar}
      />
      <SearchInput
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
        setTodoListContainer={setTodoListContainer}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <AddNote setShowModal={setShowModal} />
      <TodoListApp
        allTask={allTask}
        completedTask={completedTask}
        uncompletedTask={uncompletedTask}
        todoListContainer={todoListContainer}
        setTodoListContainer={setTodoListContainer}
      />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        setTodoListContainer={setTodoListContainer}
      />
    </div>
  );
};

export default App;
