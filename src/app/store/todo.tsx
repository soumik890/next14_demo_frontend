"use client";
import { createContext, useState, ReactNode, useContext } from "react";
export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodosContext = {
  todos: Todo[];
  handleTodo: (task: string) => void; // call signature
  toggle: (task: string) => void; // call signature
  handleDelete: (task: string) => void; // call signature
};

export const todoContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleTodo = (task: string) => {
    setTodos((prev: Todo[]) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      return newTodos;
    });
  };

  const toggle = (id: string) => {
    setTodos((prev: Todo[]): any => {
      return prev.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const handleDelete = (id: string) => {
    console.log(id, "**********8");
    setTodos((prev: Todo[]): any => {
      return prev.filter((item) => item.id !== id);
    });
  };

  return (
    <todoContext.Provider value={{ todos, handleTodo, toggle, handleDelete }}>
      {children}
    </todoContext.Provider>
  );
};

export function useTodos() {
  const todoContextValue = useContext(todoContext);
  if (!todoContext) {
    throw new Error("useTodos used outside provider");
  }

  return todoContextValue;
}
