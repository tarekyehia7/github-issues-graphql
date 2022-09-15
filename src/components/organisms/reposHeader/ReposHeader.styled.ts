import styled from 'styled-components';
import { BookIcon } from '../../../icons/BookIcon';

export const LinkContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 3rem;
	justify-content: flex-start;
	padding: ${({ theme }) => theme.margins.margin4};
	background-color: ${({ theme }) => theme.colors.lightBlue};
`;

export const HeaderLinks = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const BookIconStyled = styled(BookIcon)`
	height: ${({ theme }) => theme.margins.margin4};
	width: ${({ theme }) => theme.margins.margin4};
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
	color: ${({ theme }) => theme.colors.darkGray};
	border-color: ${({ theme }) => theme.colors.lightGray};
`;
