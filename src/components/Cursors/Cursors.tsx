import React from 'react';
import styled from 'styled-components';

const CursorLink = styled.button`
    color: #0969da;
    min-width: 32px;
    padding: 5px 10px;
    font-style: normal;
    line-height: 20px;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    border-radius: 6px;
    transition: border-color .2s cubic-bezier(0.3, 0, 0.5, 1);
    background-color: transparent;
    &:disabled {
        color: #8c959f;
        cursor: default;
        border-color: transparent;
        &: hover {
            border-color: transparent;
        }
    }
    &:hover {
        text-decoration: none;
        border-color: #d0d7de;
        transition-duration: .1s;
    }
`;

const LinksContainer = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-evenly;
    align-items: center;
`;

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