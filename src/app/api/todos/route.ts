import { NextResponse } from 'next/server';
import { TodoType } from '~/types/todo';

const todos: TodoType[] = Array.from({ length: 3 }, (_, i) => {
  const id = i + 1;
  return { id, title: `Todo ${id}`, description: `Todo ${id} description` };
});

export async function GET() {
  return NextResponse.json({
    data: todos,
  });
}
