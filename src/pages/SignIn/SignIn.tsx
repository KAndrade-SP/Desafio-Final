import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'
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
                            
            <button
              type="submit" 
              className="w-full px-4 py-2 bg-buttonBrown text-white rounded-md hover:bg-buttonDarkBrown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown"                      
            >  
              Sign in                                
            </button>                                                            
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