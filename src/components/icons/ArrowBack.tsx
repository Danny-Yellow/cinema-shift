import type { ComponentProps, FC } from 'react';

export const ArrowBack: FC<ComponentProps<'svg'>> = (props) => {
	return (
		<svg
			{...props}
			fill="currentColor"
			height="25"
			viewBox="0 0 25 25"
			width="25"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M15.4874 21.319C15.8799 21.7115 16.5172 21.7087 16.9062 21.3127C17.2903 20.9217 17.2876 20.2941 16.8999 19.9065L9.02498 12.0316L16.8999 4.15658C17.2876 3.76897 17.2903 3.14139 16.9062 2.75036C16.5172 2.35441 15.8799 2.35159 15.4874 2.74408L6.90708 11.3244C6.51656 11.715 6.51656 12.3481 6.90708 12.7387L15.4874 21.319Z"
				fill="currentColor"
			/>
		</svg>
	);
};
