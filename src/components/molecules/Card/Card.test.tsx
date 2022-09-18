import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { Card, CardType, CardProps } from './Card';
import { PageWithTheme } from '../../../helpers/testing/helpers';

const title = 'This is card title';
const props: CardProps = {
	title: <>{title}</>,
	authorUrl: 'https://github.com/tarekyehia7',
	avatarUrl: 'https://avatars.githubusercontent.com/u/11144528?v=4',
	children: <h4>This is card body</h4>,
	type: CardType.Normal,
};

const renderPage = (cardType: CardType) => {
	const { container, getByText, getByTestId, getByRole } = render(
		<PageWithTheme>
			<Card {...props} type={cardType}>
				{props.children}
			</Card>
		</PageWithTheme>,
	);

	return {
		container,
		getByText,
		getByTestId,
		getByRole,
	};
};

describe('<Card />', () => {
	it('Should matches snapshot', () => {
		const { container } = renderPage(CardType.Normal);
		expect(container).toMatchSnapshot();
	});

	it('Should not have avatar', () => {
		const { getByTestId } = renderPage(CardType.Normal);

		expect(getByTestId('card').firstChild).not.toHaveProperty('href');
	});

	it('Should have avatar with correct url', () => {
		const { getByTestId, getByRole } = renderPage(CardType.withAvatar);

		expect(getByTestId('card').firstChild).toHaveProperty('href', props.authorUrl);
		expect(getByRole('img')).toHaveAttribute('src', props.avatarUrl);
		expect(getByRole('img')).toHaveAttribute('alt', 'avatar url');
	});

	it('Should have correct title', () => {
		const { getByText } = renderPage(CardType.withAvatar);

		expect(getByText(title)).toBeInTheDocument();
	});

	it('Should have correct body', () => {
		const { getByText } = renderPage(CardType.Normal);

		expect(getByText('This is card body')).toBeInTheDocument();
	});
});
