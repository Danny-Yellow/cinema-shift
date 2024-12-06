export interface IOtpRequest {
	phone: string;
}

export interface IOtpResponse {
	reason?: string;
	retryDelay: number;
	success: boolean;
}
