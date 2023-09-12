import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Todo } from '../Todo/';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (builder) => ({
    // Todo
    getTodo: builder.query<Todo[], void>({
      query: () => '/todos',
    }),
    getTodoById: builder.query<Todo, string>({
      query: (id) => `/todos/${id}`,
    }),
  }),
});

export const { useGetTodoQuery, useGetTodoByIdQuery } = apiSlice;
