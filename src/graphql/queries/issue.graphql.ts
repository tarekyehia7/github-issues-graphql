import { gql } from '@apollo/client';

export const GET_ISSUE = gql`
	query GetIssue($issueId: Int!, $owner: String!, $projectName: String!) {
		repository(name: $projectName, owner: $owner) {
			issue(number: $issueId) {
				id
				bodyHTML
				title
				createdAt
				state
				author {
					login
					avatarUrl
					url
				}
				comments(first: 100) {
					edges {
						node {
							author {
								login
								avatarUrl
								url
							}
							bodyHTML
							createdAt
						}
					}
				}
			}
		}
	}
`;
