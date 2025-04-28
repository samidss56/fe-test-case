import { TodoList } from '~/components/todos/list';

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center py-12 px-4">
      <TodoList />
    </main>
  );
}
