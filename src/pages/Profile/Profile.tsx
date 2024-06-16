import React from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../../services/firebase'
import { Link, useNavigate } from 'react-router-dom'

import User from "../../types/UserType"

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ProfileProps {
  user: User | null | undefined
}

const Profile: React.FC<ProfileProps> = ({ user }) => {

  const navigate = useNavigate()

  const handleLogout = () => {
    signOut(auth).then(() => {

      navigate("/")

      toast.success('Signed out succesfully!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
      {user
        ?
        <div>
          {user?.photoURL && <img src={user?.photoURL} alt="UserProfilePhoto" className="rounded-full w-7 cursor-pointer hover:opacity-70"></img>}
          <button onClick={handleLogout}>LOG OUT</button>
        </div>
        :
        <section className="flex flex-col gap-10 items-center justify-center mx-auto py-20">
          <h3 className="font-medium text-3xl text-titleGray text-center">You don't have a profile, please sign in to continue</h3>
          <Link to="/signIn">
            <button className='px-20 py-3 self-center rounded-xl hover:bg-buttonBrown hover:border-buttonDarkBrown hover:text-white border border-titleGray'>Sign in</button>
          </Link>
        </section>
      }
    </>

  )
}

export default Profile