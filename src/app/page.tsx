import { TodoCreate } from '~/components/todos/create';
import { TodoList } from '~/components/todos/list';

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center py-12 px-4">
      <div className="max-w-[500px] w-full">
        <TodoCreate />

        <TodoList />
      </div>
    </main>
  );
}
