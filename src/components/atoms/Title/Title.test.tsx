import React from 'react';
import { render } from '@testing-library/react';

import { Title, TitleSizeTypes } from './Title';
import { PageWithTheme } from '../../../helpers/testing/helpers';

const renderPage = (type: TitleSizeTypes) => {
	const { getByText } = render(
		<PageWithTheme>
			<Title titleSize={type}>Title test</Title>
		</PageWithTheme>,
	);
	return {
		getByText,
	};
};

describe('<Title />', () => {
	it('Should render small title correctly', async () => {
		const { getByText } = renderPage(TitleSizeTypes.Small);

		expect(getByText('Title test')).toBeInTheDocument();
	});

	it('Should render Large title correctly', async () => {
		const { getByText } = renderPage(TitleSizeTypes.Medium);

		expect(getByText('Title test')).toBeInTheDocument();
	});
});
