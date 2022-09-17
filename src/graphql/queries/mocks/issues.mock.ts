import { constants } from '../../../constants';
import { buildQuery } from '../../../helpers/queryBuilder';
import { DEFAULT_GITHUB_QUERY_BUILDER } from '../../../pages/Issues/Issues';
import { GET_ISSUES } from '../issues.graphql';

const edges = [
	{
		node: {
			createdAt: '2022-09-15T14:28:38Z',
			number: 25276,
			title: 'Bug: ',
			state: 'OPEN',
			author: {
				login: 'bogdanoliinyk',
				url: 'https://github.com/bogdanoliinyk',
				__typename: 'User',
			},
			comments: {
				totalCount: 0,
				__typename: 'IssueCommentConnection',
			},
			__typename: 'Issue',
		},
		cursor: 'Y3Vyc29yOjE=',
		__typename: 'SearchResultItemEdge',
	},
	{
		node: {
			createdAt: '2022-09-15T14:11:12Z',
			number: 25274,
			title: 'Idea: Add a console.log hint why components get remounted in StrictMode',
			state: 'OPEN',
			author: {
				login: 'nikgraf',
				url: 'https://github.com/nikgraf',
				__typename: 'User',
			},
			comments: {
				totalCount: 0,
				__typename: 'IssueCommentConnection',
			},
			__typename: 'Issue',
		},
		cursor: 'Y3Vyc29yOjI=',
		__typename: 'SearchResultItemEdge',
	},
	{
		node: {
			createdAt: '2022-09-15T12:54:43Z',
			number: 25273,
			title: 'Bug: inconsistent auto batching',
			state: 'OPEN',
			author: {
				login: 'amirqasemi74',
				url: 'https://github.com/amirqasemi74',
				__typename: 'User',
			},
			comments: {
				totalCount: 0,
				__typename: 'IssueCommentConnection',
			},
			__typename: 'Issue',
		},
		cursor: 'Y3Vyc29yOjM=',
		__typename: 'SearchResultItemEdge',
	},
	{
		node: {
			createdAt: '2022-09-15T00:14:43Z',
			number: 25269,
			title: 'Bug: ',
			state: 'OPEN',
			author: {
				login: 'Shashamura',
				url: 'https://github.com/Shashamura',
				__typename: 'User',
			},
			comments: {
				totalCount: 1,
				__typename: 'IssueCommentConnection',
			},
			__typename: 'Issue',
		},
		cursor: 'Y3Vyc29yOjQ=',
		__typename: 'SearchResultItemEdge',
	},
	{
		node: {
			createdAt: '2022-09-14T10:27:41Z',
			number: 25264,
			title: 'Add "Support Armenia" banner on reactjs.org',
			state: 'OPEN',
			author: {
				login: 'edgarkhanzadyan',
				url: 'https://github.com/edgarkhanzadyan',
				__typename: 'User',
			},
			comments: {
				totalCount: 0,
				__typename: 'IssueCommentConnection',
			},
			__typename: 'Issue',
		},
		cursor: 'Y3Vyc29yOjU=',
		__typename: 'SearchResultItemEdge',
	},
	{
		node: {
			createdAt: '2022-09-14T07:38:20Z',
			number: 25262,
			title: '[DevTools Bug]: Labels are cut off on Firefox on Linux (Fedora 36)',
			state: 'OPEN',
			author: {
				login: 'sparkbuzz',
				url: 'https://github.com/sparkbuzz',
				__typename: 'User',
			},
			comments: {
				totalCount: 2,
				__typename: 'IssueCommentConnection',
			},
			__typename: 'Issue',
		},
		cursor: 'Y3Vyc29yOjY=',
		__typename: 'SearchResultItemEdge',
	},
	{
		node: {
			createdAt: '2022-09-13T21:03:54Z',
			number: 25256,
			title: 'Feature Request: className as object or array (vue-alike)',
			state: 'OPEN',
			author: {
				login: 'rentalhost',
				url: 'https://github.com/rentalhost',
				__typename: 'User',
			},
			comments: {
				totalCount: 1,
				__typename: 'IssueCommentConnection',
			},
			__typename: 'Issue',
		},
		cursor: 'Y3Vyc29yOjc=',
		__typename: 'SearchResultItemEdge',
	},
	{
		node: {
			createdAt: '2022-09-11T18:38:28Z',
			number: 25236,
			title: 'Feature request: Add a key property to custom hooks to reset state ',
			state: 'OPEN',
			author: {
				login: 'gmoniava',
				url: 'https://github.com/gmoniava',
				__typename: 'User',
			},
			comments: {
				totalCount: 2,
				__typename: 'IssueCommentConnection',
			},
			__typename: 'Issue',
		},
		cursor: 'Y3Vyc29yOjg=',
		__typename: 'SearchResultItemEdge',
	},
	{
		node: {
			createdAt: '2022-09-09T13:25:28Z',
			number: 25218,
			title: 'Bug: <img/> renders twice in firefox with react 18',
			state: 'OPEN',
			author: {
				login: 'kapibaara',
				url: 'https://github.com/kapibaara',
				__typename: 'User',
			},
			comments: {
				totalCount: 14,
				__typename: 'IssueCommentConnection',
			},
			__typename: 'Issue',
		},
		cursor: 'Y3Vyc29yOjk=',
		__typename: 'SearchResultItemEdge',
	},
	{
		node: {
			createdAt: '2022-09-08T16:56:26Z',
			number: 25212,
			title: 'Feature Request: Event Modifiers support',
			state: 'OPEN',
			author: {
				login: 'rentalhost',
				url: 'https://github.com/rentalhost',
				__typename: 'User',
			},
			comments: {
				totalCount: 5,
				__typename: 'IssueCommentConnection',
			},
			__typename: 'Issue',
		},
		cursor: 'Y3Vyc29yOjEw',
		__typename: 'SearchResultItemEdge',
	},
];

export const issuesGraphQlMock = {
	request: {
		query: GET_ISSUES,
		variables: {
			query: buildQuery(DEFAULT_GITHUB_QUERY_BUILDER),
			first: constants.issuesPerPage,
		},
	},
	result: {
		data: {
			search: {
				edges,
				pageInfo: {
					startCursor: 'Y3Vyc29yOjE=',
					endCursor: 'Y3Vyc29yOjEw',
					hasNextPage: true,
					hasPreviousPage: false,
					__typename: 'PageInfo',
				},
				issueCount: 787,
				__typename: 'SearchResultItemConnection',
			},
		},
	},
};

export const issuesGraphQlErrorMock = {
	...issuesGraphQlMock,
	error: new Error('Oops something went wrong...'),
};
