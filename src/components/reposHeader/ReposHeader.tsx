import React from 'react';
import { constants } from '../../constants';

import {
    HeaderLinks,
    LinkContainer,
    LinkStyled,
    RepoLink,
    BookIconStyled,
    PagesLinks,
    RepoStateLabel
} from './ReposHeader.styled';

export const ReposHeader = () => {
    const { repository, githubUrl, projectName } = constants;
	return (
		<LinkContainer>
            <HeaderLinks>
                <BookIconStyled />
                <strong><RepoLink href={`${githubUrl}/${repository}`}>{repository}</RepoLink></strong>
                /
                <strong><RepoLink href={`${githubUrl}/${repository}/${projectName}`}>{projectName}</RepoLink></strong>
                <RepoStateLabel>Public</RepoStateLabel>
            </HeaderLinks>
            <PagesLinks>
			    <LinkStyled to={'/'}>Issues</LinkStyled>
            </PagesLinks>
		</LinkContainer>
	);
};
