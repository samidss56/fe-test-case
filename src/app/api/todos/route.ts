import { NextResponse } from 'next/server';
import { getTodos } from './utils';

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const todos = await getTodos();

  return NextResponse.json({
    data: todos,
  });
}
