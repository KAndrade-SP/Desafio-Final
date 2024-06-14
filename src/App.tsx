import { useState, useEffect } from "react"
import { Routes, Route, Navigate, useLocation, matchPath } from "react-router-dom"

import { auth } from "./services/firebase"

import Home from "./pages/Home/Home"
import SignUp from "./pages/SignUp/SignUp"
import SignIn from "./pages/SignIn/SignIn"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Profile from "./pages/Profile/Profile"

import User from "./types/UserType"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Shop from "./pages/Shop/Shop"

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
        <Navbar user={user} />
      }
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route 
          path="/signUp" 
          element={!user ? <SignUp /> : <Navigate to="/"/>} 
        /> 
        <Route 
          path="/signIn" 
          element={!user ? <SignIn /> : <Navigate to="/"/>} 
        />
        <Route 
          path="/profile" 
          element={user ? <Profile user={user} /> : <Navigate to="/"/>} 
        />
        <Route 
          path="/shop" 
          element={<Shop />} 
        />
      </Routes>

      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
