export interface ISigninRequest {
	code: number;
	phone: string;
}

export interface IUserResponse {
	reason: string;
	success: boolean;
	user: {
		city?: string;
		email?: string;
		firstname?: string;
		lastname?: string;
		middlename?: string;
		phone: string;
	};
}

export interface ISigninResponse extends IUserResponse {
	token: string;
}

export interface IUpdateProfileRequest {
	phone: string;
	profile: {
		// city: string;
		// email: string;
		firstname: string;
		lastname: string;
		middlename: string;
	};
}
