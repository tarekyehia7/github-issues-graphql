import React from 'react';
import { render } from '@testing-library/react';

import { Status, StatusEnum } from './Status';
import { PageWithTheme } from '../../../helpers/testing/helpers';

const renderPage = (status: StatusEnum) => {
	const { getByText } = render(
		<PageWithTheme>
			<Status status={status} />
		</PageWithTheme>,
	);
	return {
		getByText,
	};
};

describe('<Status />', () => {
	it('Should render open issue', async () => {
		const { getByText } = renderPage(StatusEnum.Open);

		expect(getByText('open')).toBeInTheDocument();
	});

	it('Should render Large title correctly', async () => {
		const { getByText } = renderPage(StatusEnum.Closed);

		expect(getByText('closed')).toBeInTheDocument();
	});
});
