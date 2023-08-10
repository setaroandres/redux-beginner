//Este es como un reducer pero usando RTK Query
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),

  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos'//agarramos el baseUrl y le concatenamos el /todos
    }),
    getTodoById: builder.query({
      query: (todoId) => `/todos/${todoId}`//agarramos el baseUrl y le concatenamos el /todos
    })
  })
});

//aca tenemos que exportar un customHook. Este createApi nos crea customHooks
//el useGetTodosQuery es el customHook que crea
export const {useGetTodosQuery, useGetTodoByIdQuery} = todosApi;