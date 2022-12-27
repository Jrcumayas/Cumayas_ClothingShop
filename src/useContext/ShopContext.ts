import { createContext } from 'react'
import { ShopState, initialState, initialLists, WishState } from '../useReducer'

export const CartContext = createContext<ShopState>(initialState);
export const WishListContext = createContext<WishState>(initialLists);