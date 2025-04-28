'use client';

import { useGetTodos, useMoveTodo } from '~/hooks/todo';
import { TodoCard } from './card';

export interface TodoListProps {}

export function TodoList(_: TodoListProps) {
  const { todos } = useGetTodos();
  const { handleMoveTodo } = useMoveTodo();

  return (
    <div className="max-w-[500px] w-full p-2 space-y-2 border border-gray-100">
      {todos?.length === 0 ? (
        <div className="h-full flex items-center justify-center">
          <p>ℹ Tidak ada todo</p>
        </div>
      ) : (
        todos?.map((todo) => (
          <TodoCard
            {...todo}
            key={todo.id}
            onTodoAction={(action) => handleMoveTodo(todo.id, action)}
          />
        ))
      )}
    </div>
  );
}
