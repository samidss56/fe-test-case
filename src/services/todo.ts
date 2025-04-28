import { ListResponseType } from '~/types/core/response';
import { TodoType } from '~/types/todo';

export async function getTodos(): Promise<ListResponseType<TodoType>> {
  const response = await fetch('/api/todos');
  if (!response.ok) throw new Error('Failed to fetch todos.');
  return await response.json();
}
