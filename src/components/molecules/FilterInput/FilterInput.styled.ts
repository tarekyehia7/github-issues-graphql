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
	color: #57606a;
	text-align: center;
	pointer-events: none;
	fill: #ffffff;
	stroke-width: 0.1rem;
	stroke: #57606a;
	margin-left: 0.3rem;
`;

export const CloseIconStyled = styled(CloseIcon)`
	width: 18px;
	height: 18px;
	padding: 1px;
	margin-right: 4px;
	fill: #ffffff;
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
	color: #57606a;
	padding-top: 1rem;
	background: transparent;
	border: none;
	&:hover {
		color: #0969da;
		text-decoration: none;
		${CloseIconStyled} {
			background: #0969da;
		}
	}
`;
