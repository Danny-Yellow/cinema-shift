import type { FC } from 'react';

interface IRatingsProps {
	countOfStars: number;
	rating: number;
}

export const Rating: FC<IRatingsProps> = ({ countOfStars, rating }) => {
	const stars = Array.from({ length: countOfStars }, (_, index) => {
		const rate = Math.min(Math.max((rating - index) * 100, 0), 100);

		return (
			<div
				key={index}
				className="star"
			>
				<div
					className="bg-yellow absolute left-0 top-0 h-full"
					style={{ width: `${rate}%` }}
				/>
			</div>
		);
	});

	return <div className="flex items-center gap-1">{stars}</div>;
};
