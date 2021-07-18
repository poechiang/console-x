import { merge } from 'lodash';
import { connect, Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

export const CHANGE_LANG = Symbol();
export const CHANGE_NAVIGATOR = Symbol();
export const CHANGE_MESSAGES = Symbol();

let store: any = null;

export const language = (state = store, { type, ...payload }: ReduxAction) => {
    if (type === CHANGE_LANG) {
        return payload.language;
    }
    return state;
};

export const navigator = (state = store, { type, ...payload }: ReduxAction) => {
    if (type === CHANGE_NAVIGATOR) {
        return merge({}, state, payload);
    }
    return state;
};
export const messages = (state = store, { type, ...payload }: ReduxAction) => {
    if (type === CHANGE_NAVIGATOR) {
        return merge({}, state, payload);
    }
    return state;
};
const initStore = (defaults: any) => {
    if (store) return store;
    store = createStore(
        combineReducers({
            language,
            navigator,
            messages,
        }),
        defaults
    );
    return store;
};
export { Provider, connect };
export default initStore;
