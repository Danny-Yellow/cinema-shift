import type { ISigninRequest, ISigninResponse } from '@src/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@src/constants/url';

export const usersApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/users` }),
	endpoints: (build) => ({
		signin: build.mutation<ISigninResponse, ISigninRequest>({
			query: (body) => ({
				body,
				method: 'POST',
				url: '/signin',
			}),
		}),
	}),
	reducerPath: 'usersApi',
});

export const { useSigninMutation } = usersApi;
