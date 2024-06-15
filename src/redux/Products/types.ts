import Product from "../../types/ProductsType"

export interface ProductsState {
    products: Product[]
    loading: boolean
    error: string | null
}

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'

interface FetchProductsRequestAction {
    type: typeof FETCH_PRODUCTS_REQUEST
}

interface FetchProductsSuccessAction {
    type: typeof FETCH_PRODUCTS_SUCCESS
    payload: Product[]
}

interface FetchProductsFailureAction {
    type: typeof FETCH_PRODUCTS_FAILURE
    payload: string
}

export type ProductsActionTypes = | FetchProductsRequestAction | FetchProductsSuccessAction | FetchProductsFailureAction