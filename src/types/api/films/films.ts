export interface IFilmPerson {
	id: string;
	professions: 'ACTOR' | 'DIRECTOR';
	fullName: string;
}

export interface IFilm {
	id: string;
	name: string;
	originalName: string;
	description: string;
	releaseDate: string;
	actors: IFilmPerson;
	directors: IFilmPerson;
	runtime: number;
	ageRating: 'G' | 'PG' | 'PG13' | 'R' | 'NC17';
	genres: string[];
	userRatings: {
		kinopoisk: string;
		imdb: string;
	};
	img: string;
	country?: {
		name: string;
		code: string;
		code2: string;
		id: string;
	};
}

export interface IFilmResponse {
	success: boolean;
	reason?: string;
	film: IFilm;
}

export interface IFilmsResponse {
	success: boolean;
	reason?: string;
	films: IFilm[];
}
