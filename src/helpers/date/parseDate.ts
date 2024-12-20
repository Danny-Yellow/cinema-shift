export function parseDate(date: string): string {
	const [day, month, year] = date.split('.');

	const fullYear = 2000 + Number.parseInt(year);
	return `${fullYear}-${month}-${day}`;
}
