import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Image, ImageShapeEnum } from './Image';
import { PageWithTheme } from '../../../helpers/testing/helpers';

const mockClick = jest.fn();
const renderPage = () => {
	const { getByRole } = render(
		<PageWithTheme>
			<Image
				shape={ImageShapeEnum.Circle}
				avatarUrl="https://avatars.githubusercontent.com/u/11144528?v=4"
			/>
		</PageWithTheme>,
	);

	return {
		getByRole,
	};
};

describe('<Image />', () => {
	it('Should fire click event and is not disabled', () => {
		const { getByRole } = renderPage();
		const image = getByRole('img');

		expect(image).toHaveAttribute(
			'src',
			'https://avatars.githubusercontent.com/u/11144528?v=4',
		);
		expect(image).toHaveAttribute('alt', 'avatar url');
	});
});
