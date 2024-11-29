import type { TPlaces } from '@src/types';
import type { FC } from 'react';
import { Seat } from './UI/Seat';

interface ISeatsProps {
	places: TPlaces;
	handleClick: (seat: ISelectedSeat) => void;
}

export const Seats: FC<ISeatsProps> = ({ handleClick, places }) => {
	const rowElements = [];

	for (let i = 0; i < places.length; i++) {
		const columnElements = [];

		for (let j = 0; j < places[i].length; j++) {
			columnElements.push(
				<Seat
					handleClick={() => {
						handleClick({ col: j + 1, price: places[i][j].price, row: i + 1 });
					}}
					col={j + 1}
					isAvailable={places[i][j].type !== 'BLOCKED'}
				/>,
			);
		}

		rowElements.push(
			<div className="flex items-center justify-center gap-6">
				<span>{i + 1}</span>
				{columnElements}
			</div>,
		);
	}

	return <div className="flex flex-col gap-6">{rowElements}</div>;
};
