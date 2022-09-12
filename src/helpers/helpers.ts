export const getPagesNumber = (totalIssuesCount: number, issuesPerPage: number): number => {
    return Math.ceil(totalIssuesCount / issuesPerPage);
};