import type { TSigninFieldName } from '@src/types';
import { validOtp, validPhone } from './validation';

export const signinValidationMap: Record<
	TSigninFieldName,
	(data: string) => string
> = {
	code: validOtp,
	phone: validPhone,
};
