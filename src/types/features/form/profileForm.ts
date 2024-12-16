export type TProfileFieldNames =
	| 'email'
	| 'firstname'
	| 'lastname'
	| 'middlename'
	| 'phone';

export type TProfileFields = Record<TProfileFieldNames, string>;

export interface IProfileForm {
	field: TProfileFields;
}
