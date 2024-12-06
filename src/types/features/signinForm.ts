export interface ISigninFields {
	code: {
		error: string;
		value: string;
	};
	phone: {
		error: string;
		value: string;
	};
}

export interface ISigninForm {
	codeIsSent: boolean;
	fields: ISigninFields;
}
