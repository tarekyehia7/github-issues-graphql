import React from 'react';
import styled from 'styled-components';
import { CloseIcon } from '../../icons/CloseIcon';
import { SearchIcon } from '../../icons/SearchIcon';

const Input = styled.input`
    padding: 5px 26px;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    outline: none;
    width: 100%;
    background-color: #f6f8fa;
    color: #57606a;
    box-shadow: inset 0 1px 0 rgba(208,215,222,0.2);
`;

const FilterContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const SearchIconStyled = styled(SearchIcon)`
    position: absolute;
    display: block;
    color: #57606a;
    text-align: center;
    pointer-events: none;
    fill: #ffffff;
    stroke-width: 0.1rem;
    stroke: #57606a;
    margin-left: 0.3rem;
`;

const CloseIconStyled = styled(CloseIcon)`
    width: 18px;
    height: 18px;
    padding: 1px;
    margin-right: 4px;
    fill: #ffffff;
    text-align: center;
    background-color: #6e7781;
    border-radius: 6px;
`;

const ClearSearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    font-weight: 600;
    color: #57606a;
    padding-top: 1rem;
    &:hover {
        color: #0969da;
        text-decoration: none;
        ${CloseIconStyled} {
            background: #0969da;
        }
    }
`;

type FilterInputProps = {
    value: string;
    showClearHistoryText: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onClearSearchHistoryClick: () => void;
};

export const FilterInput = ({
    value,
    onChange,
    onKeyUp,
    showClearHistoryText,
    onClearSearchHistoryClick,
}: FilterInputProps) => {

    
    return (
        <>
            <FilterContainer>
                <Input
                    value={value}
                    onKeyUp={onKeyUp}
                    onChange={onChange}
                />
                <SearchIconStyled />
            </FilterContainer>
            {showClearHistoryText && 
                <ClearSearchContainer onClick={onClearSearchHistoryClick}>
                    <CloseIconStyled /> Clear current search query, filters, and sorts
                </ClearSearchContainer>
            }
        </>
    );
}