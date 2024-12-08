import type { PayloadAction } from '@reduxjs/toolkit';
import type { ISessionResponse } from '@src/types';
import { createSlice } from '@reduxjs/toolkit';


const initialState: ISessionResponse['user'] = {
	city: '',
	email: '',
	firstname: '',
	lastname: '',
	middlename: '',
	phone: '',
};

const userSessionSlice = createSlice({
	initialState,
	name: 'userSession',
	reducers: {
		clearUserSession: () => initialState,
		setUserSession: (
			state,
			action: PayloadAction<ISessionResponse['user']>,
		) => {
			Object.assign(state, action.payload);
		},
	},
});

export const { clearUserSession, setUserSession } = userSessionSlice.actions;

export default userSessionSlice.reducer;
