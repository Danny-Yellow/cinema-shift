import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const filmsApi = createApi({
	reducerPath: 'filmsApi',
	tagTypes: ['Films'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://shift-backend.onrender.com/cinema/',
	}),
	endpoints: (build) => ({
		getFilms: build.query<IFilmsResponse, void>({
			query: () => '/today',
			transformResponse(res: IFilmsResponse) {
				const updatedFilms = res.films.map((film) => ({
					...film,
					img: 'https://shift-backend.onrender.com' + film.img,
				}));
				console.log({ ...res, films: updatedFilms });

				return { ...res, films: updatedFilms };
			},
		}),
	}),
});

export const { useGetFilmsQuery } = filmsApi;
