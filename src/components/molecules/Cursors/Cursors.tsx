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
				value={`< Previous`}
				onClick={loadPreviousData}
				disabled={previousButtonDisabled}
				type={ButtonType.Cursor}
			/>
			<div>
				Page {pageNumber} of {totalPages}
			</div>
			<Button
				value={`Next >`}
				onClick={loadNextData}
				disabled={nextButtonDisabled}
				type={ButtonType.Cursor}
			/>
		</LinksContainer>
	);
};

export default Cursors;
