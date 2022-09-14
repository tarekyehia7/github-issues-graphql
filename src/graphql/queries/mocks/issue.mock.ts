import { GET_ISSUE } from '../issue.graphql';

export const issueGraphQlMock = {
	request: {
		query: GET_ISSUE,
		variables: {
			issueId: 25264,
			owner: 'facebook',
			projectName: 'react',
		},
	},
	result: {
		data: {
			repository: {
				issue: {
					id: 'I_kwDOAJy2Ks5RztXW',
					bodyHTML:
						'<h3 dir="auto">Website or app</h3>\n<p dir="auto"><a href="https://codesandbox.io/s/hopeful-fog-nxqwgw" rel="nofollow">https://codesandbox.io/s/hopeful-fog-nxqwgw</a></p>\n<h3 dir="auto">Repro steps</h3>\n<p dir="auto">When using React DevTools on <strong>Firefox 104.0.1 (64-bit)</strong> on <strong>Linux (Fedora 36 with Gnome Desktop 42)</strong> the key labels on the right hand pane are cut off. See screenshot. I\'m guessing this is likely because of fonts being used on Linux are different from Windows and macOS. I haven\'t noticed this problem in Chrome at all, and I don\'t think it happens on Windows and macOS.</p>\n<p dir="auto">This only happens to editable orange/keys in the props panel, when the keys are black/read only, they render just fine.</p>\n<p dir="auto">I also noticed that React devtools doesn\'t honor the Firefox advanced font settings like the rest of devtools does. Having the ability to select a different browser monospace font will allow for a workaround to this issue.</p>\n<p dir="auto"><a target="_blank" rel="noopener noreferrer nofollow" href="https://user-images.githubusercontent.com/612695/190090608-602bd0d8-3557-492e-a2d9-59b16372f522.png"><img src="https://user-images.githubusercontent.com/612695/190090608-602bd0d8-3557-492e-a2d9-59b16372f522.png" alt="Screenshot from 2022-09-14 09-33-08" style="max-width: 100%;"></a></p>\n<h3 dir="auto">How often does this bug happen?</h3>\n<p dir="auto">Every time</p>\n<h3 dir="auto">DevTools package (automated)</h3>\n<p dir="auto"><em>No response</em></p>\n<h3 dir="auto">DevTools version (automated)</h3>\n<p dir="auto"><em>No response</em></p>\n<h3 dir="auto">Error message (automated)</h3>\n<p dir="auto"><em>No response</em></p>\n<h3 dir="auto">Error call stack (automated)</h3>\n<p dir="auto"><em>No response</em></p>\n<h3 dir="auto">Error component stack (automated)</h3>\n<p dir="auto"><em>No response</em></p>\n<h3 dir="auto">GitHub query string (automated)</h3>\n<p dir="auto"><em>No response</em></p>',
					title: '[DevTools Bug]: Labels are cut off on Firefox on Linux (Fedora 36)',
					createdAt: '2022-09-14T07:38:20Z',
					state: 'OPEN',
					author: {
						login: 'sparkbuzz',
						avatarUrl:
							'https://avatars.githubusercontent.com/u/612695?u=c84ba90b7c3a3cf4518d010ff1b7f5368d6a7ea1&v=4',
						url: 'https://github.com/sparkbuzz',
						__typename: 'User',
					},
					comments: {
						edges: [
							{
								node: {
									author: {
										login: 'github-actions',
										avatarUrl:
											'https://avatars.githubusercontent.com/in/15368?v=4',
										url: 'https://github.com/apps/github-actions',
										__typename: 'Bot',
									},
									issue: {
										bodyHTML:
											'<h3 dir="auto">Website or app</h3>\n<p dir="auto"><a href="https://codesandbox.io/s/hopeful-fog-nxqwgw" rel="nofollow">https://codesandbox.io/s/hopeful-fog-nxqwgw</a></p>\n<h3 dir="auto">Repro steps</h3>\n<p dir="auto">When using React DevTools on <strong>Firefox 104.0.1 (64-bit)</strong> on <strong>Linux (Fedora 36 with Gnome Desktop 42)</strong> the key labels on the right hand pane are cut off. See screenshot. I\'m guessing this is likely because of fonts being used on Linux are different from Windows and macOS. I haven\'t noticed this problem in Chrome at all, and I don\'t think it happens on Windows and macOS.</p>\n<p dir="auto">This only happens to editable orange/keys in the props panel, when the keys are black/read only, they render just fine.</p>\n<p dir="auto">I also noticed that React devtools doesn\'t honor the Firefox advanced font settings like the rest of devtools does. Having the ability to select a different browser monospace font will allow for a workaround to this issue.</p>\n<p dir="auto"><a target="_blank" rel="noopener noreferrer nofollow" href="https://user-images.githubusercontent.com/612695/190090608-602bd0d8-3557-492e-a2d9-59b16372f522.png"><img src="https://user-images.githubusercontent.com/612695/190090608-602bd0d8-3557-492e-a2d9-59b16372f522.png" alt="Screenshot from 2022-09-14 09-33-08" style="max-width: 100%;"></a></p>\n<h3 dir="auto">How often does this bug happen?</h3>\n<p dir="auto">Every time</p>\n<h3 dir="auto">DevTools package (automated)</h3>\n<p dir="auto"><em>No response</em></p>\n<h3 dir="auto">DevTools version (automated)</h3>\n<p dir="auto"><em>No response</em></p>\n<h3 dir="auto">Error message (automated)</h3>\n<p dir="auto"><em>No response</em></p>\n<h3 dir="auto">Error call stack (automated)</h3>\n<p dir="auto"><em>No response</em></p>\n<h3 dir="auto">Error component stack (automated)</h3>\n<p dir="auto"><em>No response</em></p>\n<h3 dir="auto">GitHub query string (automated)</h3>\n<p dir="auto"><em>No response</em></p>',
										createdAt: '2022-09-14T07:38:20Z',
										state: 'OPEN',
										title: '[DevTools Bug]: Labels are cut off on Firefox on Linux (Fedora 36)',
										__typename: 'Issue',
									},
									__typename: 'IssueComment',
								},
								__typename: 'IssueCommentEdge',
							},
							{
								node: {
									author: {
										login: 'github-actions',
										avatarUrl:
											'https://avatars.githubusercontent.com/in/15368?v=4',
										url: 'https://github.com/apps/github-actions',
										__typename: 'Bot',
									},
									issue: {
										bodyHTML:
											'<h3 dir="auto">Website or app</h3>\n<p dir="auto"><a href="https://codesandbox.io/s/hopeful-fog-nxqwgw" rel="nofollow">https://codesandbox.io/s/hopeful-fog-nxqwgw</a></p>\n<h3 dir="auto">Repro steps</h3>\n<p dir="auto">When using React DevTools on <strong>Firefox 104.0.1 (64-bit)</strong> on <strong>Linux (Fedora 36 with Gnome Desktop 42)</strong> the key labels on the right hand pane are cut off. See screenshot. I\'m guessing this is likely because of fonts being used on Linux are different from Windows and macOS. I haven\'t noticed this problem in Chrome at all, and I don\'t think it happens on Windows and macOS.</p>\n<p dir="auto">This only happens to editable orange/keys in the props panel, when the keys are black/read only, they render just fine.</p>\n<p dir="auto">I also noticed that React devtools doesn\'t honor the Firefox advanced font settings like the rest of devtools does. Having the ability to select a different browser monospace font will allow for a workaround to this issue.</p>\n<p dir="auto"><a target="_blank" rel="noopener noreferrer nofollow" href="https://user-images.githubusercontent.com/612695/190090608-602bd0d8-3557-492e-a2d9-59b16372f522.png"><img src="https://user-images.githubusercontent.com/612695/190090608-602bd0d8-3557-492e-a2d9-59b16372f522.png" alt="Screenshot from 2022-09-14 09-33-08" style="max-width: 100%;"></a></p>\n<h3 dir="auto">How often does this bug happen?</h3>\n<p dir="auto">Every time</p>\n<h3 dir="auto">DevTools package (automated)</h3>\n<p dir="auto"><em>No response</em></p>\n<h3 dir="auto">DevTools version (automated)</h3>\n<p dir="auto"><em>No response</em></p>\n<h3 dir="auto">Error message (automated)</h3>\n<p dir="auto"><em>No response</em></p>\n<h3 dir="auto">Error call stack (automated)</h3>\n<p dir="auto"><em>No response</em></p>\n<h3 dir="auto">Error component stack (automated)</h3>\n<p dir="auto"><em>No response</em></p>\n<h3 dir="auto">GitHub query string (automated)</h3>\n<p dir="auto"><em>No response</em></p>',
										createdAt: '2022-09-14T07:38:20Z',
										state: 'OPEN',
										title: '[DevTools Bug]: Labels are cut off on Firefox on Linux (Fedora 36)',
										__typename: 'Issue',
									},
									__typename: 'IssueComment',
								},
								__typename: 'IssueCommentEdge',
							},
						],
						__typename: 'IssueCommentConnection',
					},
					__typename: 'Issue',
				},
				__typename: 'Repository',
			},
		},
	},
};
