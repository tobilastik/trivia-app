import * as URLS from "./urls";
import { request } from "./requestHandler";


export const API = {
    trivia: (onResponse, data) => {
        request(onResponse, "GET", URLS.GET_TRIVIA);
    },

}