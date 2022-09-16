import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Cursors, { CursorsProps } from './Cursors';

export default {
	title: 'molecules/Cursors',
	component: Cursors,
	argTypes: {
		loadNextData: { action: 'clicked' },
		loadPreviousData: { action: 'clicked' },
	},
} as ComponentMeta<typeof Cursors>;

export const Primary: ComponentStory<typeof Cursors> = (args: CursorsProps) => {
	const [pageNumber, setPageNumber] = useState(args.pageNumber);

	useEffect(() => {
		setPageNumber(args.pageNumber);
	}, [args.pageNumber]);

	const loadNextData = () => {
		if (pageNumber <= args.totalPages) {
			setPageNumber(pageNumber + 1);
		}
	};

	const loadPreviousData = () => {
		if (pageNumber > 1) {
			setPageNumber(pageNumber - 1);
		}
	};

	return (
		<Cursors
			pageNumber={pageNumber}
			loadNextData={loadNextData}
			loadPreviousData={loadPreviousData}
			totalPages={args.totalPages}
			previousButtonDisabled={args.previousButtonDisabled}
			nextButtonDisabled={args.nextButtonDisabled}
		/>
	);
};

Primary.args = {
	pageNumber: 1,
	totalPages: 100,
	previousButtonDisabled: false,
	nextButtonDisabled: false,
};
