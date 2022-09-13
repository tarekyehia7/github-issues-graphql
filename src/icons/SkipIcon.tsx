import React, { SVGAttributes } from 'react';

export const SkipIcon = (props: SVGAttributes<SVGElement>): JSX.Element => (
	<svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" {...props}>
		<path d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm3.28 5.78a.75.75 0 00-1.06-1.06l-5.5 5.5a.75.75 0 101.06 1.06l5.5-5.5z"></path>
	</svg>
);
