import { AnyAction } from 'redux'
import { FORM_SUBMIT_FAILURE, FORM_SUBMIT_SUCCESS } from './types'
import { FormFooterData } from '../../types/FooterValidations'

export interface FormState extends FormFooterData {
    errors?: string[]
}

const initialState: FormState = {
    email: '',
}

const formFooterReducer = (state = initialState, action: AnyAction): FormState => {
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

export default formFooterReducer