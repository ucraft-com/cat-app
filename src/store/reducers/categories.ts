import {initialState} from "../index";
import {Actions} from "../types/Actions";

export default (state = initialState.categories, action: Actions) => {
    switch (action.type) {
        case 'UPDATE_CATEGORIES':
            return action.payload;
        default:
            return state;
    }
}
