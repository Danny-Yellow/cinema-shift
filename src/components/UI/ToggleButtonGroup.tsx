import type { FC, ReactElement, ReactNode } from 'react';
import { cloneElement } from 'react';

interface IToggleButtonGroupProps {
	value: string;
	onClick: (newValue: string) => void;
	children: ReactElement<{
		isActive: boolean;
		onClick: (newValue: string) => void;
		value: string;
	}>[];
}

export const ToggleButtonGroup: FC<IToggleButtonGroupProps> = ({
	children,
	onClick,
	value,
}) => {
	const buttonsGroup = children.reduce(
		(acc: ReactNode[], button, index, array) => {
			const isActive = button?.props.value === value;

			const clonedButton = cloneElement(button, {
				isActive,
				key: button.props.value,
				onClick,
			});
			acc.push(clonedButton);

			const isNextActive = array[index + 1]?.props.value === value;

			if (index !== array.length - 1 && !isActive && !isNextActive) {
				acc.push(<div key={index} className="h-6 w-[1px] bg-light"></div>);
			}

			return acc;
		},
		[],
	);

	return (
		<div className="inline-flex items-center rounded-2xl bg-secondary p-[2px] text-gray">
			{buttonsGroup}
		</div>
	);
};
