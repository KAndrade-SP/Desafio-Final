import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBiWUfyVHerxDSJk6MVJmYvH5DCL6DzZW0",
    authDomain: "final-challenge-46313.firebaseapp.com",
    projectId: "final-challenge-46313",
    storageBucket: "final-challenge-46313.appspot.com",
    messagingSenderId: "305433937826",
    appId: "1:305433937826:web:da77dfee054ed6856ed4fb",
    measurementId: "G-HYDM12P5NT"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
export default app