import {
        addWishListAC,
        changeWishListFilterAC,
        changeWishListTitleAC,
        removeWishListAC,
        wishListReducer
} from './wishListReducer';
import {WishesDataType, WishlistType} from '../App';
import {v1} from 'uuid';
import {addNewWishAC, removeWishAC, wishesReducer} from './wishesReducer';

test('should add new wishlist correctly', () => {
        const startState: WishesDataType = {
                ['wishlistID1']: [
                        {id: v1(), title: 'Samsung Galaxy S23', status: "usual", checked: true},
                        {id: v1(), title: 'IPhone 13 ProMax', status: 'important', checked: true},
                        {id: v1(), title: 'Xiaomi 13', status: "usual", checked: true},
                        {id: v1(), title: 'Huawei', status: "usual", checked: false},
                        {id: v1(), title: 'Iphone 14', status: 'important', checked: false}

                ],
                ['wishlistID2']: [

                        {id: v1(), title: 'Hamlet ', status: "usual", checked: true},
                        {id: v1(), title: 'The Odyssey ', status: "important", checked: true},
                        {id: v1(), title: 'Sherlock Holmes', status: "usual", checked: true},
                        {id: v1(), title: 'Don Quixote', status: "important", checked: false},
                        {id: v1(), title: 'HeadFirst JS', status: "usual", checked: false}]


        }


        const action = addNewWishAC('wishlistID1', 'usual', 'It')
        const endState = wishesReducer(startState, action)


        expect(startState['wishlistID1'].length).toBe(5)
        expect(endState['wishlistID1'].length).toBe(6)

    }
)

test('should remove necessary wish', () => {
            const startState: WishesDataType = {
                    ['wishlistID1']: [
                            {id: v1(), title: 'Samsung Galaxy S23', status: "usual", checked: true},
                            {id: v1(), title: 'IPhone 13 ProMax', status: 'important', checked: true},
                            {id: v1(), title: 'Xiaomi 13', status: "usual", checked: true},
                            {id: v1(), title: 'Huawei', status: "usual", checked: false},
                            {id: v1(), title: 'Iphone 14', status: 'important', checked: false}

                    ],
                    ['wishlistID2']: [

                            {id: v1(), title: 'Hamlet ', status: "usual", checked: true},
                            {id: v1(), title: 'The Odyssey ', status: "important", checked: true},
                            {id: v1(), title: 'Sherlock Holmes', status: "usual", checked: true},
                            {id: v1(), title: 'Don Quixote', status: "important", checked: false},
                            {id: v1(), title: 'HeadFirst JS', status: "usual", checked: false}]


            }


            const action = removeWishAC('wishlistID2', startState['wishlistID2'][3].id)
            const endState = wishesReducer(startState, action)


            expect(startState['wishlistID2'].length).toBe(5)
            expect(endState['wishlistID2'].length).toBe(4)

    }
)
