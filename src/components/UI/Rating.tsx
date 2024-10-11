import { EmptyStar, Star } from '@src/components/icons/index';
import { FC } from 'react';

interface IRatingsProps {
	defaultValue: number;
	max: number;
}

export const Rating: FC<IRatingsProps> = ({ defaultValue, max }) => {
	const Stars = [];

	for (let i = 0; i < max; i++) {
		if (i < +defaultValue) {
			Stars.push(<Star key={i} />);
		} else {
			Stars.push(<EmptyStar key={i} />);
		}
	}

	return <div className="flex">{Stars}</div>;
};
