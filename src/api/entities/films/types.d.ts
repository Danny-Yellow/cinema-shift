interface IFilmPerson {
	id: string;
	// enum ACTOR, DIRECTOR
	professions: string;
	fullName: string;
}

interface IFilm {
	id: string;
	name: string;
	originalName: string;
	description: string;
	releaseDate: string;
	actors: IFilmPerson;
	directors: IFilmPerson;
	runtime: number;
	// enum G, PG, PG13, R, NC17
	ageRating: string;
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

interface IFilmResponse {
	success: boolean;
	reason?: string;
	film: IFilm;
}

interface IFilmsResponse {
	success: boolean;
	reason?: string;
	films: IFilm[];
}
