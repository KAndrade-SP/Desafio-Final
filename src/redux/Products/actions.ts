import axios from 'axios'
import { ThunkAction } from 'redux-thunk'
import { ProductsActionTypes, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from './types'
import Product from '../../types/ProductsType'
import { RootState } from '../store'

export const fetchProductsRequest = (): ProductsActionTypes => ({
    type: FETCH_PRODUCTS_REQUEST,
})

export const fetchProductsSuccess = (products: Product[]): ProductsActionTypes => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
})

export const fetchProductsFailure = (error: string): ProductsActionTypes => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
})

export const fetchProducts = (): ThunkAction<void, RootState, unknown, ProductsActionTypes> => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://run.mocky.io/v3/89a8f6fc-60ce-45e4-9d80-c8b2887982db/products')
            const products = response.data.products

            dispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                payload: products,
            })
        } catch (error) {
            dispatch({
                type: FETCH_PRODUCTS_FAILURE,
                payload: 'error',
            })
        }
    }
}
