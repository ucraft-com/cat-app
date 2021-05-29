import {initialState} from "../index";
import {Actions} from "../types/Actions";

export default (state = initialState.cats, action: Actions) => {
    switch (action.type) {
        case 'ADD_CATS':
            return action.payload;
        case 'UPDATE_CATS':
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state;
    }
}
