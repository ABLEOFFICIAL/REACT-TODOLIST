import React from "react";
import { useEffect } from "react";
import TodoLists from "./TodoLists";
import TodoList from "./TodoList";
import { Months } from "./Months";

const TodoListApp = ({ todoListContainer, setTodoListContainer }) => {
  const date = new Date();
  useEffect(() => {
    fetch("http://localhost:2000/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodoListContainer(data);
      });
  }, []);
  return (
    <>
      {todoListContainer.map((todo) => (
        <TodoLists key={todo.id}>
          <TodoList
            setTodoListContainer={setTodoListContainer}
            todo={todo}
            monthNames={Months}
            date={date}
          />
        </TodoLists>
      ))}
    </>
  );
};

export default TodoListApp;
