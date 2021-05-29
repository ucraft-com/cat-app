import {Cat, Category} from "./index";

export interface UpdateCategories {
    type: 'UPDATE_CATEGORIES',
    payload: Category[]
}

export interface UpdateCats {
    type: 'UPDATE_CATS',
    payload: Cat[]
}

export interface AddCats {
    type: 'ADD_CATS',
    payload: Cat[]
}

export interface SelectCategory {
    type: 'SELECT_CATEGORY',
    payload: number | null
}

export type Actions = UpdateCategories | UpdateCats | AddCats | SelectCategory;