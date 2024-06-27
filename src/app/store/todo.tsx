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

  return (
    <todoContext.Provider value={{ todos, handleTodo }}>
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
