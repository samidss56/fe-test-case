import { NextResponse } from 'next/server';
import { TodoType } from '~/types/todo';

const todos: TodoType[] = Array.from({ length: 10 }, (_, i) => ({
  id: Date.now() + i,
  title: `Todo ${i + 1}`,
  description: `Deskripsi todo ${i + 1}`,
}));

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json({
    data: todos,
  });
}
