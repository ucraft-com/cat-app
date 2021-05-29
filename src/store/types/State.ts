import {Cat, Category} from "./index";

export interface State {
    categories: Category[],
    cats: Cat[],
    view: { selectedCatId: number | null }
}