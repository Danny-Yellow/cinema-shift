import { cloneElement, FC, ReactElement, ReactNode } from 'react';

interface IToggleButtonGroupProps {
	value: string;
	onClick: (newValue: string) => void;
	children: ReactElement<{
		value: string;
		isActive: boolean;
		onClick: (newValue: string) => void;
	}>[];
}

export const ToggleButtonGroup: FC<IToggleButtonGroupProps> = ({
	value,
	onClick,
	children,
}) => {
	const buttonsGroup = children.reduce(
		(acc: ReactNode[], button, index, array) => {
			const isActive = button?.props.value === value;

			const clonedButton = cloneElement(button, {
				key: button.props.value,
				isActive,
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
		<div className="inline-flex h-[44px] items-center rounded-2xl bg-secondary p-[2px] text-gray">
			{buttonsGroup}
		</div>
	);
};
