import type {
	ISessionResponse,
	ISigninRequest,
	ISigninResponse,
} from '@src/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@src/constants/url';

export const usersApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: `${BASE_URL}/users`,
		prepareHeaders: (headers) => {
			const token = window.localStorage.getItem('Authorization');
			if (token) {
				headers.set('Authorization', `Bearer ${token}`);
			}

			return headers;
		},
	}),
	endpoints: (build) => ({
		getSession: build.query<ISessionResponse, void>({
			query: () => '/session',
		}),

		signin: build.mutation<ISigninResponse, ISigninRequest>({
			query: (body) => ({
				body,
				headers: {},
				method: 'POST',
				url: '/signin',
			}),
		}),
	}),
	reducerPath: 'usersApi',
});

export const { useGetSessionQuery, useSigninMutation } = usersApi;
