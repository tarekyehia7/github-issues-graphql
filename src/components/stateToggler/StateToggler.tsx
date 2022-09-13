import React from 'react';
import styled from 'styled-components';

import { CorrectIcon } from '../../icons/CorrectIcon';
import { OpenIssueIcon } from '../../icons/OpenIssueIcon';
import { StatusEnum } from '../../pages/Issues/Issues';

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem;
`;

const Button = styled.button<{ currentTab: boolean}>`
    display: inline-flex;
    padding: 0.5rem;
    font-size: inherit;
    color: black;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 0;
    -webkit-appearance: none;
    appearance: none;
    color: ${({ currentTab }) => currentTab ? '#24292f' : '#57606a'};
    ${({ currentTab }) => currentTab && 'font-weight: bold;'}
`;

const OpenIssueIconStyled = styled(OpenIssueIcon)<{ currentTab: boolean }>`
    fill: ${({ currentTab }) => currentTab ? '#24292f' : '#57606a'};
    margin-right: 0.5rem;
`;

const CorrectIconStyled = styled(CorrectIcon)<{ currentTab: boolean }>`
    fill: ${({ currentTab }) => currentTab ? '#24292f' : '#57606a'};
    margin-right: 0.5rem;
`;

type StateTogglerProps = {
    status: StatusEnum;
    onStateClick: (status: StatusEnum) => void;
};

export const StateToggler = ({
    status,
    onStateClick
}: StateTogglerProps) => {

    return (
        <ButtonsContainer>
            <Button
                currentTab={status === StatusEnum.open}
                onClick={() => onStateClick(StatusEnum.open)}
            >
                <OpenIssueIconStyled currentTab={status === StatusEnum.open}/>
                Open
            </Button>
            <Button
                currentTab={status === StatusEnum.closed}
                onClick={() => onStateClick(StatusEnum.closed)}
            >
                <CorrectIconStyled  currentTab={status === StatusEnum.closed}/>
                Closed
            </Button>
        </ButtonsContainer>
    );
};