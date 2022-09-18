import React from 'react';

import { constants } from '../../../constants';
import { Link, LinkType } from '../../atoms/link/Link';
import { HeaderLinks, BookIconStyled, RepoStateLabel } from './ReposHeaderLinks.styled';

export const ReposHeaderLinks = () => {
	const { githubUrl, repository, projectName } = constants;

	return (
		<HeaderLinks>
			<BookIconStyled />
			<strong>
				&nbsp;
				<Link type={LinkType.NormalBlue} to={`${githubUrl}/${repository}`}>
					{' '}
					{repository}{' '}
				</Link>
				&nbsp;
			</strong>
			/
			<strong>
				&nbsp;
				<Link type={LinkType.NormalBlue} to={`${githubUrl}/${repository}/${projectName}`}>
					{projectName}
				</Link>
				&nbsp;
			</strong>
			<RepoStateLabel>Public</RepoStateLabel>
		</HeaderLinks>
	);
};
