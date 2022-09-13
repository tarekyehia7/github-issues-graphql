import React from 'react';

import { CursorLink, LinksContainer } from './Cursors.styled';

type CursorsProps = {
    previousButtonDisabled: boolean;
    nextButtonDisabled: boolean;
    pageNumber: number;
    totalPages: number;
    loadNextData: () => void;
    loadPreviousData: () => void;
};

const Cursors = ({ loadNextData, previousButtonDisabled, nextButtonDisabled, pageNumber, totalPages, loadPreviousData }: CursorsProps) => {
    
    
    return (
        <LinksContainer>
            <CursorLink
                onClick={loadPreviousData}
                disabled={previousButtonDisabled}
            >
                {`< Previous`}
            </CursorLink>
            <div>
                Page {pageNumber} of {totalPages}
            </div>
            <CursorLink
                onClick={loadNextData}
                disabled={nextButtonDisabled}
            >
                {`Next >`}
            </CursorLink>
        </LinksContainer>
    );
};

export default Cursors