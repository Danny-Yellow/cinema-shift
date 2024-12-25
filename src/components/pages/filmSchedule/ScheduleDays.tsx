import type { ISchedule } from '@src/types';
import type { FC } from 'react';
import { ToggleButton } from '@src/components/UI/ToggleButton';
import { ToggleButtonGroup } from '@src/components/UI/ToggleButtonGroup';
import { getMonth, getWeekDay, parseDate } from '@src/helpers/index';

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
					<ToggleButton key={schedule.date} value={schedule.date}>
						{weekDay}, {day} {month}
					</ToggleButton>
				);
			})}
		</ToggleButtonGroup>
	);
};
