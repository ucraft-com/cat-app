import {State} from "../types/State";
import {createSelector} from 'reselect';

export const getState = (state: State) => state;

export const getCategories = createSelector(getState, (state) => state.categories);
export const getCatsSelector = createSelector(getState, (state) => state.cats);
export const getView = createSelector(getState, (state) => state.view);
export const getSelectedCatId = createSelector(getView, (view) => view.selectedCatId);
