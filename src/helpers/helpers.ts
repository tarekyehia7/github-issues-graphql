import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';

export const getPagesNumber = (totalIssuesCount: number, issuesPerPage: number): number => {
	const totalPages = Math.ceil(totalIssuesCount / issuesPerPage);
	return !totalPages ? 1 : totalPages;
};

export const formatDate = (date: string) => {
	try {
		const myDate = new Date(date);
		const myFormattedDate = formatDistanceToNowStrict(myDate, { addSuffix: true });
		return myFormattedDate;
	} catch (e) {
		console.error(e);
		return '';
	}
};
