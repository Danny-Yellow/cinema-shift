import type { IOtpRequest, IOtpResponse } from '@src/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '@src/constants/url';

export const authApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/auth` }),
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
