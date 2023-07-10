import {wishListReducer} from '../reducers/wishListReducer';
import {wishesReducer} from '../reducers/wishesReducer';
import {combineReducers, legacy_createStore} from 'redux';
import App from '../App';

export const AppRootReducer = combineReducers({
    wishList: wishListReducer,
    wishes: wishesReducer
})

export type AppRootReducerType = ReturnType<typeof AppRootReducer>

export const store = legacy_createStore(AppRootReducer)