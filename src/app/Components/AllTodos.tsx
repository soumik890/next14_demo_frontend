"use client";
import React from "react";
import { useTodos } from "../store/todo";
import { Todo } from "../store/todo";

const AllTodos = () => {
  const { todos, toggle, handleDelete } = useTodos();
  console.log(todos, "******");

  let filteredTodos = todos;

  return (
    <ul>
      {filteredTodos.map((todo: Todo) => {
        return (
          <li key={todo?.id}>
            <input
              type="checkbox"
              id={todo?.id}
              checked={todo?.completed}
              onChange={() => toggle(todo?.id)}
            />
            <label htmlFor={todo?.id}>{todo?.task}</label>

            {todo?.completed && (
              <button onClick={() => handleDelete(todo?.id)}>Delete</button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default AllTodos;
