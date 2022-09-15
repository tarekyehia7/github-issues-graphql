import styled from 'styled-components';
import { CloseIcon } from '../../../icons/CloseIcon';
import { SearchIcon } from '../../../icons/SearchIcon';

export const FilterContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const SearchIconStyled = styled(SearchIcon)`
	position: absolute;
	display: block;
	color: ${({ theme }) => theme.colors.darkGray};
	text-align: center;
	pointer-events: none;
	fill: ${({ theme }) => theme.colors.white};
	stroke-width: 0.1rem;
	stroke: ${({ theme }) => theme.colors.darkGray};
	margin-left: 0.3rem;
`;

export const CloseIconStyled = styled(CloseIcon)`
	width: 18px;
	height: 18px;
	padding: 1px;
	margin-right: 4px;
	fill: ${({ theme }) => theme.colors.white};
	text-align: center;
	background-color: #6e7781;
	border-radius: 6px;
`;

export const ClearSearchContainer = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	cursor: pointer;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.darkGray};
	padding-top: 1rem;
	background: transparent;
	border: none;
	&:hover {
		color: ${({ theme }) => theme.colors.blue};
		text-decoration: none;
		${CloseIconStyled} {
			background: ${({ theme }) => theme.colors.blue};
		}
	}
`;
