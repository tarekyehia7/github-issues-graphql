module.exports = {
	schema: [
		{
			[process.env.REACT_APP_API_URL]: {
				headers: {
					Authorization: "Bearer " + process.env.REACT_APP_GITHUB_AUTH_TOKEN,
				},
			},
		},
	],
	documents: ["./src/graphql/**/*.graphql.ts"],
	overwrite: true,
	generates: {
		"./src/graphql/generatedTypes/graphql.ts": {
			plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
			config: {
				skipTypename: false,
				withHooks: true,
				withHOC: false,
				withComponent: false,
				apolloReactHooksImportFrom: "@apollo/client",
			},
		},
	},
};
