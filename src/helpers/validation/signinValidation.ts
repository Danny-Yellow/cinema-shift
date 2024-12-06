import type { ISigninFields } from '@src/types';
import { validOtp, validPhone } from './validation';

export const signinValidationMap: Record<
	keyof ISigninFields,
	(data: string) => string
> = {
	code: validOtp,
	phone: validPhone,
};
