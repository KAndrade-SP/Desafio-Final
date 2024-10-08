import { ProductsState, ProductsActionTypes, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from './types'

const initialState: ProductsState = {
    products: [],
    loading: false,
    error: null,
}

const productsReducer = (state = initialState, action: ProductsActionTypes): ProductsState => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return { ...state, loading: true, error: null }
        case FETCH_PRODUCTS_SUCCESS:
            return { ...state, loading: false, products: action.payload }
        case FETCH_PRODUCTS_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

export default productsReducer
