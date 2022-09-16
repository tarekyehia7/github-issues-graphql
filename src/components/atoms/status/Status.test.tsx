import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { Status, StatusEnum } from './Status';
import { PageWithTheme } from '../../../helpers/testing/helpers';

const StatusWithTheme = ({ status }: { status: StatusEnum }) => {
	return (
		<PageWithTheme>
			<Status status={status} />
		</PageWithTheme>
	);
};

describe('<Status />', () => {
	it('Should render open issue', async () => {
		const { getByText } = render(<StatusWithTheme status={StatusEnum.Open} />);

		expect(getByText('open')).toBeInTheDocument();
	});

	it('Should render Large title correctly', async () => {
		const { getByText } = render(<StatusWithTheme status={StatusEnum.Closed} />);

		expect(getByText('closed')).toBeInTheDocument();
	});
});
