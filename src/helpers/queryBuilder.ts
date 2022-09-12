import { StatusEnum } from "../pages/Issues/Issues";

interface Query {
    repo: string;
    input: string;
    is: string;
    in: string;
    status: StatusEnum;
}

export const buildQuery = (query: Query) => {
    return Object.entries(query)
        .reduce((str, [p, val]) => `${str}${p}:${val} `, '')
        .replace('status:', '')
        .replace('input:', '')
        .trim();
};