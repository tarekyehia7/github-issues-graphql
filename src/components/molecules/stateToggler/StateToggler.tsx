import React from 'react';

import {
	ButtonsContainer,
	CorrectIconStyled,
	OpenIssueIconStyled,
	Button,
} from './StateToggler.styled';
import { StatusEnum } from '../../../types/issues';

export type StateTogglerProps = {
	status: StatusEnum;
	onStateClick: (status: StatusEnum) => void;
};

export const StateTogglerComponent = ({ status, onStateClick }: StateTogglerProps) => {
	return (
		<ButtonsContainer>
			<Button
				isSelected={status === StatusEnum.open}
				onClick={() => onStateClick(StatusEnum.open)}
			>
				<OpenIssueIconStyled selected={status === StatusEnum.open} />
				Open
			</Button>
			<Button
				isSelected={status === StatusEnum.closed}
				onClick={() => onStateClick(StatusEnum.closed)}
			>
				<CorrectIconStyled selected={status === StatusEnum.closed} />
				Closed
			</Button>
		</ButtonsContainer>
	);
};

export const StateToggler = React.memo(StateTogglerComponent);
