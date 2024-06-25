"use client";
import React, { useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e: FormDataEvent): void => {
    e.preventDefault();
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "10%",
      }}
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
      <button type="submit" style={{ margin: "10px" }}>
        ADD
      </button>
    </form>
  );
};

export default AddTodo;
