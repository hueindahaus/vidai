/* eslint-disable */
import { invariant } from "../../utils/invariant"
import { ApiConfig } from "../httpClient/ApiConfig"

const apiKey = process.env["INSTAGRAM_ACCESS_TOKEN"]
invariant(apiKey, "Instagram apiKey must be defined")


export const apiConfig = {
	VERSION: "1.0.0",
    	BASE: "graph.instagram.com",
	WITH_CREDENTIALS: false,
	CREDENTIALS: "omit",
	TOKEN: apiKey,
	USERNAME: undefined,
	PASSWORD: undefined,
	ENCODE_PATH: undefined,
	HEADERS: {},
} satisfies Partial<ApiConfig>
