import React from 'react';

import {
	ButtonsContainer,
	CorrectIconStyled,
	OpenIssueIconStyled,
	Button,
} from './StateToggler.styled';
import { StatusEnum } from '../../types/issues';

type StateTogglerProps = {
	status: StatusEnum;
	onStateClick: (status: StatusEnum) => void;
};

export const StateToggler = ({ status, onStateClick }: StateTogglerProps) => {
	return (
		<ButtonsContainer>
			<Button
				isSelected={status === StatusEnum.open}
				onClick={() => onStateClick(StatusEnum.open)}
			>
				<OpenIssueIconStyled isSelected={status === StatusEnum.open} />
				Open
			</Button>
			<Button
				isSelected={status === StatusEnum.closed}
				onClick={() => onStateClick(StatusEnum.closed)}
			>
				<CorrectIconStyled isSelected={status === StatusEnum.closed} />
				Closed
			</Button>
		</ButtonsContainer>
	);
};
