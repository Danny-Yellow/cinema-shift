export const validPhone = (phone: string): string => {
	if (!phone) {
		return 'Поле является обязательным';
	}

	if (!/^\d{11}$/.test(phone)) {
		return 'Некорректный номер телефона';
	}

	return '';
};

export const validCity = (city: string): string => {
	const allowedChars = /^[a-zA-Zа-яА-ЯёЁ\s\-,.\d]+$/;
	const startEndSpecialChars = /^[-,.\s]|[-,.\s]$/;
	const mixedAlphabets = /[a-zA-Z].*[а-яА-ЯёЁ]|[а-яА-ЯёЁ].*[a-zA-Z]/;

	if (!city) {
		return 'Поле является обязательным';
	}

	if (city.length < 2)
		return 'Недопустимо использование меньше 2-х символов'

	if (city.length > 60)
		return 'Недопустимо использование больше 60-ти символов'

	if (!allowedChars.test(city))
		return 'Используются недопустимые символы';

	if (startEndSpecialChars.test(city))
		return 'Поле не должно начинаться со специальных символов'

	if (mixedAlphabets.test(city))
		return 'Значение должно быть задано с использованием одного из следующих алфавитов: кириллического, латинского';

	return '';
};

export const validEmail = (email: string): string => {
	const EMAIL_REGEXP =
		/^(?:[^<>()[\].,;:\s@"]+(?:\.[^<>()[\].,;:\s@"]+)*|".+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,}$/u;

	if (!email) {
		return ''
	}

	if (!EMAIL_REGEXP.test(email)) {
		return 'Некорректный формат';
	}

	return '';
};

export const validFirstname = (firstname: string): string => {
	if (!firstname) 
		return 'Поле является обязательным'

	if (firstname.length < 2)
		return 'Недопустимо использование меньше 2 символов';

	if (firstname.length > 60)
		return 'Недопустимо использование больше 60 символов';

	if (!/^[А-ЯЁ]/u.test(firstname))
		return 'Имя должно начинаться с заглавной буквы';

	if (!/^[А-ЯЁ][а-яё]+$/u.test(firstname)) {
		return 'Недопустимые символы в имени';
	}

	return '';
};

export const validLastname = (lastname: string): string => {
	if (!lastname) 
		return 'Поле является обязательным'

	if (lastname.length < 2) 
		return 'Недопустимо использование меньше 2 символов';

	if (lastname.length > 60)
		return 'Недопустимо использование больше 60 символов';

	if (!/^[А-ЯЁ]/u.test(lastname))
		return 'Фамилия должно начинаться с заглавной буквы';

	if (!/^[А-ЯЁ][а-яё]+$/u.test(lastname)) {
		return 'Недопустимые символы в фамилии';
	}

	return '';
};

export const validMiddlename = (middlename: string): string => {
	if (!middlename) {
		return ''
	}

	if (middlename.length > 60)
		return 'Недопустимо использование больше 60 символов';

	if (!/^[А-ЯЁ]/u.test(middlename))
		return 'Отчество должно начинаться с заглавной буквы';

	if (!/^[А-ЯЁ][а-яё]+$/u.test(middlename)) {
		return 'Недопустимые символы в отчестве';
	}

	return '';
};

export const personalDataValidationMap: Record<TPersonalDataFieldName, (_: string) => string> = {
	firstname: validFirstname,
	lastname: validLastname,
	middlename: validMiddlename,
	phone: validPhone,
};
