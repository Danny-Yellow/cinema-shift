interface IField {
	isRequired: boolean;
	label: string;
	name: string;
	placeholder: string;
	value: string;
}

interface IOrderForm {
	fields: IField[];
}
