export interface ISigninRequest {
	code: number;
	phone: string;
}

export interface ISigninResponse {
	reason: string;
	success: boolean;
	token: string;
	user: {
		city?: string;
		email?: string;
		firstname?: string;
		lastname?: string;
		middlename?: string;
		phone: string;
	};
}
