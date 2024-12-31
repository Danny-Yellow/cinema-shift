import type { IDebitCard } from '@src/types';
import type { TDebitCardForm } from '@src/types/features/form/debitCard';
import type { FC } from 'react';
import { TextField } from '@src/components/UI/TextField';

interface IDebitCardProps {
	debitCard: TDebitCardForm;
	onChange: (name: keyof IDebitCard, value: string) => void;
}

export const DebitCard: FC<IDebitCardProps> = ({ debitCard, onChange }) => {
	return (
		<div className="mt-6 rounded-2xl bg-secondary p-6">
			<TextField
				error={debitCard.pan.errorMessage}
				label="Номер*"
				placeholder="0000 0000"
				value={debitCard.pan.value}
				onChange={(event) => onChange('pan', event.target.value)}
			/>
			<div className="mt-4 flex gap-6">
				<TextField
					error={debitCard.expireDate.errorMessage}
					label="Срок*"
					placeholder="00/00"
					value={debitCard.expireDate.value}
					onChange={(event) => onChange('expireDate', event.target.value)}
				/>
				<TextField
					error={debitCard.cvv.errorMessage}
					label="CVV*"
					placeholder="000"
					value={debitCard.cvv.value}
					onChange={(event) => onChange('cvv', event.target.value)}
				/>
			</div>
		</div>
	);
};
