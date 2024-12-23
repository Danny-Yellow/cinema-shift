import type { ISelectedSeat, TPlaces } from '@src/types';
import type { FC } from 'react';
import { Seat } from './UI/Seat';

interface ISeatsProps {
	places: TPlaces;
	onClick: (seat: ISelectedSeat) => void;
	onMouseEnter: (
		coordinates: { x: number; y: number },
		seat: { column: number; row: number },
		price: number,
	) => void;
	onMouseLeave: () => void;
}

export const Seats: FC<ISeatsProps> = ({
	onClick,
	onMouseEnter,
	onMouseLeave,
	places,
}) => {
	const rowElements = [];

	for (let i = 0; i < places.length; i++) {
		const columnElements = [];

		for (let j = 0; j < places[i].length; j++) {
			const isAvailable = places[i][j].type !== 'BLOCKED';
			const column = j + 1
			const row = i + 1
			const price = places[i][j].price

			columnElements.push(
				<Seat
					key={`${i}${j}`}
					handleClick={() => {
						onClick({ column, price, row });
					}}
					col={j + 1}
					isAvailable={isAvailable}
					onMouseEnter={(event) => {
						const coords = event.currentTarget.getBoundingClientRect();
						if (isAvailable) {
							onMouseEnter(
								{
									x: coords.left + window.scrollX + coords.width / 2 - 52,
									y: coords.top + window.scrollY - 67,
								},
								{ column, row },
								price,
							);
						}
					}}
					onMouseLeave={() => onMouseLeave()}
				/>,
			);
		}

		rowElements.push(
			<div key={i} className="flex items-center justify-center gap-6">
				<span>{i + 1}</span>
				{columnElements}
			</div>,
		);
	}

	return <div className="flex flex-col gap-6">{rowElements}</div>;
};
