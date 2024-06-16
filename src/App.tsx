import { useState, useEffect } from "react"
import { Routes, Route, Navigate, useLocation, matchPath } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import { persistor } from "./redux/store"

import { auth } from "./services/firebase"

import Home from "./pages/Home/Home"
import SignUp from "./pages/SignUp/SignUp"
import SignIn from "./pages/SignIn/SignIn"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Profile from "./pages/Profile/Profile"
import Shop from "./pages/Shop/Shop"
import ProductPage from "./pages/ProductPage/ProductPage"

import User from "./types/UserType"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import CheckOut from "./pages/CheckOut/CheckOut"

function App() {

  const [user, setUser] = useState<User | null>(null)
  const location = useLocation()

  useEffect(() => {

    let isMounted = true

    if (isMounted) {
      auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          setUser(authUser)
        } else {
          setUser(null)
        }
      })
    }
    return () => { isMounted = false }

  }, [])

  return (
    <>
      <PersistGate loading={null} persistor={persistor}>
        {!!matchPath("/signIn", location.pathname) || !!matchPath("/signUp", location.pathname)
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
            element={!user ? <SignUp /> : <Navigate to="/" />}
          />
          <Route
            path="/signIn"
            element={!user ? <SignIn /> : <Navigate to="/" />}
          />
          <Route
            path="/profile"
            element={user ? <Profile user={user} /> : <Navigate to="/" />}
          />
          <Route
            path="/shop"
            element={<Shop />}
          />
          <Route
            path="/product/:sku"
            element={<ProductPage />}
          />
          <Route
            path="/checkout"
            //Necessita refatoração nessa proteção de rota:
            element={<CheckOut user={user} />}
          />
        </Routes>

        {!!matchPath("/signIn", location.pathname) || !!matchPath("/signUp", location.pathname)
          ?
          <></>
          :
          <Footer />
        }
        <ToastContainer />
      </PersistGate>
    </>
  )
}

export default App
