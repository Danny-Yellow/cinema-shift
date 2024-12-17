export interface ISigninRequest {
	code: number;
	phone: string;
}

export interface IUserResponse {
	reason: string;
	success: boolean;
	user: {
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
		firstname: string;
		lastname: string;
		middlename: string;
	};
}
