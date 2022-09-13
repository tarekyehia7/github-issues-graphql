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
				currentTab={status === StatusEnum.open}
				onClick={() => onStateClick(StatusEnum.open)}
			>
				<OpenIssueIconStyled currentTab={status === StatusEnum.open} />
				Open
			</Button>
			<Button
				currentTab={status === StatusEnum.closed}
				onClick={() => onStateClick(StatusEnum.closed)}
			>
				<CorrectIconStyled currentTab={status === StatusEnum.closed} />
				Closed
			</Button>
		</ButtonsContainer>
	);
};
