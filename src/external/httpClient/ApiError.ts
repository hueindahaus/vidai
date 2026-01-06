/* istanbul ignore file */
/* eslint-disable */
import { Logger } from 'next-axiom';
import type { ApiRequestOptions } from './ApiRequestOptions';
import type { ApiResult } from './ApiResult';

export class ApiError extends Error {
    public readonly url: string;
    public readonly status: number;
    public readonly statusText: string;
    public readonly body: any;
    public readonly request: ApiRequestOptions;

    constructor(request: ApiRequestOptions, response: ApiResult, message: string) {
        super(message);
		const log = new Logger();
		log.error(message, { externalUrl: response.url, status: response.status, statusText: response.statusText, body: response.body })
        this.name = 'ApiError';
        this.url = response.url;
        this.status = response.status;
        this.statusText = response.statusText;
        this.body = response.body;
        this.request = request;
    }
}
