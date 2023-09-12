import { Route, Routes } from 'react-router-dom';
import { TodoPage } from './TodoPage';

export const TodoRoutes = () => {
  return (
    <Routes>
      <Route path="gotem" element={<TodoPage />} />;
    </Routes>
  );
};
