import { useState, useEffect } from "react"
import { Routes, Route, Navigate, useLocation, matchPath } from "react-router-dom"

import { auth } from "./services/firebase"

import Home from "./pages/Home/Home"
import SignUp from "./pages/SignUp/SignUp"
import SignIn from "./pages/SignIn/SignIn"
import User from "./types/UserType"
import Navbar from "./components/Navbar"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const [user, setUser] = useState<User | null>(null)
  const location = useLocation()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser)
        console.log(user)
      } else {
        setUser(null)
      }
    })
  }, [])

  return (
    <>
      { !!matchPath("/signIn", location.pathname) || !!matchPath("/signUp", location.pathname)
      ? 
        <></> 
      : 
        <Navbar/>
      }
      <Routes>
        <Route
          path="/"
          element={<Home user={user} />}
        />
        <Route 
          path="/signUp" 
          element={!user ? <SignUp /> : <Navigate to="/"/>} 
        />
          
        <Route 
          path="/signIn" 
          element={!user ? <SignIn /> : <Navigate to="/"/>} 
        />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
