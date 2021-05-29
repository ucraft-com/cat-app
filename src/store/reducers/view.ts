import {initialState} from "../index";
import {Actions} from "../types/Actions";

export default (state = initialState.view, action: Actions) => {
    switch (action.type) {
        case 'SELECT_CATEGORY':
            return action.payload;
        default:
            return state;
    }
}
