import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getTodos } from '~/services/todo';
import { TodoAction, TodoType } from '~/types/todo';

export function useGetTodos() {
  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
    select: (data) => data.data,
  });

  return {
    todos: data,
  };
}

export function useMoveTodo() {
  const queryClient = useQueryClient();

  const handleMoveTodo = (id: number, action: TodoAction) => {
    const todos = queryClient.getQueryData<TodoType[]>(['todos']);
    if (!todos) throw new Error('No todos found');

    console.log('todos', todos);
    console.log('action', id, action);
  };

  return {
    handleMoveTodo,
  };
}
