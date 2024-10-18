export function getMonth(date: Date): string {
	const months = [
		'янв',
		'фев',
		'март',
		'апр',
		'мая',
		'июн',
		'июл',
		'авг',
		'сент',
		'окт',
		'нояб',
		'дек',
	];

	return months[date.getMonth()];
}
