import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import type { Todo } from '..';

type TodoCardProps = {
  todo: Todo;
};

const TodoCard = ({ todo }: TodoCardProps) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{todo.title}</CardTitle>
          <CardDescription>{todo.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div>{todo.id}</div>
        </CardContent>
      </Card>
    </>
  );
};

export { TodoCard };
