import React, { SVGAttributes } from "react";

export const OpenIssueIcon = (props: SVGAttributes<SVGElement>): JSX.Element => (
	<svg
		aria-hidden="true"
		height="16"
		viewBox="0 0 16 16"
		version="1.1"
		width="16"
		data-view-component="true"
		{...props}
	>
		<path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
		<path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
	</svg>
);
