export interface ISigninRequest {
	code: number;
	phone: string;
}

export interface ISessionResponse {
	reason: string;
	success: boolean;
	user: {
		firstname?: string;
		lastname?: string;
		middlename?: string;
		phone: string;
	};
}

export interface ISigninResponse extends ISessionResponse {
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
