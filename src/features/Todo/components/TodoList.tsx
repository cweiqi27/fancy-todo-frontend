import { Spinner } from '@/components/ui/Spinner';
import { useGetTodoQuery } from '@/features/api';
import { TodoCard } from '.';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { AlertTriangle } from 'lucide-react';

const TodoList = () => {
  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodoQuery();

  let content: JSX.Element | JSX.Element[] = <></>;

  if (isLoading) {
    content = <Spinner />;
  } else if (isSuccess) {
    content = todos.map((todo) => <TodoCard key={todo.id} todo={todo} />);
  } else if (isError) {
    content = (
      <Alert>
        <AlertTitle className="inline-flex gap-2 items-center">
          <AlertTriangle />
          <span>Error</span>
        </AlertTitle>
        <AlertDescription>{JSON.stringify(error)}</AlertDescription>
      </Alert>
    );
  }

  return <div className="flex flex-wrap gap-2">{content}</div>;
};

export { TodoList };
