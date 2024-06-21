import { Dispatch } from 'redux'
import { footerSchema, FormFooterData } from '../../types/FooterValidations'
import { FORM_SUBMIT_FAILURE, FORM_SUBMIT_SUCCESS } from './types'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const submitFooterForm = async (formFooterData: FormFooterData, dispatch: Dispatch) => {

    try {
        await footerSchema.parseAsync(formFooterData)

        dispatch({
            type: FORM_SUBMIT_SUCCESS,
            payload: formFooterData,
        })

        toast.success('Submitted with success!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })

    } catch (error: any) {
        dispatch({
            type: FORM_SUBMIT_FAILURE,
            payload: error.errors,
        })

        toast.error('An error occurred!' + error.errors, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }
}