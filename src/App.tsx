import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"

import { auth } from "./services/firebase"

import Home from "./pages/Home/Home"
import SignUp from "./pages/SignUp/SignUp"
import SignIn from "./pages/SignIn/SignIn"

import User from "./types/UserType"

function App() {

  const [user, setUser] = useState<User | null>(null)

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
      <Routes>
        <Route
          path="/"
          element={<Home user={user} />}
        />
        <Route
          path="/signUp"
          element={<SignUp/>}
        />
        <Route 
          path="/signIn" 
          element={<SignIn/>} 
        />
      </Routes>
    </>
  )
}

export default App
