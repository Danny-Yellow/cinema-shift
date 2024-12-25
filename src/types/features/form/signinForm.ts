import type { IFieldValue } from './field';

export type TSigninFieldName = 'code' | 'phone';

export type TSigninFields = Record<TSigninFieldName, IFieldValue>;

export interface ISigninForm {
	codeIsSent: boolean;
	fields: TSigninFields;
}
