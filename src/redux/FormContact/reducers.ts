import { AnyAction } from 'redux'
import { FORM_SUBMIT_FAILURE, FORM_SUBMIT_SUCCESS } from './types'
import { FormContactData } from '../../types/ContactValidations'

export interface FormState extends FormContactData {
    errors?: string[]
}

const initialState: FormState = {
    name: '',
    email: '',
    subject: '',
    message: ''
}

const formContactReducer = (state = initialState, action: AnyAction): FormState => {
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

export default formContactReducer