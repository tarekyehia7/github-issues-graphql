import React from 'react';
import styled from 'styled-components';

import { OpenIssueIcon } from '../../../icons/OpenIssueIcon';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem;
`;

export const NoResults = () => {
    return (
        <Container>
            <OpenIssueIcon />
        
            <h3>No results matched your search.</h3>
            <p>You could search <a href="https://github.com/search">all of GitHub</a> or try an <a href="https://github.com/search/advanced">advanced search</a>.</p>
        </Container>
    );
};