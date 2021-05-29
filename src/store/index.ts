import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import {Api} from "../services";
import {createThunkMiddleware} from "./middlewares/thunk";
import {init} from "./actions";
import {State} from "./types/State";
import categories from "./reducers/categories";
import cats from "./reducers/cats";
import view from "./reducers/view";

export function configureStore() {
    const api = new Api();
    const thunk = createThunkMiddleware(api);
    const reducers = combineReducers({
        categories,
        cats,
        view
    });
    const composeEnhancers = (
        (process.env.NODE_ENV !== 'production' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ?
            (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                name: 'CatApp', actionsBlacklist: ['REDUX_STORAGE_SAVE']
            }) : compose
    );

    const store = createStore(
        reducers,
        composeEnhancers(
            applyMiddleware(thunk),
        ));

    api.setStore(store as any);
    store.dispatch(init() as any);

    return store;
}

export const initialState: State = {
    categories: [],
    cats: [],
    view: {selectedCatId: null}
};
