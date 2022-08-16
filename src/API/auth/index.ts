// import { axiosClient as client } from '@/lib';

// export const signIn = async (params: { email: string; password: string }) => {
//   return await client.post('auth/signin', params);
// };

// export const signUp = async (params: {
//   email: string;
//   nickname: string;
//   password: string;
//   passwordConfirm: string;
// }) => {
//   return await client.post('auth/signUp', params);
// };

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030/api/v1' }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (params) => ({
        url: '/auth/signin',
        method: 'POST',
        body: params,
      }),
    }),
    signUp: builder.mutation({
      query: (params) => ({
        url: '/auth/signUp',
        method: 'POST',
        body: params,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
