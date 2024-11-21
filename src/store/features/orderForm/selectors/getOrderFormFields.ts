import type { RootState } from '@src/store/store';

export const getOrderFormFields = (state: RootState) => state.orderForm.fields;
