import type { RootState } from '@src/store/store';

export const getPersonalDataFormField = (state: RootState) => state.personalDataForm.field;
