import type { IFieldValue } from './field';

export type TPersonalDataFieldName =
	| 'firstname'
	| 'lastname'
	| 'middlename'
	| 'phone';

type TPersonalDataField = Record<TPersonalDataFieldName, IFieldValue>;

export interface IPersonalDataForm {
	field: TPersonalDataField;
}
