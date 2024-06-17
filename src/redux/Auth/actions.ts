import { Dispatch } from 'redux'
import { auth } from '../../services/firebase'
import { FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

export const loginWithEmail = (email: string, password: string) => {

    return async (dispatch: Dispatch) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: user
            })
        } catch (error) {
            dispatch({
                type: 'LOGIN_FAILURE',
                payload: 'error'
            })
        }
    }
}

export const loginWithGoogle = () => {

    return async (dispatch: Dispatch) => {
        try {
            const provider = new GoogleAuthProvider()

            signInWithPopup(auth, provider)
                .then((userCredential) => {
                    dispatch({
                        type: 'LOGIN_SUCCESS',
                        payload: userCredential.user
                    })
                })

        } catch (error) {
            dispatch({
                type: 'LOGIN_FAILURE',
                payload: 'error'
            })
        }
    }
}

export const loginWithFacebook = () => {

    return async (dispatch: Dispatch) => {
        try {
            const provider = new FacebookAuthProvider()

            signInWithPopup(auth, provider)
                .then((userCredential) => {
                    dispatch({
                        type: 'LOGIN_SUCCESS',
                        payload: userCredential.user
                    })
                })

        } catch (error) {
            dispatch({
                type: 'LOGIN_FAILURE',
                payload: 'error'
            })
        }
    }
}

export const logOut = () => {
    return async (dispatch: Dispatch) => {
        await auth.signOut()
        dispatch({ type: 'LOGOUT' })
    }
}