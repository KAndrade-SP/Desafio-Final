import { useState, useRef } from "react"
import { Link, useLocation } from "react-router-dom"

import { navLinks } from "../types/NavLinks"

import User from "../types/UserType"
import CartOverlay from "./CartOverlay"

interface NavbarProps {
  user: User | null
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {

  const ref = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const [toggle, setToggle] = useState(false)

  const outsideClick = (e: MouseEvent) => {

    const element = ref.current

    if (toggle && element && !element.contains(e.target as Node)) {
      setToggle(!toggle)
    }
  }

  const handleClick = () => {
    setToggle(!toggle)
  }

  const handleClickCart = () => {
    setToggle(!toggle)
  }

  document.addEventListener("mousedown", outsideClick)

  return (
    <>
      <header ref={ref} className="w-full h-[80px] relative z-50 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 h-full flex justify-between items-center">

          <Link to={'/'} className="transition ease-in-out hover:scale-105">
            <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/logos/furniroLogoComplete.svg" alt="FurniroLogo" />
          </Link>

          <div className="hidden md:flex items-center">
            <ul className="flex gap-7 font-semibold text-lg">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path
                return (
                  <li key={index}>
                    <Link to={link.path} className={isActive ? 'text-buttonBrown hover:text-buttonDarkBrown' : 'text-black hover:text-caption'}>
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="hidden md:flex flex-row gap-8">
            {user?.photoURL
              ?
              <Link to={'/profile'}>
                <img src={user?.photoURL} alt="UserProfilePhoto" className="rounded-full w-7 cursor-pointer hover:opacity-70"></img>
              </Link>
              :
              <Link to={'/profile'}>
                <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/profile.svg" alt="UserProfileIcon" className="cursor-pointer w-7 hover:opacity-50" />
              </Link>
            }
            <div onClick={handleClickCart}>
              <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/shoppingCart.svg" alt="ShoppingCartIcon" className="cursor-pointer hover:opacity-50" />
            </div>
            
            <div className="hidden md:flex" onClick={handleClickCart}>
              {toggle && <CartOverlay />}
            </div>
            
          </div>

          <div className='md:hidden' onClick={handleClick}>
            <button className="text-black hover:text-subtitleGray focus:outline-none">
              <svg className="h-8 w-8" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* DROPDOWN MENU */}
          <div onClick={handleClick} className={toggle ? 'flex flex-col gap-10 fixed inset-y-0 top-0 right-0 z-40 w-1/2 px-10 justify-start bg-divisorLightBeige shadow-lg overflow-y-auto md:hidden' : 'hidden'}>

            {toggle &&
              <div className="flex items-center justify-between border-b py-6">
                <h3 className="hidden sm:flex font-semibold text-xl">Menu</h3>
                <svg className="h-8 w-10 cursor-pointer hover:text-subtitleGray" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            }

            <ul className="flex flex-col gap-6">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path
                return (
                  <li key={index}>
                    <Link to={link.path} className={isActive ? 'text-buttonBrown hover:text-buttonDarkBrown' : 'text-black hover:text-caption'}>
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div className="flex flex-col mini:flex-row text-sm gap-4 border-t py-6 justify-between">
              <Link to={'/cart'}>
                <div className="w-20 py-1 px-4 flex items-center justify-center rounded-xl text-buttonBrown font-bold bg-white hover:bg-buttonDarkBrown border-2 border-buttonBrown hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown cursor-pointer">
                  <p>Cart</p>
                </div>
              </Link>

              <Link to={'/profile'}>
                <div className="w-20 py-1 px-4 flex items-center justify-center rounded-xl text-buttonBrown font-bold bg-white hover:bg-buttonDarkBrown border-2 border-buttonBrown hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown cursor-pointer">
                  <p>Profile</p>
                </div>
              </Link>
            </div>

          </div>

        </div>
      </header>
    </>
  )
}

export default Navbar