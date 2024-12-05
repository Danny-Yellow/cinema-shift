import type { RootState } from '@src/store/store';

export const hasErrorPersonalDataForm = (state: RootState) => {
	const hasError = Object.values(state.personalDataForm.field).some(
		(field) => !!field.errorMessage,
	);

	return hasError;
};
