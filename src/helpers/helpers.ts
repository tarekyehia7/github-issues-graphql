export const getPagesNumber = (totalIssuesCount: number, issuesPerPage: number): number => {
    const totalPages = Math.ceil(totalIssuesCount / issuesPerPage);
    return totalPages === 0 ? 1 : Math.ceil(totalIssuesCount / issuesPerPage);
};