import styled from 'styled-components';
import { BookIcon } from '../../../icons/BookIcon';

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
