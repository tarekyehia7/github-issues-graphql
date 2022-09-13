import React from 'react';
import styled from 'styled-components';

import { GithubIcon } from '../../icons/GithubIcon';

const GithubIco = styled(GithubIcon)`
    height: 2.5rem;
    width: 2.5rem;
    fill: #ffffff;
    margin: 1rem;
`;

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    background-color: #24292f;
`;

export const Header = () => {
    return (
        <StyledHeader>
            <GithubIco />
        </StyledHeader>
    );
};