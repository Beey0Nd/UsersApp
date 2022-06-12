import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from "redux-thunk";
import reducer from '../reducers';
import { ActionTypes } from '../types/actions';

const stringMiddleware = () => (next: Function) => (action: ActionTypes) => {
    if (typeof action === "string") {
        return next({
            type: action
        })
    }
    return next(action)
}

const store = configureStore({
    reducer,
    middleware: [ReduxThunk, stringMiddleware],
    devTools: process.env.NODE_ENV !== 'production'});

export default store;