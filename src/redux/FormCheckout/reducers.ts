import { AnyAction } from 'redux'
import { FORM_SUBMIT_FAILURE, FORM_SUBMIT_SUCCESS } from './types'
import { FormData } from '../../types/CheckOutValidations'

export interface FormState extends FormData {
    errors?: string[]
}

const initialState: FormState = {
    firstName: '',
    lastName: '',
    companyName: '',
    zipCode: '',
    countryRegion: '',
    streetAddress: '',
    city: '',
    province: '',
    addOnAddress: '',
    addInfo: '',
    email: ''
}

const formCheckOutReducer = (state = initialState, action: AnyAction): FormState => {
    switch (action.type) {
        case FORM_SUBMIT_SUCCESS:
            return {
                ...state,
                ...action.payload,
                errors: [],
            }
        case FORM_SUBMIT_FAILURE:
            return {
                ...state,
                errors: action.payload,
            }
        default:
            return state
    }
}

export default formCheckOutReducer