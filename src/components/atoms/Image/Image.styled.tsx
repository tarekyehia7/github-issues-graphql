import styled from 'styled-components';

export const AvatarImg = styled.img`
	display: inline-block;
	overflow: hidden;
	line-height: 1;
	vertical-align: middle;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 6px;
	flex-shrink: 0;
	box-shadow: 0 0 0 1px #1b1f2426;
	border-radius: 50% !important;
	width: 2.5rem;
	height: 2.5rem;
`;
