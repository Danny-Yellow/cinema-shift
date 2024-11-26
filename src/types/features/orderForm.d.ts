interface IField {
	errorMessage: string;
	value: string;
}

type TFormName = 'city' | 'email' | 'firstname' | 'lastname' | 'middlename' | 'phone'

type TFormValues = Record<TFormName, IField>

interface IOrderForm {
	field: TFormValues;
}
