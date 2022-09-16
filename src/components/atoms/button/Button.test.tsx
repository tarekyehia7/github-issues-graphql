import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { Button, ButtonType } from './Button';
import { PageWithTheme } from '../../../helpers/testing/helpers';

const mockClick = jest.fn();
const ButtonWithTheme = () => {
	return (
		<PageWithTheme>
			<Button disabled={false} type={ButtonType.Cursor} onClick={mockClick}>
				NiceButton
			</Button>
		</PageWithTheme>
	);
};

describe('<Button />', () => {
	it('Should fire click event', async () => {
		const { getByText } = render(<ButtonWithTheme />);

		fireEvent.click(getByText('NiceButton'));
		expect(mockClick.mock.calls.length).toBe(1);
	});

	// it('Should match snapshot', async() => {
	//     const domTree = await renderer.create(<ButtonWithTheme />).toJSON();
	//     expect(domTree).toMatchSnapshot();
	// });
});
