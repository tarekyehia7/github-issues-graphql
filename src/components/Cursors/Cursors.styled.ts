import styled from 'styled-components';

export const CursorLink = styled.button`
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

export const LinksContainer = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-evenly;
    align-items: center;
`;