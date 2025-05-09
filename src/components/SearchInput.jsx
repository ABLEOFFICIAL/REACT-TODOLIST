import React from "react";
import MenuBar from "./menuBar";
import MainInput from "./MainInput";

const SearchInput = ({
  searchValue,
  setSearchValue,
  setTodoListContainer,
  setShowSideBar,
}) => {
  function filterNotes(e) {
    const value = e.target.value;
    setSearchValue(value);
    fetch("http://localhost:2000/todos")
      .then((res) => res.json())
      .then((data) => {
        let filteredData = data.filter((data) =>
          data.title.toLowerCase().includes(value.toLowerCase())
        );
        console.log(filteredData);
        setTodoListContainer(filteredData);
      });
  }
  return (
    <div className="relative w-[100%] mx-auto my-3">
      <MenuBar
        onClick={(e) => {
          e.stopPropagation();
          setShowSideBar(true);
        }}
      />
      <MainInput
        type="text"
        name="search"
        id="search"
        placeholder="Search notes..."
        className="bg-[#e8e8e9] pl-13 w-full pr-2 py-4 rounded-full text-md focus:outline-0"
        value={searchValue}
        onChange={(e) => {
          filterNotes(e);
        }}
      />
    </div>
  );
};

export default SearchInput;
