import { USERS_URL } from '../constants';
import { apiSlice } from './api.slice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/signin`,
        method: 'POST',
        body: data,
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/signup`,
        method: 'POST',
        body: data,
      }),
    }),
    signout: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/signout`,
        method: 'POST',
        body: data,
      }),
    }),
    getUserDetails: builder.query({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
      }),
    }),
    updateUser: builder.mutation({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const {
  useSigninMutation,
  useSignupMutation,
  useSignoutMutation,
  useGetUserDetailsQuery,
  useUpdateUserMutation,
} = userApiSlice;
