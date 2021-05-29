import {Cat, Category} from "../types";

export function init() {
    return (dispatch) => {
        dispatch(getCategories());
        dispatch(getCats());
    }
}

export function UpdateCategories(data: Category[]) {
    return {
        type: 'UPDATE_CATEGORIES',
        payload: data
    }
}

export function UpdateCats(data: Cat[]) {
    return {
        type: 'UPDATE_CATS',
        payload: data
    }
}

export function SelectCategory(data) {
    return {
        type: 'SELECT_CATEGORY',
        payload: data
    }
}

export function AddCats(data: Cat[]) {
    return {
        type: 'ADD_CATS',
        payload: data
    }
}

export function getCategories() {
    return async (dispatch: any, getState: any, api: any) => {
        try {
            let categories = await api.getCategories();
            dispatch(UpdateCategories(categories))
        } catch (e) {

        }
    }
}

export function getCats(page: number = 1) {
    return async (dispatch: any, getState: any, api: any) => {
        try {
            let cats = await api.getCats(page);
            dispatch(AddCats(cats))
        } catch (e) {

        }
    }
}

export function getCatsByCategory(category: number, page: number = 1) {
    return async (dispatch: any, getState: any, api: any) => {
        try {
            let cats = await api.getCatsByCategoryId(category, page);
            dispatch(AddCats(cats))
        } catch (e) {

        }
    }
}

export function updateCatsByCategory(category: number, page: number = 1) {
    return async (dispatch: any, getState: any, api: any) => {
        try {
            let cats = await api.getCatsByCategoryId(category, page);
            dispatch(UpdateCats(cats))
        } catch (e) {

        }
    }
}

export function updateCats(page: number = 1) {
    return async (dispatch: any, getState: any, api: any) => {
        try {
            let cats = await api.getCats(page);
            dispatch(UpdateCats(cats))
        } catch (e) {

        }
    }
}