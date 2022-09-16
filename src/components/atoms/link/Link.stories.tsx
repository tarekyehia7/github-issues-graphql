import React, { PropsWithChildren } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { Link, LinkType, LinkProps } from './Link';

export default {
	title: 'atoms/Link',
	component: Link,
	decorators: [withRouter],
	argTypes: {
		type: {
			options: Object.values(LinkType),
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof Link>;

export const Primary: ComponentStory<typeof Link> = (args: LinkProps & PropsWithChildren) => {
	return <Link {...args}>{args.children}</Link>;
};

Primary.args = {
	to: '/test',
	type: LinkType.Normal,
	children: 'test',
};
