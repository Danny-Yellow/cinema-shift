import type { PayloadAction } from '@reduxjs/toolkit';
import type { IUserResponse } from '@src/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IUserResponse['user'] = {
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
		setUserSession: (_, action: PayloadAction<IUserResponse['user']>) =>
			action.payload,
	},
});

export const { clearUserSession, setUserSession } = userSessionSlice.actions;

export default userSessionSlice.reducer;
