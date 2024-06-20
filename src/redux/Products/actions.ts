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
            const response = await axios.get('http://localhost:3001/products')
            const products = response.data

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
