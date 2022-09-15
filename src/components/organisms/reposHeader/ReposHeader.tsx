import React from 'react';
import { constants } from '../../../constants';
import { Link, LinkType } from '../../atoms/link/Link';

import {
	HeaderLinks,
	LinkContainer,
	BookIconStyled,
	PagesLinks,
	RepoStateLabel,
} from './ReposHeader.styled';

export const ReposHeader = () => {
	const { repository, githubUrl, projectName } = constants;
	return (
		<LinkContainer>
			<HeaderLinks>
				<BookIconStyled />
				<strong>
                    &nbsp;
					<Link type={LinkType.NormalBlue} to={`${githubUrl}/${repository}`}> {repository} </Link>
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
			<PagesLinks>
				<Link type={LinkType.HeaderLink} to={'/'}>Issues</Link>
			</PagesLinks>
		</LinkContainer>
	);
};
