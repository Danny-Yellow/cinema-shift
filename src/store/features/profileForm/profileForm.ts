import type { PayloadAction } from '@reduxjs/toolkit';
import type { TPersonalDataFieldName } from '@src/types';
import type {
	IProfileForm,
	TProfileFieldNames,
} from '@src/types/features/form/profileForm';
import { createSlice } from '@reduxjs/toolkit';
import { personalDataValidationMap } from '@src/helpers/validation/personalDataValidation';

const initialState: IProfileForm = {
	field: {
		email: '',
		firstname: '',
		lastname: '',
		middlename: '',
		phone: '',
	},
};

const personalDataFormSlice = createSlice({
	initialState,
	name: 'personalDataForm',
	reducers: {
		changeInputValue: (
			state,
			action: PayloadAction<{ name: TProfileFieldNames; value: string }>,
		) => {
			const { name, value } = action.payload;
			state.field[name] = value;
		},
		reset: () => ({
			field: {
				email: '',
				firstname: '',
				lastname: '',
				middlename: '',
				phone: '',
			},
		}),
		submit: (state) => {
			Object.keys(state.field).forEach((key) => {
				const fieldName = key as TPersonalDataFieldName;
				const fieldValue = state.field[fieldName].value;
				const validationError =
					personalDataValidationMap[fieldName](fieldValue);

				state.field[fieldName].errorMessage = validationError;
			});
		},
	},
});

export const { changeInputValue, reset, submit } =
	personalDataFormSlice.actions;

export default personalDataFormSlice.reducer;
