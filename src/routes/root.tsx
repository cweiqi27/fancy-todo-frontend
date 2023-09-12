import { MainLayout } from '@/components/layouts/MainLayout';
import { TodoRoutes } from '@/features/Todo';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

const Root = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/todos/*',
        element: <TodoRoutes />,
      },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
