import { gql } from '@apollo/client';

export const GET_ISSUES = gql`
	query GetIssues($query: String!, $first: Int, $last: Int, $before: String, $after: String) {
		search(
			type: ISSUE
			query: $query
			first: $first
			last: $last
			before: $before
			after: $after
		) {
			edges {
				node {
					... on Issue {
						createdAt
						number
						title
						state
						author {
							login
							url
						}
						comments {
							totalCount
						}
					}
				}
				cursor
			}
			pageInfo {
				startCursor
				endCursor
				hasNextPage
				hasPreviousPage
			}
			issueCount
		}
	}
`;
