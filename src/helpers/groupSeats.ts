type IGroupSeatsParams = {
	column: number;
	row: number;
}[];

export const groupSeats = (seats: IGroupSeatsParams) => {
	const seatMap = new Map<number, number[]>();

	seats.forEach(({ column, row }) => {
		if (!seatMap.has(row)) {
			seatMap.set(row, []);
		}
		seatMap.get(row)!.push(column);
	});

	return Array.from(seatMap.entries())
		.map(([row, cols]) => ({ cols: cols.sort((a, b) => a - b), row }))
		.sort((a, b) => a.row - b.row);
};
