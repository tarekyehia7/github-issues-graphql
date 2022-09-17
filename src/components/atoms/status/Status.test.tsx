import React from 'react';
import { render } from '@testing-library/react';

import { Status, StatusEnum } from './Status';
import { PageWithTheme } from '../../../helpers/testing/helpers';
import { SkipIcon } from '../../../icons/SkipIcon';

const renderPage = (status: StatusEnum) => {
	const { getByText, getByTestId } = render(
		<PageWithTheme>
			<Status status={status} />
		</PageWithTheme>,
	);
	return {
		getByText,
		getByTestId,
	};
};

describe('<Status />', () => {
	it('Should render open issue', () => {
		const { getByText, getByTestId } = renderPage(StatusEnum.Open);

		expect(getByText('open')).toBeInTheDocument();
		expect(getByTestId('open-issue-icon')).toBeInTheDocument();
	});

	it('Should render Large title correctly', () => {
		const { getByText, getByTestId } = renderPage(StatusEnum.Closed);

		expect(getByText('closed')).toBeInTheDocument();
		expect(getByTestId('skip-icon')).toBeInTheDocument();
	});
});
