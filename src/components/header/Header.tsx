import React from 'react';
import styled from 'styled-components';

import { GithubIcon } from '../../icons/GithubIcon';

const GithubIco = styled(GithubIcon)`
    height: 2rem;
    width: 2rem;
`;

const StyledHeader = styled.header`
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    padding-bottom: 4rem;
`;

export const Header = () => {
    return (
        <StyledHeader>
            <GithubIco />
        </StyledHeader>
    );
};