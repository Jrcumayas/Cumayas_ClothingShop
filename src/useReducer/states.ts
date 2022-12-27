import { Product } from '../models'

export type ShopState = {
    items: Product[],
    total: number,
    handlePlaceOrder: any,
    checkOutList: any,
    handleCheckOutButton: any,
    updateCartQuantity: any,
    addItemToCart: any,
    removeItemFromCart: any
}

export type WishState = {
    itemLists: Product[],
    total: number,
    addItemToWishlist: any,
    removeItemFromWishlist: any
}

export const initialState = {
    items: [],
    total: 0,
    handlePlaceOrder: null,
    checkOutList: null,
    handleCheckOutButton: null,
    updateCartQuantity: null,
    addItemToCart: null,
    removeItemFromCart: null,
}

export const initialLists = {
    itemLists: [],
    total: 0,
    addItemToWishlist: null,
    removeItemFromWishlist: null
}