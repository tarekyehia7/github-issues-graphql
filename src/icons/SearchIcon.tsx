import React, { SVGAttributes } from 'react';

export const SearchIcon = (props: SVGAttributes<SVGElement>): JSX.Element => (
	<svg
		aria-hidden="true"
		height="16"
		viewBox="0 0 16 16"
		version="1.1"
		width="16"
		data-view-component="true"
		{...props}
	>
		<path d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path>
	</svg>
);
