import React from 'react';

import { Container } from './NoResults.styled';
import { OpenIssueIcon } from '../../../icons/OpenIssueIcon';

export const NoResults = () => {
	return (
		<Container>
			<OpenIssueIcon />

			<h3>No results matched your search.</h3>
			<p>
				You could search <a href="https://github.com/search">all of GitHub</a> or try an{' '}
				<a href="https://github.com/search/advanced">advanced search</a>.
			</p>
		</Container>
	);
};
