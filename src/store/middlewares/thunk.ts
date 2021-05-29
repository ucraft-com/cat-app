import thunk                  from "redux-thunk";
import {Api}                  from "../../services";
import {ThunkAction as Thunk} from "redux-thunk";
import {Action}               from "redux";
import {State} from "../types/State";

export type ThunkAction<T = any, R= void> = Thunk<R, State, Api, Action<T>>

declare module "redux" {
    export interface Dispatch<A> {
        <R>(asyncAction: ThunkAction<A,R>): R;
    }
}


export function createThunkMiddleware(api:Api){
    return thunk.withExtraArgument(api)
}