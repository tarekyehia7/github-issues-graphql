import React from 'react';
import { render } from '@testing-library/react';

import { Title, TitleSizeTypes } from './Title';
import { PageWithTheme } from '../../../helpers/testing/helpers';

const renderPage = (type: TitleSizeTypes) => {
	const { getByText, container } = render(
		<PageWithTheme>
			<Title titleSize={type}>Title test</Title>
		</PageWithTheme>,
	);
	return {
		getByText,
		container,
	};
};

describe('<Title />', () => {
	it('Should render small title correctly', () => {
		const { getByText } = renderPage(TitleSizeTypes.Small);

		expect(getByText('Title test')).toBeInTheDocument();
	});

	it('Should render Medium title correctly', () => {
		const { getByText } = renderPage(TitleSizeTypes.Medium);

		expect(getByText('Title test')).toBeInTheDocument();
	});

	it('Should render Large title correctly', () => {
		const { getByText } = renderPage(TitleSizeTypes.Large);

		expect(getByText('Title test')).toBeInTheDocument();
	});

	it('Should render Paragraph title correctly', () => {
		const { getByText } = renderPage(TitleSizeTypes.Paragraph);

		expect(getByText('Title test')).toBeInTheDocument();
	});

	it('Should return null in case of sending wrong title size', () => {
		const { container } = renderPage('nothing' as TitleSizeTypes);

		expect(container.firstChild).toBeNull();
	});
});
