export interface IFilmPerson {
	fullName: string;
	id: string;
	professions: 'ACTOR' | 'DIRECTOR';
}

export interface IFilm {
	actors: IFilmPerson;
	ageRating: 'G' | 'NC17' | 'PG' | 'PG13' | 'R';
	description: string;
	directors: IFilmPerson;
	genres: string[];
	id: string;
	img: string;
	name: string;
	originalName: string;
	releaseDate: string;
	runtime: number;
	country?: {
		code: string;
		code2: string;
		id: string;
		name: string;
	};
	userRatings: {
		imdb: string;
		kinopoisk: string;
	};
}

export interface IFilmResponse {
	film: IFilm;
	reason?: string;
	success: boolean;
}

export interface IFilmsResponse {
	films: IFilm[];
	reason?: string;
	success: boolean;
}
