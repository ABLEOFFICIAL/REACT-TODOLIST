import React from "react";
import { useEffect } from "react";
import TodoLists from "./TodoLists";
import TodoList from "./TodoList";
import { Months } from "./Months";

const TodoListApp = ({
  todoListContainer,
  setTodoListContainer,
  allTask,
  completedTask,
  uncompletedTask,
}) => {
  const date = new Date();
  useEffect(() => {
    fetch("http://localhost:2000/todos")
      .then((res) => res.json())
      .then((data) => {
        const completedData = data.filter((todo) => todo.completed === true);
        const uncompletedData = data.filter((todo) => todo.completed === false);
        if (allTask) {
          setTodoListContainer(data);
        } else if (completedTask) {
          setTodoListContainer(completedData);
        } else if (uncompletedTask) {
          setTodoListContainer(uncompletedData);
        }
      });
  }, [allTask, completedTask, uncompletedTask]);
  // console.log(allTask, completedTask, uncompletedTask);

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
