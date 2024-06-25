import React from "react";
import AddTodo from "./Components/AddTodo";

const page = () => {
  return (
    <main>
      <h2 style={{ textTransform: "uppercase" }}>Todo Next + TypeScript</h2>
      <AddTodo />
    </main>
  );
};

export default page;
