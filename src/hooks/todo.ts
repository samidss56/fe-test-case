import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createTodo, getTodos, moveTodo } from '~/services/todo';

export function useGetTodos() {
  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
    select: (response) => response.data,
  });

  return {
    todos: data,
  };
}

export function useMoveTodo() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: moveTodo,
    onSuccess: () => queryClient.invalidateQueries(),
  });

  return {
    move: mutate,
  };
}
export function useCreateTodo() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createTodo,
    onSuccess: () => queryClient.invalidateQueries(),
  });

  return {
    create: mutate,
  };
}
