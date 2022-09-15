import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button, ButtonType } from './Button';
import { PageWithTheme } from '../../testing/helpers';

const mockClick = jest.fn();
const ButtonWithTheme = () => {
	return (
		<PageWithTheme>
			<Button
				disabled={false}
				type={ButtonType.Cursor}
				onClick={mockClick}
				value="NiceButton"
			/>
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
