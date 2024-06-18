import { Routes, Route, Navigate, useLocation, matchPath } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import { persistor } from "./redux/store"
import { useSelector } from "react-redux"
import { selectCurrentUser, selectIsAuthenticated } from "./redux/Auth/selectors"

import Home from "./pages/Home/Home"
import SignUp from "./pages/SignUp/SignUp"
import SignIn from "./pages/SignIn/SignIn"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Profile from "./pages/Profile/Profile"
import Shop from "./pages/Shop/Shop"
import ProductPage from "./pages/ProductPage/ProductPage"
import Cart from "./pages/Cart/CartPage"
import CheckOut from "./pages/CheckOut/CheckOut"
import PrivateRoute from "./components/PrivateRoute"
import Contact from "./pages/Contact/Contact"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const user = useSelector(selectCurrentUser)
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const location = useLocation()

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
            element={!user && !isAuthenticated ? <SignUp /> : <Navigate to="/" />}
          />
          <Route
            path="/signIn"
            element={!user && !isAuthenticated ? <SignIn /> : <Navigate to="/" />}
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
            path="/cart"
            element={<Cart />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route element={<PrivateRoute />}>
            <Route
              path="/checkout"
              element={<CheckOut />}
            />
          </Route>
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
