import { ListResponseType } from '~/types/core/response';
import { MoveTodoType, TodoType } from '~/types/todo';

export async function getTodos(): Promise<ListResponseType<TodoType>> {
  const response = await fetch('/api/todos');
  if (!response.ok) throw new Error('Failed to fetch todos.');
  return await response.json();
}

export async function moveTodo(payload: MoveTodoType) {
  const response = await fetch('/api/todos/move', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) throw new Error('Failed to move todo.');

  return;
}
