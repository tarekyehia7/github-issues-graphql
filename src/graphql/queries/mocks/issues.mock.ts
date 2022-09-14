import { constants } from '../../../constants';
import { buildQuery } from '../../../helpers/queryBuilder';
import { DEFAULT_GITHUB_QUERY_BUILDER } from '../../../pages/Issues/Issues';
import { GET_ISSUES } from '../issues.graphql';

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
				edges: [
					{
						node: {
							createdAt: '2022-09-13T13:30:14Z',
							number: 25250,
							title: 'Error',
							state: 'OPEN',
							author: {
								login: 'wansingcheng',
								url: 'https://github.com/wansingcheng',
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
						cursor: 'Y3Vyc29yOjI=',
						__typename: 'SearchResultItemEdge',
					},
					{
						node: {
							createdAt: '2022-09-09T22:42:43Z',
							number: 25228,
							title: "[DevTools Bug]: React extension tab in Edge DevTools doesn't have emoji prefix in title.",
							state: 'OPEN',
							author: {
								login: 'yanlingwang23',
								url: 'https://github.com/yanlingwang23',
								__typename: 'User',
							},
							comments: {
								totalCount: 1,
								__typename: 'IssueCommentConnection',
							},
							__typename: 'Issue',
						},
						cursor: 'Y3Vyc29yOjM=',
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
						cursor: 'Y3Vyc29yOjQ=',
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
						cursor: 'Y3Vyc29yOjU=',
						__typename: 'SearchResultItemEdge',
					},
					{
						node: {
							createdAt: '2022-09-07T19:50:49Z',
							number: 25205,
							title: 'Bug: exhaustive-deps false positives?',
							state: 'OPEN',
							author: {
								login: 'jaymzh',
								url: 'https://github.com/jaymzh',
								__typename: 'User',
							},
							comments: {
								totalCount: 0,
								__typename: 'IssueCommentConnection',
							},
							__typename: 'Issue',
						},
						cursor: 'Y3Vyc29yOjY=',
						__typename: 'SearchResultItemEdge',
					},
					{
						node: {
							createdAt: '2022-09-07T15:33:59Z',
							number: 25201,
							title: 'Bug: Latest Chrome extension is not working with React Developer Tools',
							state: 'OPEN',
							author: {
								login: 'alyshahudson',
								url: 'https://github.com/alyshahudson',
								__typename: 'User',
							},
							comments: {
								totalCount: 0,
								__typename: 'IssueCommentConnection',
							},
							__typename: 'Issue',
						},
						cursor: 'Y3Vyc29yOjc=',
						__typename: 'SearchResultItemEdge',
					},
					{
						node: {
							createdAt: '2022-09-06T23:59:02Z',
							number: 25196,
							title: 'Bug: iframe `src` attribute set incorrectly in jsx',
							state: 'OPEN',
							author: {
								login: 'zachsiegel-capsida',
								url: 'https://github.com/zachsiegel-capsida',
								__typename: 'User',
							},
							comments: {
								totalCount: 3,
								__typename: 'IssueCommentConnection',
							},
							__typename: 'Issue',
						},
						cursor: 'Y3Vyc29yOjg=',
						__typename: 'SearchResultItemEdge',
					},
					{
						node: {
							createdAt: '2022-09-06T14:03:24Z',
							number: 25194,
							title: 'Bug: `onBlur` is not called when a focused element is unmounted',
							state: 'OPEN',
							author: {
								login: 'ling1726',
								url: 'https://github.com/ling1726',
								__typename: 'User',
							},
							comments: {
								totalCount: 0,
								__typename: 'IssueCommentConnection',
							},
							__typename: 'Issue',
						},
						cursor: 'Y3Vyc29yOjk=',
						__typename: 'SearchResultItemEdge',
					},
					{
						node: {
							createdAt: '2022-09-06T09:18:14Z',
							number: 25192,
							title: "Bug: ErrorBoundary won't caught error in useEffect callback while ErrorBoundary unmount with it's children",
							state: 'OPEN',
							author: {
								login: 'Chen-jj',
								url: 'https://github.com/Chen-jj',
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
				],
				pageInfo: {
					startCursor: 'Y3Vyc29yOjE=',
					endCursor: 'Y3Vyc29yOjEw',
					hasNextPage: true,
					hasPreviousPage: false,
					__typename: 'PageInfo',
				},
				issueCount: 781,
				__typename: 'SearchResultItemConnection',
			},
		},
	},
};
