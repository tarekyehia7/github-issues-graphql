import React from 'react';
import { OpenIssueIcon } from '../../../icons/OpenIssueIcon';
import { SkipIcon } from '../../../icons/SkipIcon';

import { StatusStyled } from './Status.styled';

export enum StatusEnum {
	Open = 'open',
	Closed = 'closed',
}

export type StatusProps = {
	status: StatusEnum;
};

export const Status = ({ status }: StatusProps) => {
	return (
		<StatusStyled isOpenState={status === StatusEnum.Open}>
			{status === StatusEnum.Open ? (
				<OpenIssueIcon data-testid="open-issue-icon" />
			) : (
				<SkipIcon data-testid="skip-icon" />
			)}
			{status}
		</StatusStyled>
	);
};
