import type { TPersonalDataFieldName } from '@src/types';

export interface IField {
	isDisabled?: boolean;
	isRequired?: boolean;
	label: string;
	name: TPersonalDataFieldName;
	placeholder: string;
}
