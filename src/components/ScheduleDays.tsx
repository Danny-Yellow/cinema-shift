import type { ISchedule } from '@src/types';
import type { FC } from 'react';
import { getMonth } from '@src/helpers/date/getMonth';
import { getWeekDay } from '@src/helpers/date/getWeekDay';
import { parseDate } from '@src/helpers/date/parseDate';
import { ToggleButton } from './UI/ToggleButton';
import { ToggleButtonGroup } from './UI/ToggleButtonGroup';

interface ScheduleDaysProps {
	schedules: ISchedule[];
	value: string;
	handleClick: (newValue: string) => void;
}

export const ScheduleDays: FC<ScheduleDaysProps> = ({
	handleClick,
	schedules,
	value,
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
