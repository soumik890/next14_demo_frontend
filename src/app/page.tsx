import React from "react";
import AddTodo from "./Components/AddTodo";
import AllTodos from "./Components/AllTodos";
import Navbar from "./Components/Navbar";

const page = () => {
  return (
    <main>
      <div>
        <h2 style={{ textTransform: "uppercase" }}>Next + TypeScript</h2>
      </div>
      <Navbar />
      <AddTodo />
      <AllTodos />
    </main>
  );
};

export default page;
