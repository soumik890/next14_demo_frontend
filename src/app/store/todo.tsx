import { createContext, useState } from "react";

export const todoContext = createContext(null);

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type todoContext = {
  todos: Todo[];
  handleTodo: (task: string) => void;
};

export const TodosProvider = ({ children: { children: ReactNode } }) => {
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

export function useTodos(): void {}
