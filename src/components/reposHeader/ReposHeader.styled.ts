import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BookIcon } from '../../icons/BookIcon';

export const LinkStyled = styled(Link)`
	position: relative;
	text-decoration: none;
	font-weight: 600;
	color: #24292f;
	border-bottom-color: #fd8c73;
	display: flex;
	padding: 0 8px;
	font-size: 14px;
	line-height: 30px;
	color: #24292f;
	text-align: center;
	white-space: nowrap;
	cursor: pointer;
	background-color: transparent;
	border: 0;
	border-radius: 6px;
	align-items: center;
	&:after {
		position: absolute;
		right: 50%;
		bottom: calc(50% - 25px);
		width: 4rem;
		height: 2px;
		content: '';
		background: #fd8c73;
		border-radius: 6px;
		transform: translate(50%, -50%);
	}
`;

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 3rem;
    justify-content: flex-start;
    padding: 1rem;
    background-color: #f6f8fa;
`;

export const HeaderLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const RepoLink = styled.a`
    color: #0969da;
    text-decoration: none;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    &:hover {
        text-decoration: underline;
    }
`;

export const BookIconStyled = styled(BookIcon)`
    height: 1rem;
    width: 1rem;
    margin-top: 0.1rem;
`;

export const PagesLinks = styled.div`
    display: flex;
    justify-content: center;
`;

export const RepoStateLabel = styled.label`
    display: inline-flex;
    padding: 0 7px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    white-space: nowrap;
    border: 1px solid transparent;
    border-radius: 2em;
    color: #57606a;
    border-color: #d0d7de;
`;