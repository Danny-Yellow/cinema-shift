import type { TDebitCardFieldName } from '@src/types/features/form/debitCard';
import {
    validCvv,
	validExpireDate,
	validPan,
	validPhone,
} from './validation';

export const debitCardValidation: Record<
	TDebitCardFieldName,
	(_: string) => string
> = {
	cvv: validCvv,
	expireDate: validExpireDate,
	pan: validPan,
};
export { validPhone };

