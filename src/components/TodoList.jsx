import React from "react";
import Unchecked from "./Unchecked";
import Checked from "./Checked";
import DeleteBtn from "./DeleteBtn";

const TodoList = ({ todo, monthNames, date, setTodoListContainer }) => {
  function checkItem() {
    fetch(`http://localhost:2000/todos/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !todo.completed,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodoListContainer(data);
      });
  }
  function deleteList() {
    fetch(`http://localhost:2000/todos/${todo.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setTodoListContainer(data);
      });
  }
  return (
    <>
      {!todo.completed ? (
        <Unchecked checkItem={checkItem} />
      ) : (
        <Checked checkItem={checkItem} />
      )}
      <div className="w-[88%]">
        {todo.completed ? (
          <del>
            <h3 className="font-semibold text-sm">{todo.title}</h3>
            <p className="text-neutral-500 text-xs">{todo.content}</p>
            <span className="text-neutral-400 text-xs">
              {monthNames[date.getMonth()]}, {date.getDate()}
            </span>
          </del>
        ) : (
          <>
            <h3 className="font-semibold text-sm">{todo.title}</h3>

            <p className="text-neutral-500 text-xs">{todo.content}</p>
            <span className="text-neutral-400 text-xs">
              {monthNames[date.getMonth()]}, {date.getDate()}
            </span>
          </>
        )}
      </div>
      <DeleteBtn deleteList={deleteList} />
    </>
  );
};

export default TodoList;
