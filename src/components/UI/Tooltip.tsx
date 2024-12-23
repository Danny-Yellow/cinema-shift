import type { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { SmallCross } from '../icons';
import { IconButton } from './IconButton';

interface ITooltipProps {
	children: ReactNode;
	isVisible: boolean;
	title: string;
	position: {
		x: number;
		y: number;
	};
}

export const Tooltip: FC<ITooltipProps> = ({
	children,
	isVisible,
	position,
	title,
}) => {
	return (
		<div
			className={clsx(
				'shadow-tooltip absolute z-10 w-[110px] rounded-lg bg-white px-[6px] py-2 text-xs shadow-slate-500',
				'tooltip-triangle',
				isVisible ? 'block' : 'hidden',
			)}
			style={{ left: `${position.x}px`, top: `${position.y}px` }}
		>
			<div className="flex justify-between">
				<h3 className="title">{title}</h3>
				<IconButton>
					<SmallCross />
				</IconButton>
			</div>
			<p className="text-gray">{children}</p>
		</div>
	);
};
