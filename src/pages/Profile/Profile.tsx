import React from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../../services/firebase'
import { useNavigate } from 'react-router-dom'

import User from "../../types/UserType"

interface ProfileProps {
  user: User | null | undefined
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  
  const navigate = useNavigate()
 
  const handleLogout = () => {               
    signOut(auth).then(() => {
      navigate("/")
      console.log("Signed out successfully")
    }).catch((error) => {
      console.log(error)
    })
  }
  
  return (
    <div>
        {user?.photoURL && <img src={user?.photoURL} alt="UserProfilePhoto" className="rounded-full w-7 cursor-pointer hover:opacity-70"></img> }
        <button onClick={handleLogout}>LOG OUT</button>
    </div>
  )
}

export default Profile