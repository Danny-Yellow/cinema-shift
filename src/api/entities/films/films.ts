import { api } from '@src/api/instance';

class FilmsService {
	public getFilmsToday(requestConfig?: AxiosRequestConfig) {
		return api.get<IFilmsResponse>('/today', requestConfig?.config);
	}
}

export const filmsApiService = new FilmsService();
