import React from 'react';

import { Button, ButtonType } from '../../atoms/button/Button';
import { LinksContainer } from './Cursors.styled';

type CursorsProps = {
	previousButtonDisabled: boolean;
	nextButtonDisabled: boolean;
	pageNumber: number;
	totalPages: number;
	loadNextData: () => void;
	loadPreviousData: () => void;
};

const Cursors = ({
	loadNextData,
	previousButtonDisabled,
	nextButtonDisabled,
	pageNumber,
	totalPages,
	loadPreviousData,
}: CursorsProps) => {
	return (
		<LinksContainer>
			<Button
				onClick={loadPreviousData}
				disabled={previousButtonDisabled}
				type={ButtonType.Cursor}
			>
				{`< Previous`}
			</Button>
			<div>
				Page {pageNumber} of {totalPages}
			</div>
			<Button onClick={loadNextData} disabled={nextButtonDisabled} type={ButtonType.Cursor}>
				{`Next >`}
			</Button>
		</LinksContainer>
	);
};

export default Cursors;
