import { FC } from 'react';
import { Seat } from './UI/Seat';
import { TPlaces } from '@src/types';

interface ISeatsProps {
	places: TPlaces;
	handleClick: (seat: ISelectedSeat) => void;
}

export const Seats: FC<ISeatsProps> = ({ places, handleClick }) => {
	const rowElements = [];

	for (let i = 0; i < places.length; i++) {
		const columnElements = [];

		for (let j = 0; j < places[i].length; j++) {
			columnElements.push(
				<Seat
					isAvailable={places[i][j].type !== 'BLOCKED'}
					handleClick={() => {
						handleClick({ row: i + 1, col: j + 1, price: places[i][j].price });
					}}
					col={j + 1}
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
