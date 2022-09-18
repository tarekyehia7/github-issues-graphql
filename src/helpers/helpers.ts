import formatDistance from 'date-fns/formatDistance';

export const getPagesNumber = (totalIssuesCount: number, issuesPerPage: number): number => {
	const totalPages = Math.ceil(totalIssuesCount / issuesPerPage);
	return !totalPages ? 1 : totalPages;
};

export const formatDate = (date: string) => {
	try {
		const myDate = new Date(date);
		const myFormattedDate = formatDistance(myDate, new Date(), { addSuffix: true });
		return myFormattedDate;
	} catch (e) {
		console.error(e);
		return '';
	}
};
