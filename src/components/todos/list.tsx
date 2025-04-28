'use client';

import {
  startTransition,
  useDeferredValue,
  unstable_ViewTransition as ViewTransition,
} from 'react';
import { useGetTodos, useMoveTodo } from '~/hooks/todo';
import { TodoCard } from './card';

export interface TodoListProps {}

export function TodoList(_: TodoListProps) {
  const { todos } = useGetTodos();
  const { move } = useMoveTodo();

  const deferredTodos = useDeferredValue(todos);

  return (
    <div className="max-w-[500px] w-full p-2 space-y-2 border border-gray-100">
      {deferredTodos?.length === 0 ? (
        <div className="h-full flex items-center justify-center">
          <p>ℹ Tidak ada todo</p>
        </div>
      ) : (
        deferredTodos?.map((todo) => (
          <ViewTransition key={todo.id}>
            <TodoCard
              {...todo}
              key={todo.id}
              onTodoAction={(action) => {
                startTransition(() => {
                  move({ id: todo.id, action });
                });
              }}
            />
          </ViewTransition>
        ))
      )}
    </div>
  );
}
