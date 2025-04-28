import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getTodos, moveTodo } from '~/services/todo';

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
