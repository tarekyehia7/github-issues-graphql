export enum StatusEnum {
	all = 'is:all',
	open = 'is:open',
	closed = 'is:closed',
}

export type QueryType = {
	repo: string;
	is: string;
	status: StatusEnum;
	in: string;
	input: string;
};
