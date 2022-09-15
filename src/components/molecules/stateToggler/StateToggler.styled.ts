import styled from 'styled-components';

import { CorrectIcon } from '../../../icons/CorrectIcon';
import { OpenIssueIcon } from '../../../icons/OpenIssueIcon';

export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding: ${({ theme }) => theme.margins.margin4};
`;

export const Button = styled.button<{ isSelected: boolean }>`
	display: inline-flex;
	padding: ${({ theme }) => theme.margins.margin2};
	font-size: inherit;
	color: ${({ theme }) => theme.colors.black};
	text-decoration: none;
	white-space: nowrap;
	cursor: pointer;
	-webkit-user-select: none;
	user-select: none;
	background-color: transparent;
	border: 0;
	-webkit-appearance: none;
	appearance: none;
	color: ${({ isSelected, theme }) =>
		isSelected ? theme.colors.lightBlack : theme.colors.darkGray};
	${({ isSelected }) => isSelected && 'font-weight: bold;'}
`;

export const OpenIssueIconStyled = styled(OpenIssueIcon)<{ selected: boolean }>`
	fill: ${({ selected, theme }) => (selected ? theme.colors.lightBlack : theme.colors.darkGray)};
	margin-right: ${({ theme }) => theme.margins.margin2};
`;

export const CorrectIconStyled = styled(CorrectIcon)<{ selected: boolean }>`
	fill: ${({ selected, theme }) => (selected ? theme.colors.lightBlack : theme.colors.darkGray)};
	margin-right: ${({ theme }) => theme.margins.margin2};
`;
