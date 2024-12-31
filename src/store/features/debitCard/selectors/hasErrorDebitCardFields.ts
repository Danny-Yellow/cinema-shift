import type { RootState } from '@src/store/store';

export const hasErrorDebitCardFields = (state: RootState) => {
	const hasError = Object.values(state.debitCard).some(
		(field) => !!field.errorMessage,
	);

	return hasError;
};
