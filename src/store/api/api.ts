import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://shift-backend.onrender.com';

export const api = createApi({
	reducerPath: 'filmsApi',
	tagTypes: ['Films'],
	baseQuery: fetchBaseQuery({
		baseUrl: `${BASE_URL}/cinema/`,
	}),
	endpoints: (build) => ({
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
		getFilm: build.query<IFilmResponse, string>({
			query: (id) => `/film/${id}`,
			transformResponse(res: IFilmResponse) {
				const updatedImg = BASE_URL + res.film.img;
				const updatedFilm = { ...res.film, img: updatedImg };

				return { ...res, film: updatedFilm };
			},
		}),
		getSchedule: build.query<IScheduleResponse, string>({
			query: (id) => `/film/${id}/schedule`,
		}),
	}),
});

export const { useGetFilmsQuery, useGetFilmQuery, useGetScheduleQuery } = api;
