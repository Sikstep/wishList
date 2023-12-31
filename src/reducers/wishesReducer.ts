import {WishesDataType} from '../App';
import {AddWishListACType, RemoveWishListACType, wishlistID1, wishlistID2} from './wishListReducer';
import {FilterTypeForSelect} from '../WishList';
import {v1} from 'uuid';

export const initialState = {
    [wishlistID1]: [
        {id: v1(), title: 'Samsung Galaxy S23', status: "usual", checked: true},
        {id: v1(), title: 'IPhone 13 ProMax', status: 'important', checked: true},
        {id: v1(), title: 'Xiaomi 13', status: "usual", checked: true},
        {id: v1(), title: 'Huawei', status: "usual", checked: false},
        {id: v1(), title: 'Iphone 14', status: 'important', checked: false}
    ],
    [wishlistID2]: [
        {id: v1(), title: 'Hamlet ', status: "usual", checked: true},
        {id: v1(), title: 'The Odyssey ', status: "important", checked: true},
        {id: v1(), title: 'Sherlock Holmes', status: "usual", checked: true},
        {id: v1(), title: 'Don Quixote', status: "important", checked: false},
        {id: v1(), title: 'HeadFirst JS', status: "usual", checked: false}]
}

export const wishesReducer = (state: WishesDataType, action: WishesMainType):WishesDataType => {
    switch (action.type) {
        case 'ADD-WISHLIST': {
          return   {...state, [action.payload.wishListId]: []}
        }
        case 'REMOVE-WISHLIST': {
                    delete state[action.payload.wishListId]
         return {...state}
        }
        case 'ADD-WISHES':
            const newItem = {id: v1(), title: action.payload.newValue, status: action.payload.oS, checked: false}

            return {...state, [action.payload.wishlistId]: [newItem,...state[action.payload.wishlistId]]}
        case 'REMOVE-WISHES':
            return {...state, [action.payload.wishlistID]: state[action.payload.wishlistID].filter(el => el.id !== action.payload.id)}
        case 'CHANGE-WISH-STATUS':
          return {
                ...state, [action.payload.wishlistID]: state[action.payload.wishlistID].map(el => el.id === action.payload.wishId ? {...el, checked: action.payload.statusValue} : el)
            }

        default: return state
    }


}

export type AddNewWishType = ReturnType<typeof addNewWishAC>
export const addNewWishAC = (wishlistId: string, oS: FilterTypeForSelect, newValue: string) => {
    return {
        type: 'ADD-WISHES',
        payload: {wishlistId, oS, newValue}
    } as const
}

export type RemoveWishType = ReturnType<typeof removeWishAC>
export const removeWishAC = (wishlistID: string, id: string) => {
    return {
        type: 'REMOVE-WISHES',
        payload: {wishlistID, id}
    } as const
}

export type ChangeWishStatusType = ReturnType<typeof changeWishStatusAC>
export const changeWishStatusAC = (wishlistID: string, wishId: string, statusValue: boolean) => {
    return {
        type: 'CHANGE-WISH-STATUS',
        payload: {wishlistID, wishId, statusValue}
    } as const
}

export type WishesMainType = AddWishListACType | RemoveWishListACType | AddNewWishType | RemoveWishType | ChangeWishStatusType