import { AnyAction } from 'redux'
import { AuthState } from '../Auth/types'

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    error: null
}

const authReducer = (state = initialState, action: AnyAction): AuthState => {
    
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                error: null
            }
        case 'LOGIN_FAILURE':
            return {
                ...state,
                error: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                isAuthenticated: false
            }
        default:
            return state
    }
}

export default authReducer