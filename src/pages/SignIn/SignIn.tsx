import { useState } from 'react';
import { FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth } from '../../services/firebase'
import { NavLink, useNavigate } from 'react-router-dom'

const SignIn = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
     
  const onSignIn = (e: React.FormEvent<HTMLFormElement>) => {

      e.preventDefault()

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        navigate("/")
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  function signInWithGoogle() {

    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
      .then((userCredential) => {
        const user = userCredential.user
        navigate("/")
        console.log(user)
      }).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  function signInWithFacebook() {

    const provider = new FacebookAuthProvider()

    signInWithPopup(auth, provider)
      .then((userCredential) => {
        const user = userCredential.user
        navigate("/")
        console.log(user)
      }).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  return (
    <>
      <section className="flex items-center justify-center min-h-screen bg-white">        
        <div className="w-full max-w-md p-6 bg-boxLightBrown rounded-lg shadow-md">

          <h1 className="text-2xl font-bold text-center text-titleGray mb-6">Furniro</h1>  

          <form onSubmit={onSignIn}>  
            <div className="mb-4">
              <label htmlFor="email-address" className="block text-sm font-medium text-subtitleGray">
                Email address
              </label>
              <input
                type="email"
                id="email-address"
                className="mt-1 block w-full px-3 py-2 border border-cardWhite rounded-md shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}  
                required                                    
                placeholder="Email address"                                
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-subtitleGray">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-cardWhite rounded-md shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required                                 
                placeholder="Password"              
              />
            </div>  

            <div className="flex flex-col gap-4">
              <button
                type="submit" 
                className="w-full px-4 py-2 bg-buttonBrown text-white rounded-md hover:bg-buttonDarkBrown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown"                      
              >  
                Sign in                                
              </button>

              <button 
                type="button" 
                className="text-white w-full px-4 py-2 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4285F4]/50 font-medium rounded-md text-center inline-flex items-center justify-center"
                onClick={signInWithGoogle}
              >
                <svg 
                  className="mr-2 -ml-1 w-4 h-4" 
                  aria-hidden="true" 
                  focusable="false" 
                  data-prefix="fab" 
                  data-icon="google" 
                  role="img" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 488 512">
                  <path 
                    fill="currentColor" 
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
                  </path>
                </svg>
                Sign in with Google
              </button>

              <button 
                type="button" 
                className="text-white w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-medium rounded-md text-center inline-flex items-center justify-center"
                onClick={signInWithFacebook}
              >
                <svg 
                  width="20" 
                  height="20" 
                  fill="currentColor" 
                  className="mr-2" 
                  viewBox="0 0 1792 1792" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                </svg>
                Sign in with Facebook
              </button>
            </div>              
                                                                      
          </form>
                      
          <p className="mt-4 text-center text-sm text-gray-600">
            No account yet? {' '}
            <NavLink to="/signUp" className="text-buttonBrown hover:text-buttonDarkBrown">
              Sign up
            </NavLink>
          </p>                   
        </div>
      </section>
    </>
  )
}

export default SignIn