import { GET_ISSUE } from '../issue.graphql';

let todayDate: Date | string = new Date();
todayDate.setHours(todayDate.getHours() - 1);
todayDate = todayDate.toISOString();

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
					id: 'I_kwDOAJy2Ks5Rh2Fa',
					bodyHTML:
						'\n<p dir="auto">React version: 18.2.0</p>\n<h2 dir="auto">Steps To Reproduce</h2>\n<ol dir="auto">\n<li>Insert a tag  <code class="notranslate">&lt;img/&gt;</code> with src</li>\n<li>Go to <strong>Firefox</strong> inspect tool to the tab network</li>\n<li>Reload the page and watch image request in network</li>\n</ol>\n\n<p dir="auto">Link to code example: <a href="https://codesandbox.io/s/unruffled-jerry-9hli44?file=/src/App.js" rel="nofollow">https://codesandbox.io/s/unruffled-jerry-9hli44?file=/src/App.js</a></p>\n\n<h2 dir="auto">The current behavior</h2>\n<p dir="auto">There are two request for image in firefox, image renders twice<br>\n<a target="_blank" rel="noopener noreferrer nofollow" href="https://user-images.githubusercontent.com/41840872/189360604-c1f1451a-be7f-497d-b9db-9d18f98af607.png"><img width="1792" alt="image" src="https://user-images.githubusercontent.com/41840872/189360604-c1f1451a-be7f-497d-b9db-9d18f98af607.png" style="max-width: 100%;"></a></p>\n<h2 dir="auto">The expected behavior</h2>\n<p dir="auto">There is one request and one render in firefox</p>',
					title: 'Bug: <img/> renders twice in firefox with react 18',
					createdAt: todayDate,
					state: 'OPEN',
					author: {
						login: 'kapibaara',
						avatarUrl: 'https://avatars.githubusercontent.com/u/41840872?v=4',
						url: 'https://github.com/kapibaara',
						__typename: 'User',
					},
					comments: {
						edges: [
							{
								node: {
									author: {
										login: 'MiguelMachado-dev',
										avatarUrl:
											'https://avatars.githubusercontent.com/u/29252011?u=ababd38859887c5e1854f1c48dfc94787ae91724&v=4',
										url: 'https://github.com/MiguelMachado-dev',
										__typename: 'User',
									},
									bodyHTML:
										'<p dir="auto">It really happens, even on Chrome/Edge. But I think this is due to StrictMode. Could please try deleting StrictMode on <code class="notranslate">index.js</code>?</p>\n<p dir="auto">It will look like this.</p>\n<div class="highlight highlight-source-js notranslate position-relative overflow-auto" dir="auto" data-snippet-clipboard-copy-content="root.render(&lt;App /&gt;);"><pre><span class="pl-s1">root</span><span class="pl-kos">.</span><span class="pl-en">render</span><span class="pl-kos">(</span><span class="pl-c1">&lt;</span><span class="pl-ent">App</span> <span class="pl-c1">/</span><span class="pl-c1">&gt;</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre></div>\n<p dir="auto">On StrictMode react render twice. <a href="https://reactjs.org/docs/strict-mode.html" rel="nofollow">https://reactjs.org/docs/strict-mode.html</a></p>\n<blockquote>\n<p dir="auto">StrictMode renders components twice (on dev but not production) in order to detect any problems with your code and warn you about them</p>\n</blockquote>',
									createdAt: todayDate,
									__typename: 'IssueComment',
								},
								__typename: 'IssueCommentEdge',
							},
							{
								node: {
									author: {
										login: 'kapibaara',
										avatarUrl:
											'https://avatars.githubusercontent.com/u/41840872?v=4',
										url: 'https://github.com/kapibaara',
										__typename: 'User',
									},
									bodyHTML:
										'<blockquote>\n<p dir="auto">It really happens, even on Chrome/Edge. But I think this is due to StrictMode. Could please try deleting StrictMode on <code class="notranslate">index.js</code>?</p>\n<p dir="auto">It will look like this.</p>\n<div class="highlight highlight-source-js notranslate position-relative overflow-auto" dir="auto" data-snippet-clipboard-copy-content="root.render(&lt;App /&gt;);"><pre><span class="pl-s1">root</span><span class="pl-kos">.</span><span class="pl-en">render</span><span class="pl-kos">(</span><span class="pl-c1">&lt;</span><span class="pl-ent">App</span> <span class="pl-c1">/</span><span class="pl-c1">&gt;</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre></div>\n<p dir="auto">On StrictMode react render twice. <a href="https://reactjs.org/docs/strict-mode.html" rel="nofollow">https://reactjs.org/docs/strict-mode.html</a></p>\n<blockquote>\n<p dir="auto">StrictMode renders components twice (on dev but not production) in order to detect any problems with your code and warn you about them</p>\n</blockquote>\n</blockquote>\n<p dir="auto">it doesn\'t help, in my example in codesandbox I tried to remove StrictMode, but the behavior is the same, there are two requests in network tab<br>\nАnd on Chrome, if you open this <a href="https://c1i5n8.csb.app/" rel="nofollow">https://c1i5n8.csb.app/</a> there are no two requests in network tab</p>',
									createdAt: todayDate,
									__typename: 'IssueComment',
								},
								__typename: 'IssueCommentEdge',
							},
							{
								node: {
									author: {
										login: 'MiguelMachado-dev',
										avatarUrl:
											'https://avatars.githubusercontent.com/u/29252011?u=ababd38859887c5e1854f1c48dfc94787ae91724&v=4',
										url: 'https://github.com/MiguelMachado-dev',
										__typename: 'User',
									},
									bodyHTML:
										'<p dir="auto">There is, check <a href="https://codesandbox.io/s/unruffled-jerry-9hli44?file=/src/index.js" rel="nofollow">https://codesandbox.io/s/unruffled-jerry-9hli44?file=/src/index.js</a><br>\nOn Edge and Firefox I still getting 2 requests, disabling strict-mode it stops.</p>',
									createdAt: todayDate,
									__typename: 'IssueComment',
								},
								__typename: 'IssueCommentEdge',
							},
							{
								node: {
									author: {
										login: 'sigorilla',
										avatarUrl:
											'https://avatars.githubusercontent.com/u/1208639?u=c531dee3f3f7cdb9657a78c54bbea4081f327158&v=4',
										url: 'https://github.com/sigorilla',
										__typename: 'User',
									},
									bodyHTML:
										'<p dir="auto"><a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/MiguelMachado-dev/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/MiguelMachado-dev">@MiguelMachado-dev</a>, Just check this example (without <code class="notranslate">StrictMode</code>): <a href="https://codesandbox.io/s/goofy-stonebraker-pf0wg7?file=/src/index.js" rel="nofollow">https://codesandbox.io/s/goofy-stonebraker-pf0wg7?file=/src/index.js</a> (<a href="https://pf0wg7.csb.app/" rel="nofollow">https://pf0wg7.csb.app/</a>)</p>\n<p dir="auto">And there is screenshot with two requests:</p>\n<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/1208639/189645667-bd18813b-8f6d-4987-b3af-621298bd1aff.png"><img width="1730" alt="image" src="https://user-images.githubusercontent.com/1208639/189645667-bd18813b-8f6d-4987-b3af-621298bd1aff.png" style="max-width: 100%;"></a></p>\n<p dir="auto">What i\'m doing wrong?</p>',
									createdAt: todayDate,
									__typename: 'IssueComment',
								},
								__typename: 'IssueCommentEdge',
							},
							{
								node: {
									author: {
										login: 'MiguelMachado-dev',
										avatarUrl:
											'https://avatars.githubusercontent.com/u/29252011?u=ababd38859887c5e1854f1c48dfc94787ae91724&v=4',
										url: 'https://github.com/MiguelMachado-dev',
										__typename: 'User',
									},
									bodyHTML:
										'<p dir="auto">Not sure, it does not happen to me. We should then wait for more people to see this. It only happen to me when using StrictMode.</p>\n<p dir="auto">Edge:<br>\n<a target="_blank" rel="noopener noreferrer nofollow" href="https://user-images.githubusercontent.com/29252011/189654466-3c90adf7-6b5f-4ff7-9655-61be91455a63.png"><img width="959" alt="image" src="https://user-images.githubusercontent.com/29252011/189654466-3c90adf7-6b5f-4ff7-9655-61be91455a63.png" style="max-width: 100%;"></a></p>\n<p dir="auto">Firefox:<br>\n<a target="_blank" rel="noopener noreferrer nofollow" href="https://user-images.githubusercontent.com/29252011/189654925-a59a5c23-685f-4aca-a9c7-7d278a569de6.png"><img width="1920" alt="image" src="https://user-images.githubusercontent.com/29252011/189654925-a59a5c23-685f-4aca-a9c7-7d278a569de6.png" style="max-width: 100%;"></a></p>\n<p dir="auto">Both browsers up to date.</p>',
									createdAt: todayDate,
									__typename: 'IssueComment',
								},
								__typename: 'IssueCommentEdge',
							},
							{
								node: {
									author: {
										login: 'arpitj007',
										avatarUrl:
											'https://avatars.githubusercontent.com/u/60127884?v=4',
										url: 'https://github.com/arpitj007',
										__typename: 'User',
									},
									bodyHTML:
										'<p dir="auto">It really is an issue. Where can we find the root cause of this problem?</p>',
									createdAt: todayDate,
									__typename: 'IssueComment',
								},
								__typename: 'IssueCommentEdge',
							},
							{
								node: {
									author: {
										login: 'arpitj007',
										avatarUrl:
											'https://avatars.githubusercontent.com/u/60127884?v=4',
										url: 'https://github.com/arpitj007',
										__typename: 'User',
									},
									bodyHTML:
										'<p dir="auto"><a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/MiguelMachado-dev/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/MiguelMachado-dev">@MiguelMachado-dev</a> How can I contribute to fixing this bug?</p>',
									createdAt: todayDate,
									__typename: 'IssueComment',
								},
								__typename: 'IssueCommentEdge',
							},
							{
								node: {
									author: {
										login: 'MiguelMachado-dev',
										avatarUrl:
											'https://avatars.githubusercontent.com/u/29252011?u=ababd38859887c5e1854f1c48dfc94787ae91724&v=4',
										url: 'https://github.com/MiguelMachado-dev',
										__typename: 'User',
									},
									bodyHTML:
										'<blockquote>\n<p dir="auto"><a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/MiguelMachado-dev/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/MiguelMachado-dev">@MiguelMachado-dev</a> How can I contribute to fixing this bug?</p>\n</blockquote>\n<p dir="auto">Do you know how to fix it?</p>\n<p dir="auto">If you know, you can fork the project and open a PR. Or a solution, you can comment here how he can fix it properly.</p>',
									createdAt: todayDate,
									__typename: 'IssueComment',
								},
								__typename: 'IssueCommentEdge',
							},
							{
								node: {
									author: {
										login: 'sult4novars',
										avatarUrl:
											'https://avatars.githubusercontent.com/u/98759712?u=5b07346681e52b12ce7007d3a35806f102305ea8&v=4',
										url: 'https://github.com/sult4novars',
										__typename: 'User',
									},
									bodyHTML:
										'<p dir="auto">Hi! I repeated this case in <a href="https://codesandbox.io/" rel="nofollow">https://codesandbox.io/</a> with clean HTML and get same result, then I try same code with corgi in <a href="https://codepen.io/sult4novars/pen/NWMRzRX" rel="nofollow">https://codepen.io/sult4novars/pen/NWMRzRX</a>  and get one request)</p>',
									createdAt: todayDate,
									__typename: 'IssueComment',
								},
								__typename: 'IssueCommentEdge',
							},
							{
								node: {
									author: {
										login: 'sigorilla',
										avatarUrl:
											'https://avatars.githubusercontent.com/u/1208639?u=c531dee3f3f7cdb9657a78c54bbea4081f327158&v=4',
										url: 'https://github.com/sigorilla',
										__typename: 'User',
									},
									bodyHTML:
										'<p dir="auto">Maybe it depends on OS? I have MacOS 12 (M1), Firefox 104.0.2</p>\n<p dir="auto">And I reproduced it on codepen: <a href="https://codepen.io/sult4novars/pen/NWMRzRX" rel="nofollow">https://codepen.io/sult4novars/pen/NWMRzRX</a></p>',
									createdAt: todayDate,
									__typename: 'IssueComment',
								},
								__typename: 'IssueCommentEdge',
							},
							{
								node: {
									author: {
										login: 'sult4novars',
										avatarUrl:
											'https://avatars.githubusercontent.com/u/98759712?u=5b07346681e52b12ce7007d3a35806f102305ea8&v=4',
										url: 'https://github.com/sult4novars',
										__typename: 'User',
									},
									bodyHTML:
										'<blockquote>\n<p dir="auto">Maybe it depends on OS? I have MacOS 12 (M1), Firefox 104.0.2</p>\n<p dir="auto">And I reproduced it on codepen: <a href="https://codepen.io/sult4novars/pen/NWMRzRX" rel="nofollow">https://codepen.io/sult4novars/pen/NWMRzRX</a></p>\n</blockquote>\n<p dir="auto">i have same params  MacOS 12.6 (M1, 8gb ), Firefox 104.0.2</p>\n<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/98759712/189886105-eabc296d-ccb0-43a6-b95d-e452babd031f.png"><img width="1425" alt="image" src="https://user-images.githubusercontent.com/98759712/189886105-eabc296d-ccb0-43a6-b95d-e452babd031f.png" style="max-width: 100%;"></a></p>',
									createdAt: todayDate,
									__typename: 'IssueComment',
								},
								__typename: 'IssueCommentEdge',
							},
							{
								node: {
									author: {
										login: 'sult4novars',
										avatarUrl:
											'https://avatars.githubusercontent.com/u/98759712?u=5b07346681e52b12ce7007d3a35806f102305ea8&v=4',
										url: 'https://github.com/sult4novars',
										__typename: 'User',
									},
									bodyHTML:
										'<blockquote>\n<p dir="auto">Maybe it depends on OS? I have MacOS 12 (M1), Firefox 104.0.2</p>\n<p dir="auto">And I reproduced it on codepen: <a href="https://codepen.io/sult4novars/pen/NWMRzRX" rel="nofollow">https://codepen.io/sult4novars/pen/NWMRzRX</a></p>\n</blockquote>\n<p dir="auto">ooo I reproduced to but when I reload page this case not reproduced<br>\nbut i check status and see NS_BINDING_ABORTED and search this status, and what I found <a href="https://stackoverflow.com/questions/704561/ns-binding-aborted-shown-in-firefox-with-httpfox" rel="nofollow">https://stackoverflow.com/questions/704561/ns-binding-aborted-shown-in-firefox-with-httpfox</a></p>',
									createdAt: todayDate,
									__typename: 'IssueComment',
								},
								__typename: 'IssueCommentEdge',
							},
							{
								node: {
									author: {
										login: 'sult4novars',
										avatarUrl:
											'https://avatars.githubusercontent.com/u/98759712?u=5b07346681e52b12ce7007d3a35806f102305ea8&v=4',
										url: 'https://github.com/sult4novars',
										__typename: 'User',
									},
									bodyHTML:
										'<blockquote>\n<p dir="auto">Maybe it depends on OS? I have MacOS 12 (M1), Firefox 104.0.2</p>\n<p dir="auto">And I reproduced it on codepen: <a href="https://codepen.io/sult4novars/pen/NWMRzRX" rel="nofollow">https://codepen.io/sult4novars/pen/NWMRzRX</a></p>\n</blockquote>\n<p dir="auto">try with new image <a href="https://codepen.io/sult4novars/pen/NWMRzRX" rel="nofollow">https://codepen.io/sult4novars/pen/NWMRzRX</a></p>\n<p dir="auto">when I first reload:<br>\n<a target="_blank" rel="noopener noreferrer nofollow" href="https://user-images.githubusercontent.com/98759712/189889657-dfe86d67-76db-44a7-bf2e-8bf21944fa20.png"><img width="1203" alt="image" src="https://user-images.githubusercontent.com/98759712/189889657-dfe86d67-76db-44a7-bf2e-8bf21944fa20.png" style="max-width: 100%;"></a></p>\n<p dir="auto">when i try to reload many times<br>\n<a target="_blank" rel="noopener noreferrer nofollow" href="https://user-images.githubusercontent.com/98759712/189889806-3ab35744-7cc0-461a-8abd-46b03093b8b2.png"><img width="1313" alt="image" src="https://user-images.githubusercontent.com/98759712/189889806-3ab35744-7cc0-461a-8abd-46b03093b8b2.png" style="max-width: 100%;"></a></p>',
									createdAt: todayDate,
									__typename: 'IssueComment',
								},
								__typename: 'IssueCommentEdge',
							},
							{
								node: {
									author: {
										login: 'kapibaara',
										avatarUrl:
											'https://avatars.githubusercontent.com/u/41840872?v=4',
										url: 'https://github.com/kapibaara',
										__typename: 'User',
									},
									bodyHTML:
										'<p dir="auto">when i try my example with react 17, there are not two requests in firefox<br>\n<a href="https://codesandbox.io/s/wizardly-lena-yobcgz?file=/src/index.js" rel="nofollow">https://codesandbox.io/s/wizardly-lena-yobcgz?file=/src/index.js</a></p>',
									createdAt: todayDate,
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

export const issueGraphQlErrorMock = {
	...issueGraphQlMock,
	error: new Error('Oops something went wrong...'),
};
