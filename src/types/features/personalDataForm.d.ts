interface IFieldValue {
	errorMessage: string;
	value: string;
}

type TPersonalDataFieldName = 'city' | 'email' | 'firstname' | 'lastname' | 'middlename' | 'phone'

type TPersonalDataField = Record<TPersonalDataFieldName, IFieldValue>

interface IPersonalDataForm {
	field: TPersonalDataField;
}
