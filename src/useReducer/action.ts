import { Product } from "../models/Product";

export enum ShopActionType {
    ADD_ITEM = 'add',
    REMOVE_ITEM = 'remove',
    UPDATE_TOTAL= 'update',
    UPDATE_QUANTITY = 'update_quantity',
    EMPTY = 'empty'
}

export type ShopAction = {
    type: ShopActionType,
    payload: any
}

export const add = (product: any) : ShopAction => ({
    type: ShopActionType.ADD_ITEM,
    payload: product
})

export const remove = (product: any) : ShopAction => ({
    type: ShopActionType.REMOVE_ITEM,
    payload: product
})

export const update = (total: number) : ShopAction => ({
    type: ShopActionType.UPDATE_TOTAL,
    payload: total
})

export const update_quantity = (product: any) : ShopAction => ({
    type: ShopActionType.UPDATE_QUANTITY,
    payload: product
})

export const emptyCart = (product: any) : ShopAction => ({
    type: ShopActionType.EMPTY,
    payload: product
})