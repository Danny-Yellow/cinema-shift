import type { RootState } from '@src/store/store';
import { createSelector } from 'reselect';

const selectUserSession = (state: RootState) => state.userSession;

export const getUserSession = createSelector(
	[selectUserSession],
	(userSession) => {
		return {
			isAuth: Object.values(userSession).some((value) => Boolean(value)),
			user: userSession,
		};
	},
);
