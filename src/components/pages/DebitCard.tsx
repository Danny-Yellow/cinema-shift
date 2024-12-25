import type { IDebitCard } from '@src/types';
import type { FC } from 'react';
import { TextField } from '@src/components/UI/TextField';

interface IDebitCardProps {
	values: IDebitCard;
	onChange: (name: keyof IDebitCard, value: string) => void;
}

export const DebitCard: FC<IDebitCardProps> = ({ onChange, values }) => {
	return (
		<div className="mt-6 rounded-2xl bg-secondary p-6">
			<TextField
				label="Номер*"
				placeholder="0000 0000"
				value={values.pan}
				onChange={(event) => onChange('pan', event.target.value)}
			/>
			<div className="mt-4 flex gap-6">
				<TextField
					label="Срок*"
					placeholder="00/00"
					value={values.expireDate}
					onChange={(event) => onChange('expireDate', event.target.value)}
				/>
				<TextField
					label="CVV*"
					placeholder="000"
					value={values.cvv}
					onChange={(event) => onChange('cvv', event.target.value)}
				/>
			</div>
		</div>
	);
};
