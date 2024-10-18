import { ToggleButtonGroup } from '@src/components/UI/ToggleButtonGroup';
import { ToggleButton } from '@src/components/UI/ToggleButton';
import { FC, useState } from 'react';
import { parseDate } from '@src/helpers/date/parseDate';
import { getWeekDay } from '@src/helpers/date/getWeekDay';
import { getMonth } from '@src/helpers/date/getMonth';

interface IFilmSchedule {
	schedules: ISchedule[];
}

export const FilmSchedule: FC<IFilmSchedule> = ({ schedules }) => {
	const [dateValue, setDateValue] = useState(schedules[0].date);

	function handleDateClick(newValue: string) {
		setDateValue(newValue);
	}

	return (
		<div>
			<h2 className="mb-6 text-2xl font-bold">Расписание</h2>
			<ToggleButtonGroup value={dateValue} onClick={handleDateClick}>
				{schedules.map((schedule) => {
					const parsedDate = parseDate(schedule.date);
					const date = new Date(parsedDate);

					const day = date.getDate();
					const weekDay = getWeekDay(date);
					const month = getMonth(date);

					return (
						<ToggleButton value={schedule.date}>
							{weekDay}, {day} {month}
						</ToggleButton>
					);
				})}
			</ToggleButtonGroup>
		</div>
	);
};
