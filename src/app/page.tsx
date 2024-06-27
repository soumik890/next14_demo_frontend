import React from "react";
import AddTodo from "./Components/AddTodo";
import AllTodos from "./Components/AllTodos";

const page = () => {
  return (
    <main>
      <h2 style={{ textTransform: "uppercase" }}>Todo Next + TypeScript</h2>
      <AddTodo />
      <AllTodos />
    </main>
  );
};

export default page;
