export function getWeekDay(date: Date) {
	const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

	return days[date.getDay()];
}
