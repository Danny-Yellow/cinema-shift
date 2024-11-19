import { getMonth } from '@src/helpers/date/getMonth';
import { getWeekDay } from '@src/helpers/date/getWeekDay';
import { FC } from 'react';
import { ToggleButtonGroup } from './UI/ToggleButtonGroup';
import { ToggleButton } from './UI/ToggleButton';
import { parseDate } from '@src/helpers/date/parseDate';
import { ISchedule } from '@src/types';

interface ScheduleDaysProps {
	schedules: ISchedule[];
	value: string;
	handleClick: (newValue: string) => void;
}

export const ScheduleDays: FC<ScheduleDaysProps> = ({
	schedules,
	value,
	handleClick,
}) => {
	return (
		<ToggleButtonGroup value={value} onClick={handleClick}>
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
	);
};
