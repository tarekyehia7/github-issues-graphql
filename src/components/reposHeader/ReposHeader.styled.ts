import { Link } from "react-router-dom";
import styled from "styled-components";

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
		content: "";
		background: #fd8c73;
		border-radius: 6px;
		transform: translate(50%, -50%);
	}
`;

export const LinkContainer = styled.div`
	display: flex;
	height: 6rem;
	justify-content: center;
	background-color: #f6f8fa;
`;
