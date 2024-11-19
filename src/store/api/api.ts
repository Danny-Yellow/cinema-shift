import type { IFilmResponse, IFilmsResponse, IScheduleResponse } from '@src/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:3001';

export const api = createApi({
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
		getSchedule: build.query<IScheduleResponse, string>({
			query: (id) => `/film/${id}/schedule`,
		}),
	}),
	reducerPath: 'filmsApi',
	tagTypes: ['Films'],
});

export const { useGetFilmQuery, useGetFilmsQuery, useGetScheduleQuery } = api;
