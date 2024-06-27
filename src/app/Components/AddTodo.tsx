"use client";
import React, { useState } from "react";
import { useTodos } from "../store/todo";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { handleTodo } = useTodos();

  const handleSubmit = (e: FormDataEvent): void => {
    e.preventDefault();
    handleTodo(todo);
    setTodo("");
  };

  return (
    <form
      onSubmit={(e: any) => handleSubmit(e)}
    >
      <input
        type="text"
        name=""
        id=""
        placeholder="write your todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default AddTodo;
