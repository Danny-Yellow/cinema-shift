import type { IOtpRequest, IOtpResponse } from '@src/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@src/constants/url';

export const authApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/auth` }),
	endpoints: (build) => ({
		createOtp: build.mutation<IOtpResponse, IOtpRequest>({
			query: (body) => ({
				body,
				method: 'POST',
				url: '/otp',
			}),
		}),
	}),
	reducerPath: 'authApi',
});

export const { useCreateOtpMutation } = authApi;
