import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { Title, TitleSizeTypes } from './Title';
import { PageWithTheme } from '../../../helpers/testing/helpers';

const TitleWithTheme = ({ type }: { type: TitleSizeTypes }) => {
	return (
		<PageWithTheme>
			<Title titleSize={type}>Title test</Title>
		</PageWithTheme>
	);
};

describe('<Title />', () => {
	it('Should render small title correctly', async () => {
		const { getByText } = render(<TitleWithTheme type={TitleSizeTypes.Small} />);

		expect(getByText('Title test')).toBeInTheDocument();
	});

	it('Should render Large title correctly', async () => {
		const { getByText } = render(<TitleWithTheme type={TitleSizeTypes.Medium} />);

		expect(getByText('Title test')).toBeInTheDocument();
	});
});
