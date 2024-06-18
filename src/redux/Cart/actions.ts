import Product from "../../types/ProductsType"

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

interface AddToCartAction {
    type: typeof ADD_TO_CART
    payload: { product: Product, quantity: number }
}

interface RemoveFromCartAction {
    type: typeof REMOVE_FROM_CART
    payload: string
}

export type CartActionTypes = AddToCartAction | RemoveFromCartAction

export const addToCart = (product: Product, quantity: number): CartActionTypes => ({
    type: ADD_TO_CART,
    payload: { product, quantity }
})

export const removeFromCart = (productSKU: string): CartActionTypes => ({
    type: REMOVE_FROM_CART,
    payload: productSKU
})