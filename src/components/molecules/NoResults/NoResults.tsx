import React from 'react';

import { Container } from './NoResults.styled';
import { OpenIssueIcon } from '../../../icons/OpenIssueIcon';
import { Title, TitleSizeTypes } from '../../atoms/Title/Title';

export const NoResults = () => {
	return (
		<Container>
			<OpenIssueIcon />

			<Title titleSize={TitleSizeTypes.Medium}>No results matched your search.</Title>
			<Title titleSize={TitleSizeTypes.Paragraph}>
				You could search <a href="https://github.com/search">all of GitHub</a> or try an{' '}
				<a href="https://github.com/search/advanced">advanced search</a>.
			</Title>
		</Container>
	);
};
