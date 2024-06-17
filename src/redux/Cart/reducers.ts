import Product from '../../types/ProductsType'
import { ADD_TO_CART, REMOVE_FROM_CART, CartActionTypes } from './actions'

interface CartItem {
    product: Product
    quantity: number
}

interface CartState {
    items: CartItem[]
}

const initialState: CartState = {
    items: []
}

const cartReducer = (state = initialState, action: CartActionTypes): CartState => {
    switch (action.type) {

        case ADD_TO_CART:
            
            const existingItemIndex = state.items.findIndex(item => item.product.SKU === action.payload.product.SKU)

            if (existingItemIndex >= 0) {
                const updatedItems = state.items.map((item, index) =>
                    index === existingItemIndex ?
                        { ...item, quantity: item.quantity + action.payload.quantity } : item
                )
                return { ...state, items: updatedItems }
            }
            return {
                ...state,
                items: [...state.items, { product: action.payload.product, quantity: action.payload.quantity }]
            }
            
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.product.SKU !== action.payload)
            }
        default:
            return state
    }
}

export default cartReducer