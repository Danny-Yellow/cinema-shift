import type { FC } from 'react';
import { CanceledOrderStatus } from '@src/components/UI/CanceledOrderStatus';

export const CanceledOrder: FC<{ orderNumber: number }> = ({ orderNumber }) => {
	return (
		<div className="flex w-[328px] justify-between rounded-2xl border-[1px] border-slate-200 p-4 text-sm">
			<CanceledOrderStatus />
			<p className="px-3 py-1 text-medium">Код билета {orderNumber}</p>
		</div>
	);
};
