import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface User {
  username: string;
}

interface CreateUserResponse {
  msg: string;
  user: User;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
  tagTypes: ['user'],
  endpoints: (builder) => ({
    fetchUser: builder.query({
      query: (username: string) => `/users/${username}`,
      providesTags: ['user'],
    }),
    createNewUser: builder.mutation<CreateUserResponse, string>({
      query: (username) => ({
        url: `/users`,
        method: 'POST',
        body: { username },
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const { useCreateNewUserMutation } = apiSlice;
