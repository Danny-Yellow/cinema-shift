import type { TPersonalDataFieldName } from '@src/types';

export interface IField {
	isRequired?: boolean;
	label: string;
	name: TPersonalDataFieldName;
	placeholder: string;
}
