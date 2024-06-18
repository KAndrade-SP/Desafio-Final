import { Dispatch } from 'redux'
import { checkOutSchema, FormData } from '../../types/CheckOutValidations'
import { FORM_SUBMIT_FAILURE, FORM_SUBMIT_SUCCESS } from './types'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const submitForm = async (formData: FormData, dispatch: Dispatch) => {

    try {
        await checkOutSchema.parseAsync(formData)

        dispatch({
            type: FORM_SUBMIT_SUCCESS,
            payload: formData,
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