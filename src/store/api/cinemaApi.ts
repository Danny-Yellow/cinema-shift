import type {
	IFilmResponse,
	IFilmsResponse,
	IOrderResponse,
	IPaymentRequest,
	IPaymentResponse,
	IScheduleResponse,
} from '@src/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@src/constants/url';

export const cinemaApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: `${BASE_URL}/cinema/`,
	}),
	endpoints: (build) => ({
		getFilm: build.query<IFilmResponse, string>({
			query: (id) => `/film/${id}`,
			transformResponse(res: IFilmResponse) {
				const updatedImg = BASE_URL + res.film.img;
				const updatedFilm = { ...res.film, img: updatedImg };

				return { ...res, film: updatedFilm };
			},
		}),

		getFilms: build.query<IFilmsResponse, void>({
			query: () => '/today',
			transformResponse(res: IFilmsResponse) {
				const updatedFilms = res.films.map((film) => ({
					...film,
					img: BASE_URL + film.img,
				}));
				return { ...res, films: updatedFilms };
			},
		}),

		getOrders: build.query<IOrderResponse, void>({
			providesTags: ['Orders'],
			query: () => ({
				headers: {
					Authorization: `Bearer ${localStorage.getItem('Authorization')}`,
				},
				url: `/orders`,
			}),
		}),

		getSchedule: build.query<IScheduleResponse, string>({
			query: (id) => `/film/${id}/schedule`,
		}),
		payment: build.mutation<IPaymentResponse, IPaymentRequest>({
			invalidatesTags: ['Orders'],
			query: (body) => ({
				body,
				method: 'POST',
				url: '/payment',
			}),
		}),
	}),
	reducerPath: 'filmsApi',
	tagTypes: ['Films', 'Orders'],
});

export const {
	useGetFilmQuery,
	useGetFilmsQuery,
	useGetOrdersQuery,
	useGetScheduleQuery,
	usePaymentMutation,
} = cinemaApi;
