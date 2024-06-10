import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../services/firebase'
 
const Signup = () => {
  
  const navigate = useNavigate()
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
  const onSignUp = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()
     
    try {

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user
      
      await updateProfile(user, { displayName })
      console.log(user)

      navigate('/signIn')
    } catch (error) {
      console.error(error)
    }
  }
 
  return (
    <>
      <section className="flex items-center justify-center min-h-screen bg-white">        
        <div className="w-full max-w-md p-6 bg-boxLightBrown rounded-lg shadow-md">

          <h1 className="text-2xl font-bold text-center text-titleGray mb-6">Furniro</h1>  

          <form onSubmit={onSignUp}> 

            <div className="mb-4">
              <label htmlFor="display-name" className="block text-sm font-medium text-subtitleGray">Name</label>
              <input
                type="text"
                id="display-name"
                className="mt-1 block w-full px-3 py-2 border border-cardWhite rounded-md shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                required
                placeholder="Name"
              />
            </div>

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
              Sign up                               
            </button>                                                            
          </form>
                      
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account? {' '}
            <NavLink to="/signIn" className="text-buttonBrown hover:text-buttonDarkBrown">
              Sign in
            </NavLink>
          </p>                   
        </div>
      </section>
    </>
  )
}
 
export default Signup