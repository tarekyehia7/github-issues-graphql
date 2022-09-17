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
	const { container, getByText, getByTestId } = render(
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
	};
};

describe('<Card />', () => {
	it('Should matches snapshot', async () => {
		const { container } = renderPage(CardType.Normal);
		expect(container).toMatchSnapshot();
	});

	it('should not have avatar', async () => {
		const { getByTestId } = renderPage(CardType.Normal);

		expect(getByTestId('card').firstChild).not.toHaveProperty('href');
	});

	it('should not have avatar', async () => {
		const { getByTestId } = renderPage(CardType.withAvatar);

		expect(getByTestId('card').firstChild).toHaveProperty('href');
		expect(getByTestId('card').firstChild).toHaveProperty('href', props.authorUrl);
	});

	it('should have correct title', async () => {
		const { getByText } = renderPage(CardType.withAvatar);

		expect(getByText(title)).toBeInTheDocument();
	});
});
