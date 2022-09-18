import React from 'react';
import { render } from '@testing-library/react';

import { Image, ImageShapeEnum } from './Image';
import { PageWithTheme } from '../../../helpers/testing/helpers';

const renderPage = (type: ImageShapeEnum) => {
	const { getByRole, container } = render(
		<PageWithTheme>
			<Image shape={type} avatarUrl="https://avatars.githubusercontent.com/u/11144528?v=4" />
		</PageWithTheme>,
	);

	return {
		getByRole,
		container,
	};
};

describe('<Image />', () => {
	it('Should fire click event and is not disabled', () => {
		const { getByRole } = renderPage(ImageShapeEnum.Circle);
		const image = getByRole('img');

		expect(image).toHaveAttribute(
			'src',
			'https://avatars.githubusercontent.com/u/11144528?v=4',
		);
		expect(image).toHaveAttribute('alt', 'avatar url');
	});

	it('Should return null in case of wrong type', () => {
		const { container } = renderPage('' as ImageShapeEnum);
		expect(container.firstChild).toBeNull();
	});
});
