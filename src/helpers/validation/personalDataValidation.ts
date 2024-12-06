import type { TPersonalDataFieldName } from '@src/types';
import {
	validFirstname,
	validLastname,
	validMiddlename,
	validPhone,
} from './validation';

export const personalDataValidationMap: Record<
	TPersonalDataFieldName,
	(_: string) => string
> = {
	firstname: validFirstname,
	lastname: validLastname,
	middlename: validMiddlename,
	phone: validPhone,
};
export { validPhone };

