"use client";
import React from "react";
import { useTodos } from "../store/todo";
import { Todo } from "../store/todo";
import { useSearchParams } from "next/navigation";

const AllTodos = () => {
  const { todos, toggle, handleDelete } = useTodos();
  const searchParams = useSearchParams();
  const filter = searchParams.get("todo");
  let filteredTodos = todos;

  console.log(
    filteredTodos,
    "*************************************************"
  );

  if (filter == "active") {
    filteredTodos = filteredTodos.filter((item: Todo) => !item.completed);
  }

  if (filter == "completed") {
    filteredTodos = filteredTodos.filter((item: Todo) => item.completed);
  }

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
