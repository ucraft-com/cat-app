import {Store} from 'redux';
import {State} from "../store/types/State";

const baseUrl = 'https://api.thecatapi.com/';
const catLimit = 10;

export class Api {
    constructor(protected store?: Store<State>) {
    }

    setStore(store: Store<State>) {
        this.store = store;
    }

    async fetchJson(input: RequestInfo, init: RequestInit = {}) {

        let response = await fetch(`${baseUrl}${input}`, {
            ...init,
        });

        const json = await response.json();
        if (response.status < 400) {
            return json
        }
        throw json;
    }

    async getCategories() {
        const url = 'v1/categories';
        return await this.fetchJson(url)
    }

    async getCatsByCategoryId(categoryId: number, page: number = 1) {
        const url = `v1/images/search?category_ids=${categoryId}&limit=${catLimit}&page=${page}`;
        return await this.fetchJson(url)
    }

    async getCats(page: number = 1) {
        const url = `v1/images/search?limit=${catLimit}&${page}`;
        return await this.fetchJson(url)
    }


}