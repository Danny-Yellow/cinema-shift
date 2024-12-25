import type {
	ISessionResponse,
	ISigninRequest,
	ISigninResponse,
	IUpdateProfileRequest,
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
			providesTags: ['User'],
			query: () => '/session',
		}),

		signin: build.mutation<ISigninResponse, ISigninRequest>({
			invalidatesTags: ['User'],
			query: (body) => ({
				body,
				headers: {},
				method: 'POST',
				url: '/signin',
			}),
			transformResponse: (response: ISigninResponse) => {
				if (response.token) {
					window.localStorage.setItem('Authorization', response.token);
				}

				return response;
			},
		}),
		updateProfile: build.mutation<ISessionResponse, IUpdateProfileRequest>({
			invalidatesTags: ['User'],
			query: (body) => ({
				body,
				method: 'PATCH',
				url: '/profile',
			}),
		}),
	}),
	reducerPath: 'usersApi',
	tagTypes: ['User'],
});

export const {
	useGetSessionQuery,
	useSigninMutation,
	useUpdateProfileMutation,
} = usersApi;
